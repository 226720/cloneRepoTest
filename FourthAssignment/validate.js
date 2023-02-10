function validate() {
    var userName = document.getElementById("uname");
    var password = document.getElementById("password");
    if(userName.value.trim()==""){
        userName.style.border="3px solid red";
        alert("username cannot be blank");
        return false;
    }
    else if(password.value.trim()==""){
        password.style.border="3px solid red";
        alert("password cannot be blank");
        return false;
    }
    else if(password.value.trim().length<5){
        password.style.border="3px solid red";
        alert("password should contain atleast 5 characters");
        return false;
    }
    else {
      return true;
    }
  }