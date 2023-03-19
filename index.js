function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "oumalyons26@gmail.com",
        Password : "ouma26ly.",
        To : 'oumalyons26@gmail.com',
        From : document.getElementById("email").Value,
        Subject : "New contact form",
        Body : "Name: "+ document.getElementById("name").Value
                 + "<br> Email: " + document.getElementById("email").Value
                 + "<br> Phone no: " + document.getElementById("phone").Value
                 + "<br> Message: " + document.getElementById("message").Value
    }).then(
      message => alert("Message sent succesfully")
    );
}