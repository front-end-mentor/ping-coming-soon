let errMessage = false;
function validate() {
	let userEmail = document.getElementById("user-email");
	let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if (!userEmail.value.match(emailRegex)) {
		if (!errMessage) {
			errMessage = true;
			let text = "Please provide a valid email address";
			let newNode = document.createElement("p");
			newNode.classList.add("text-red");
			newNode.textContent = text;
			userEmail.parentNode.insertBefore(newNode, userEmail.nextSibling);
		}
	} else {
		console.log(userEmail.value);
		console.log("passed");
	}
	return false;
}
