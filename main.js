function password(){
  var pass = prompt('パスワードを入力してください。');
  if(pass == "") {
    return;
  }
  location.href = pass + '.html';
}

function goLoginPage(){
  passwd=document.formno1.passwd.value;
    if(passwd == "tarako"){
      location.href="index.html";
    }else{
      alert('パスワードが違います');
   }
}

function pwpage(){
  var pw = prompt('パスワードを入力してください。');
  if(pw == "sloth-folivora") {
    location.href="mypage.html";
  } else {
    return;
  }
}