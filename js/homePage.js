const registerForm = document.getElementById("registerForm");
const registerEmail = document.getElementById("registerEmail");

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
        for(let registered of newsletterClub) if (registered == registerEmail.value) isUserInClub = true;
        if (isUserInClub != true) {
            newsletterClub.push(registerEmail.value);
            alert("Welcome to our club");
        }
        else {
            alert("Hi, you are already in our club");
        }
    }
};