

let fname=document.getElementById("fname");
let lname=document.getElementById("lname");
let email=document.getElementById("email");
let pass=document.getElementById("pass");
let conpass=document.getElementById("conpass");

let fpara=document.getElementById("fpara");
let lpara=document.getElementById("lpara");
let mailpara=document.getElementById("mailpara");
let passpara=document.getElementById("passpara");
let conpara=document.getElementById("conpara");


function formSubmit(e){
	e.preventDefault();
	//first name
	if(fname.value=="")
	{
		fpara.innerHTML="First Name is Required!";
		fpara.style.color="red";
	    
	}
	else
	{
		fpara.innerHTML="";
		fpara.style.diplay="none";
		
		//last name
		
		if(lname.value=="")
		{
			lpara.innerHTML="Last Name is Required!";
		    lpara.style.color="red";
		}
		else
		{
			lpara.innerHTML="";
			lpara.style.diplay="none";
			
			//email 
			
			if(email.value=="" || email.value.length<4)
			{
				mailpara.innerHTML="please Enter your email"
				mailpara.style.color="red"
			}
			else if (
			email.value.length>4 && 
			email.value.includes('@') && 
			email.value.includes('.') && 
			(email.value.endsWith(".in") || email.value.endsWith(".com") ))
			{
				
				mailpara.innerHTML="";
				
				//password
				
					const hasUppercase = /[A-Z]/.test(pass.value); 
                    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(pass.value);
	                const hasNumber=/[0-9]/.test(pass.value);
	
	                if(pass.value=="")
	                {
		                  passpara.innerHTML="please enter the password"
		                  passpara.style.color="red";
	                }
	                 else if(pass.value.length<7)
	                {
		                passpara.innerHTML="please enter the password alteast 7 character";
		                passpara.style.color="red";
	                }
	                else if(!hasUppercase && !hasSpecialChar)
	                {
		                passpara.innerHTML="password don't have specail char or capital letter!";
		                passpara.style.color="red";
	                 }
	                else if(!hasUppercase)
	                {
		                passpara.innerHTML="password don't have capital letter!";
		                passpara.style.color="red";
	                }
	                else if(!hasSpecialChar)
	                {
		                passpara.innerHTML="password don't have special char!";
		                passpara.style.color="red";
	                }
	                else if(!hasNumber){
		                passpara.innerHTML="password don't have Number!";
		                passpara.style.color="red";
	                }
	                else
	                {
		                passpara.innerHTML="*atleast 7 character and includes one special character and One capital letter";
						passpara.style.color="black";
						
						//confirm password
						
						if(conpass.value=="")
						{
							conpara.innerHTML="please enter the password again!";
		                    conpara.style.color="red";
						}
						else if(pass.value !== conpass.value)
						{
							conpara.innerHTML="this value do not matches the password you provided previously!";
		                    conpara.style.color="red";
						}
						else
						{
							conpara.innerHTML="*must match the password you entered";
							conpara.style.color="black";
							//console.log(fname.value+ " "+lname.value+" "+email.value+" "+pass.value);
							storeInLocalStroage(fname.value,lname.value,email.value,pass.value);
							fname.value="";
							lname.value="";
							email.value="";
							pass.value="";
							conpass.value="";
							
						}
							
	                }
				
			}
			else
			{
				mailpara.innerHTML="Invalid email";
				mailpara.style.color="red";
			}
			
		}
	}
	
	function storeInLocalStroage(fname,lname,email,pass){
		
		console.log(fname + " "+lname+" "+email+" "+pass);
		
		const userDetails={
			FirstName:fname,
			LastName:lname,
			Email:email,
			Password:pass
		}
		
		const usersArray = JSON.parse(localStorage.getItem("userDetails")) || [];
		
		 usersArray.push(userDetails);
		
		localStorage.setItem("userDetails", JSON.stringify(usersArray));
		
		location.href="login.html";
	}
	

	
	
}







