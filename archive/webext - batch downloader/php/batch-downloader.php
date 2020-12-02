<?php 

function downloadFromUrl($url, $filePath)
{
	$ch = curl_init($url);
	
	// Các trang hay chuyển kiểu redirect nên dùng cấu hình này
	curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
	
	$file = fopen($filePath, 'wb');
    curl_setopt($ch, CURLOPT_FILE, $file);
    curl_setopt($ch, CURLOPT_HEADER, false);
	
	// Sử dụng proxy
	// $proxy = 'socks5://127.0.0.1:2222';
	// $proxy = '127.0.0.1:2222';
	// $proxy = '127.0.0.1';
	$proxy = 'http://192.168.103.33:80';

	if (!empty($proxy)) {
		curl_setopt($ch, CURLOPT_PROXY, $proxy);
		// curl_setopt($ch, CURLOPT_PROXYPORT, 2222);
		// curl_setopt($ch, CURLOPT_PROXYTYPE, CURLPROXY_SOCKS5);
		// curl_setopt($ch, CURLOPT_PROXYUSERPWD, "username:pass");
		
		// Phải có 2 cấu hình này thì mới sử dụng được https qua proxy
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
		curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
	}
	
	// Nhiều server có cơ chế chặn bot nên dùng cấu hình sau
	curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.7) Gecko/20070914 Firefox/2.0.0.7');
    curl_setopt($ch, CURLOPT_REFERER, 'https://mangakakalot.com/');

    curl_exec($ch);
    curl_close($ch);

    fclose($file);
}

if (count($argv) < 2) {
    echo 'Ban phai nhap file input' . PHP_EOL;
} else {
    $jsonFilePath = $argv[1];
    $fileContent = file_get_contents($jsonFilePath);
    $images = json_decode($fileContent);
    foreach ($images as $img) {        
        $directory = dirname($img->name);
        if (!file_exists($directory)) {
            mkdir($directory);
        }
        if (is_dir($directory)) {
            echo $img->url . PHP_EOL;
            downloadFromUrl($img->url, $img->name);
        }
    }
}
