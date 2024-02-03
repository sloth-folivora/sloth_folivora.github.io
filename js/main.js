function pwpage(){
  var pw = prompt('パスワードを入力してください。');
  if(pw == "あいうえお") {
    location.href="mypage.html";
  } else {
    return;
  }
}