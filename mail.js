
function sendMail(){
    let parms={
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message:document.getElementById("message").value ,
    }
    emailjs.send("service_os1pesi","template_kr5ucic",parms)
    .then(alert("Email Sent!!"))
    
}