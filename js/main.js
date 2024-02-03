function pwpage(){
  var pw = prompt('パスワードを入力してください。');
  if(pw == "あいうえお") {
    location.href="../docs_mypage./mypage.html";
  } else {
    return;
  }
}