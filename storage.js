localStorage.setItem("hello", "Hola usuario")



const inputNombre= document.getElementById("inputNombre")
const inputEdad= document.getElementById("inputEdad")
const inputEmail= document.getElementById("inputEmail")
const boton = document.getElementById("boton")


function guardarForm(){
    localStorage.setItem("nombre", inputNombre.value)
    localStorage.setItem("edad", inputEdad.value)
    localStorage.setItem("email", inputEmail.value)
}


boton.addEventListener("click", guardarForm)


function recuperarDatosDelFormulario(){
    inputNombre.value = localStorage.getItem("nombre")
    inputEdad.value = localStorage.getItem("edad")
    inputEmail.value = localStorage.getItem("email")
}


for (let i = 0; i < localStorage.length; i++) {
    let contrasena = localStorage.key(i);
    console.log("contrasena: "+ contrasena);
    console.log("Valor: "+ localStorage.getItem(contrasena));
}


const persona = {
    nombre: "Carlos",
    edad:43,
    direccion:{
    calle:"Av. San Martin",
    numero: 1257,
    ciudad: "Buenos Aires"
    }
}

const personaEnJson = JSON.stringify(persona)


alert(persona)
alert(personaEnJson)


const personaDesdeElJson = JSON.parse(personaEnJson)


console.log(personaEnJson)
console.log(personaDesdeElJson)