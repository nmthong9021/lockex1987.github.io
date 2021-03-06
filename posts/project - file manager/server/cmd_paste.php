<?php

include_once 'bootstrap.php';

// Lấy tham số JSON từ request
$params = getJsonParams();
$type = $params->type;
$oldPath = $rootFolder . $params->oldPath;
$newPath = $rootFolder . $params->newPath;

// Thực thi
if (file_exists($newPath)) {
    $code = 2;
    $message = 'File đã tồn tại';
} else {
    $message = '';
    if ($type == 'copy') {
        $result = FileManager::copy($oldPath, $newPath);
    } else if ($type == 'cut' || $type == 'rename') {
        $result = FileManager::move($oldPath, $newPath);
    }
    $code = $result ? 0 : 1;
}

// Trả về cho client
responseJson([
    'code' => $code,
    'message' => $message
]);