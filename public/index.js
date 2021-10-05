function ValidateEmail(inputText) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.value.match(mailformat)) {
    document.getElementById("email").style.backgroundColor = "#B1E693";
    document.getElementById("messege").innerHTML = "Your email id is Valid";
    return true;
  } else {
    document.getElementById("email").style.backgroundColor = "#ffb3b3";
    document.getElementById("messege").innerHTML = "Your email id is invalid";
    return false;
  }
}




function Validatepassword() {
  if (document.getElementById('pass').value.length >= 8) {
    document.getElementById("pass").style.backgroundColor = "#B1E693";
    document.getElementById("messege").innerHTML = "Your password contains " + document.getElementById('pass').value.length + " charecters";
    return true;
  } else {
    document.getElementById("pass").style.backgroundColor = "#ffb3b3";
    document.getElementById("messege").innerHTML = "Please enter " + (8 - document.getElementById('pass').value.length) + "more charecters";
    return false;
  }
}



function Validatecnfpassword() {
  if (document.getElementById('passconfirm').value.length >= 8 && document.getElementById('pass').value === document.getElementById('passconfirm').value) {
    document.getElementById("passconfirm").style.backgroundColor = "#B1E693";
    document.getElementById("messege").innerHTML = "Password matched";
    return true;
  } else {
    document.getElementById("passconfirm").style.backgroundColor = "#ffb3b3";
    document.getElementById("messege").innerHTML = "Password mismatched";
    return false;
  }
}


var check = function() {
  if (document.getElementById('email').value.length >= 1) {
  ValidateEmail(document.getElementById('email'));
  }

  if (document.getElementById('pass').value.length >= 1) {
    Validatepassword();
  }
  if (document.getElementById('passconfirm').value.length >= 1) {
    Validatecnfpassword();
  }

    if (document.getElementById('pass').value === document.getElementById('passconfirm').value &&
    document.getElementById('email').value.length >= 1 &&
    ValidateEmail(document.getElementById('email')) &&
    document.getElementById('passconfirm').value.length >= 8 &&
  document.getElementById('name').value.length >= 1 &&
document.getElementById('branchname').value.length >= 1)
    {
      document.getElementById("registerbutton").disabled = false;
      document.getElementById("messege").innerHTML = "Now you can Submit your details";
    }
  else document.getElementById("registerbutton").disabled = true;
}
