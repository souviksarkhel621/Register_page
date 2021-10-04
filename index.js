function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{document.getElementById("email").style.backgroundColor = "#B1E693";
return true;
}
else
{
document.getElementById("email").style.backgroundColor = "#ffb3b3";
return false;
}
}




function Validatepassword(inputText)
{
if(document.getElementById('pass').value.length>=8)
{document.getElementById("pass").style.backgroundColor = "#B1E693";
return true;
}
else
{
document.getElementById("pass").style.backgroundColor = "#ffb3b3";
return false;
}
}



function Validatecnfpassword(inputText)
{
if(document.getElementById('pass-confirm').value.length>=8 && document.getElementById('pass').value===document.getElementById('pass-confirm').value)
{document.getElementById("pass-confirm").style.backgroundColor = "#B1E693";
return true;
}
else
{
document.getElementById("pass-confirm").style.backgroundColor = "#ffb3b3";
return false;
}
}




var check = function() {
  ValidateEmail(document.getElementById('email'));
  if(document.getElementById('pass').value.length>=1){Validatepassword(document.getElementById('pass'));}
  if(document.getElementById('pass-confirm').value.length>=1){Validatecnfpassword(document.getElementById('pass-confirm'));}
  if(document.getElementById('pass').value===document.getElementById('pass-confirm').value && ValidateEmail(document.getElementById('email')) && document.getElementById('pass-confirm').value.length>=8)
  {
    document.getElementById("registerbutton").disabled = false;
  }
  else document.getElementById("registerbutton").disabled = true;
}
