function DisplayDate() {
  let now = new Date();
  //年を取得する
  var YYYY = now.getFullYear();
  //月を取得する
  var MM = now.getMonth()+1;
  //日を取得する
  var DD = now.getDate();
  
  alert(YYYY + "/" + MM + "/" + DD);
}