

let email=document.getElementById("email");
let pass=document.getElementById("pass");

let mailpara=document.getElementById("mailpara");
let passpara=document.getElementById("passpara");





function formSubmit(e){
	e.preventDefault();
	
	let userDetail=JSON.parse(localStorage.getItem("userDetails"));
	
	let user=userDetail.filter(function(use){
         return use.Email==email.value;
    })
	
	console.log(user);
	
	if(user.length==0)
	{
		mailpara.innerHTML="Enter wrong user Or user Don't exists";
		mailpara.style.color="red";
		
	}
	else 
	{
		mailpara.innerHTML="";
		
		 if(pass.value=="")
		{
			passpara.innerHTML="enter password";
		    passpara.style.color="red";
		}
		else if( pass.value.length>1 && user[0].Password !== pass.value)
	    {
		    passpara.innerHTML="enter correct password";
		    passpara.style.color="red";
	    } 
		else{
			passpara.innerHTML="";
			
			location.href="home.html";
		}
		
	}
	
}

