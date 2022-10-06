var mensaje = document.getElementById(msg)
function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "gsac@email.com",
        Password: "pass",
        To: 'jdelgadoguerra13@correo.unicordoba.edu.co',
        From: "ydepositovv@gmail.com",
        Subject: "Contacto Formulario Portafolio",
        Body: mensaje.value
    }).then(
        message => alert(message)
    );
}