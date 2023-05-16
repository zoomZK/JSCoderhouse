boton.onclick = function (){
    titulo.innerHTML= "Nuevo texto";
}

elemento.addEventListener(evento,funcion)


 boton.addEventListener("Click", function(){
    console.log("Clickeaste el boton")
    alert("Evento detectado, chequea la consola")
})


let boton = document.getElementById("submit")
let titulo = document.getElementById("titulo")


 boton.addEventListener("click", function(){
    console.log("Nuevo click")
})


 let inputField = document.getElementById("mytext");
inputField.addEventListener("input", function(event){
    console.log("Valor del texto modificado", event.target.value)
}) 


let form = document.getElementById("myform");
form.addEventListener("submit", function(event){
event.preventDefault(); 
console.log("Formulario enviado")
})