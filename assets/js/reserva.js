function confirmarReserva(){
    //programacion basica//
let nombre = document.getElementById('nombre').value;
let correo = document.getElementById('correo').value;
let fecha = document.getElementById('fecha').value;
let hora = document.getElementById('hora').value;

//
if(!nombre|| !correo|| !fecha||!hora){
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