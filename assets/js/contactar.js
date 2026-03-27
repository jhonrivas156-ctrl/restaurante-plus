function enviarmensaje(){
    //programacion basica//
let nombre = document.getElementById('nombre').value;
let correo = document.getElementById('correo').value;
let mensaje = document.getElementById('mensaje').value;

//
if(!nombre|| !correo|| !mensaje){
Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Faltan datos!",
});
}
else{
    Swal.fire({
  icon: "success",
  title: "Excelente",
  text: "Los datos sido enviados",
  
});
}

}