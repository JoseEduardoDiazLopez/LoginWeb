function validar(){

usuario=document.getElementById("usuario").value;
contraseña=document.getElementById("contraseña").value;

if (usuario=="usuario1" && contraseña=="123") {window.location.href="tabla.html" ; }
if (usuario=="usuario2" && contraseña=="123") {window.location.href="perfil.html";}
if(usuario!="usuario1" && usuario!="usuario2"){ alert("Usuario Incorrecto"); return; }
if(contraseña!="123"){ alert("contraseña Incorrecta"); return; }
}