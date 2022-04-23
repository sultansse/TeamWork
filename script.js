const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');


// regex vaildate mail
function ValidateEmailAddress(emailString) 
{
	var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//	var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
		return !!emailString && typeof emailString === 'string'
			&& emailString.match(emailRegex);
}

function CheckEmail(emailString)
{
	//get result as true/false
	var Result= ValidateEmailAddress(emailString);
	
	if(Result)
	{
		document.getElementById("output").innerHTML="Valid Email Id";
	}
	else
	{
		document.getElementById("output").innerHTML="NOT a Valid Email Id";
	}
}


// 



signUpButton.addEventListener('click', () => {container.classList.add("right-panel-active");});

signInButton.addEventListener('click', () => {container.classList.remove("right-panel-active");});