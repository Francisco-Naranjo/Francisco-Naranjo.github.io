// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

const unCliente = function () {

    let clienteid = document.querySelector('#ClientesModelId')
    
    fetch(`/api/ClientesApi/${clienteid.value}`)
    .then(uncliente => {
        if (!uncliente.ok) {
            alert("Error al obtener el cliente")
        }
        return uncliente.json();
    }).then(datos => {
        console.log(datos)
        document.getElementById("Correo").value = datos.email;
        document.getElementById("Cedula_RUC").value = datos.cedula_RUC;
        document.getElementById("Telefono").value = datos.telefono;
        document.getElementById("Direccion").value = datos.direccion;
    }).catch(error => {
        console.log(error)
            alert("Ocucion un error:", error)
        }
    )
}

let addProduct = document.querySelector('#addProduct')
let modal = document.querySelector('#productosModal')
