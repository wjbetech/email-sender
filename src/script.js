// initialize emailJS with personal ID
emailjs.init("P-d8GqylapqinMtZg");

// document grabbers
const sendButton = document.querySelector("#send-button");
const result = document.querySelector(".result");

// listeners
sendButton.addEventListener("click", sendEmail);

function sendEmail() {
    // grabbers
    const to = document.getElementById("to").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    emailjs.send("service_k1ed68i", "template_savleuk", {
        to_email: to,
        subject: subject,
        message: message,
    })
    .then(() => {
        result.innerHTML = "Email sent!"
        result.style.opacity = 1;
    }, (err) => {
        result.innerHTML = "Email could not be sent."
        result.style.opacity = 1;
        console.log("ERROR!", err)
    })
}
