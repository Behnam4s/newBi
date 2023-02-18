var user_list = [];
function User(uname, pass) {
  this.userName = uname;
  this.passWord = pass;
}
let user1 = new User("behnam", 1234);
let user2 = new User("mojavad", 4567);

user_list.push(user1, user2);
console.log(user_list);

function userValid() {
  let checkUserData = false;
  let userInp = document.getElementById("userInp").value;
  let passInp = document.getElementById("passInp").value;
  if(userInp=="" || passInp==""){
alert('لطفاً نام کاربری و رمز عبور را وارد نماید!')
  }else{
    for (let inputUser of user_list) {
      console.log(inputUser);
      if (userInp == inputUser.userName && passInp == inputUser.passWord) {
        checkUserData = true;
        localStorage.setItem("userName", inputUser.userName);
        localStorage.setItem("passWord", inputUser.passWord);
        window.open("userProfile.html", "_self");
        break;
      }
    }
    if (checkUserData == false) {
      alert("نام کاربری یا رمز عبور صحیح نیست");
    }
  }
}
