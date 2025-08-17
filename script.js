// your JS code here. If required.

document.getElementById("btn").addEventListener("click", function () {
	let ageInput = document.getElementById("age").value.trim();
	let nameInput = document.getElementById("name").value.trim();

	if (!nameInput || !ageInput) {
		alert("Please enter valid details.");
		return;
	}

	const age = parseInt(ageInput);
	const name = nameInput;

	const votingPromise = () => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (age > 18) {
					resolve(`Welcome, ${name}. You can vote.`);
				} else {
					reject(`Oh sorry ${name}. You aren't old enough.`);
				}
			});
		});
	};

	votingPromise()
		.then((message) => {
			alert(message);
		})
		.catch((error) => {
			alert(error);
		});
});
