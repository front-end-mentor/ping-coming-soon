let err = false;
let userEmail = document.getElementById("user-email");

/* error message */
let errText = "Please provide a valid email address";
let suText = "Congratulations! You'll receive updates";
let newNode = document.createElement("p");
userEmail.parentNode.insertBefore(newNode, userEmail.nextSibling);

function validate() {
	let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if (!userEmail.value.match(emailRegex)) {
		if (!err) {
			err = true;
			newNode.classList.add("text-red");
			newNode.textContent = errText;
			userEmail.style.border = "1px solid red";
		}
	} else {
		err = false;
		newNode.classList.remove("text-red");
		newNode.textContent = suText;
		userEmail.style.border = "1px solid black";

		console.log(userEmail.value);
		console.log("passed");
	}

	return false;
}
