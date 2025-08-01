/* Copiar e-mail al portapapeles y feedback opcional */
function copyMail () {
  const mail = document.getElementById('profileMail').value;
  navigator.clipboard.writeText(mail).then(()=>{
    alert('Correo copiado: ' + mail);
  });
}

/* Menú hamburguesa (puedes moverlo aquí también) */
function toggleMenu () {
  document.querySelector('.navbar-links').classList.toggle('active');
}