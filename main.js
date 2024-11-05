function handleLogin(event) {
    event.preventDefault(); // Ngăn chặn form submit mặc định

    // Lấy giá trị từ các thẻ input
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;

    // Tạo một URL mới chứa giá trị email và password
    const newPageContent = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Thông tin đăng nhập</title>
        </head>
        <body>
          <h1>Thông tin đăng nhập của bạn:</h1>
          <p>Email: ${email}</p>
          <p>Password: ${password}</p>
        </body>
      </html>
    `;

    // Mở trang mới và hiển thị nội dung
    const newWindow = window.open();
    newWindow.document.write(newPageContent);
    newWindow.document.close();
  }