<?php

class BaseController
{
    // Biến có giá trị là thư mục nào đó trong thư mục views, chứa các file view template của phần đang truy cập
    protected $folder;
  
    // Hàm hiển thị kết quả ra cho người dùng.
    public function render($file, $data = array())
    {
        // Kiểm tra file gọi đến có tồn tại hay không?
        $view_file = 'views/' . $this->folder . '/' . $file . '.php';
        if (is_file($view_file)) {
            // Nếu tồn tại file đó thì tạo ra các biến chứa giá trị truyền vào lúc gọi hàm
            extract($data);
            // Sau đó lưu giá trị trả về khi chạy file view template với các dữ liệu đó vào 1 biến chứ chưa hiển thị luôn ra trình duyệt
            ob_start();
            require_once($view_file);
            $content = ob_get_clean();
            // Sau khi có kết quả đã được lưu vào biến $content, gọi ra template chung của hệ thống đế hiển thị ra cho người dùng
            require_once('views/layouts/application.php');
        } else {
            // Nếu file muốn gọi ra không tồn tại thì chuyển hướng đến trang báo lỗi.
            header('Location: index.php?controller=pages&action=error');
        }
    }
}
