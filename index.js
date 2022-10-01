
function resetFields()
{
    document.getElementById("registration-form").reset(); 

    document.getElementById("first-name-valid").style.display="none";
    document.getElementById("last-name-valid").style.display="none";
    document.getElementById("email-valid").style.display="none";
    
    document.getElementById("tNC-valid").style.display="none"; 
    document.getElementById("password-valid").style.display="none";
}

function validate()
{
   
    let firstName= document.getElementById("first-name").value;
    let lastName= document.getElementById("last-name").value;
    let email = document.getElementById("email").value;
    let password= document.getElementById("password").value;
    let conpass = document.getElementById("con-password").value;
  
    let tnC = document.getElementById("t-and-c").checked;
  
    let error = false;
   
    if(firstName.length >= 3)
    {
        document.getElementById("first-name-valid").style.display="Block";
        document.getElementById("first-name-invalid").style.display="none";
    }
    else 
    {
        document.getElementById("first-name-invalid").style.display="Block";
        document.getElementById("first-name-valid").style.display="none";
        error = true;
    }

    if(lastName.length >= 3)
    {
        document.getElementById("last-name-valid").style.display="Block";
        document.getElementById("last-name-invalid").style.display="none";
    }
    else 
    {
        document.getElementById("last-name-invalid").style.display="Block";
        document.getElementById("last-name-valid").style.display="none";
        error = true;
    }
    
     if(email.substr(email.lastIndexOf('.')+1).length >= 2 && email.includes('@') && email.includes('.') && email.indexOf('@')>0 )
     {
        document.getElementById("email-valid").style.display="block";
        document.getElementById("email-invalid").style.display="none";
     }
     else{
        document.getElementById("email-invalid").style.display="block";
        document.getElementById("email-valid").style.display="none";
        error = true;
     }

     if((password.length >= 8) && (password.includes("$") || password.includes("#") || password.includes("@")) && (password.includes("0") || password.includes("1") || password.includes("2") || password.includes("3") || password.includes("4")) )
     {
      document.getElementById("password-valid").style.display="block";
      document.getElementById("password-invalid").style.display="none";
   }
   else{
      document.getElementById("password-invalid").style.display="block";
      document.getElementById("password-valid").style.display="none";
      error = true;
   }

    if(conpass === password)
    {
      document.getElementById("con-password-valid").style.display="block";
      document.getElementById("con-password-invalid").style.display="none";
   }
   else{
      document.getElementById("con-password-invalid").style.display="block";
      document.getElementById("con-password-valid").style.display="none";
      error = true;
   }

     if(tnC)
     {
      document.getElementById("tNC-invalid").style.display="none";
     }
     else{
      document.getElementById("tNC-invalid").style.display="block";
      error = true;
     }
     
  if(error === false)
  {
   alert("Your details is saved successfully!");
   resetFields();
  }

}
