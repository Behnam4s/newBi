let userData = document.getElementById('userData');
userData.innerHTML = "کاربر گرامی " + localStorage.getItem("userName");
userData.innerHTML += " با رمز عبور " + localStorage.getItem("passWord") + " خوش آمدید" ;
function logOut(){
    window.open("index.html","_self");
    localStorage.removeItem("userName");
    localStorage.removeItem("passWord");
}