let btnEnv = document.getElementById("btn");
let usuarioIngresado = document.getElementById("datoa");
let contraseñaIngresada = document.getElementById("datob");
let usuario: string = "Juan";
let contraseña: string = "claveJuan";

btnEnv.addEventListener("click", () => {
  if (
    usuarioIngresado.value === usuario &&
    contraseñaIngresada.value === contraseña
  ) {
    console.log("datos correctos");
  } else {
    console.log("datos incorrectos, vuelva a ingresar");
  }
});
