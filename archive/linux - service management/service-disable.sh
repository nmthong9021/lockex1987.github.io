#!/bin/sh

# Abort immediately if any command exists with a non-zero code.
set -e

# Do we need 'sudo'?
sudo=
if [ "$( id -u )" != 0 ]; then
  sudo='sudo'
fi

# Parse command-line options.
while getopts 'h' option; do
  case "$option" in
    h)
      cat <<-HELP
Usage:
  $( basename "$0" ) [...OPTIONS] [...service]

Options:
  -h       Print script usage and exit.

Arguments:
  service  The service name, e.g., 'apache2', 'mysql', etc.
HELP
      exit 1
      ;;
  esac
done

# Drop parsed options from script input.
shift $((OPTIND-1))

# Ensure we can manage services and System-V init scripts.
if ! which service 1>/dev/null 2>&1 || ! which update-rc.d 1>/dev/null 2>&1; then
  echo '[WARN] You need to be running a Debian-based system with System-V support.' 1>&2
  echo '[WARN] Aborting before any real damage is done.' 1>&2
  exit 1
fi

for service in "$@"; do
  # Stop the service, if it's running.
  echo -n "[STOP]    '$service'... "
  $sudo service "$service" stop 1>/dev/null 2>&1 || :
  echo 'OK'

  # If the legacy System-V style init script is used, purge it from the system.
  # The file remains in /etc/init.d/, but not in any of /etc/rcN.d/ so the service won't start on boot.
  echo -n "[DISABLE] '$service' rc.d initscript... "
  $sudo update-rc.d -f "$service" remove 1>/dev/null
  echo 'OK'

  # If Upstart is used, use an override to set the service job in 'manual' mode.
  # See http://upstart.ubuntu.com/cookbook/#manual
  if [ -f "/etc/init/${service}.conf" ]; then
    echo -n "[DISABLE] '$service' Upstart script... "
    if ! grep 'manual' "/etc/init/${service}.override" 1>/dev/null 2>&1; then
      echo 'manual' | $sudo tee -a "/etc/init/${service}.override" 1>/dev/null
    fi
    echo 'OK'
  fi
done