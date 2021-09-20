let registerForm = document.getElementById("registerForm");
let registerEmail = document.getElementById("registerEmail");

const newsletterClub = [];
let isUserInClub;

registerForm.onsubmit = (event) => {
    event.preventDefault();
    isUserInClub = false;
    if (newsletterClub == 0) {
        newsletterClub.push(registerEmail.value);
        alert("Welcome to our club");
    }
    else {
        for (let i = 0; i < newsletterClub.length; i++) {
            if (registerEmail.value == newsletterClub[i]) {
                isUserInClub = true;
            }
        }
        if (isUserInClub != true) {
            newsletterClub.push(registerEmail.value);
            alert("Welcome to our club");
        }
        else {
            alert("Hi, you are already in our club");
        }
    }
};