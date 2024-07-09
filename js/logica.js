let carItems = []; //Array para almacenar los productos del carrito
let carTotal = 0; //Variable para almacenar el total
 
function addtoCarrito(NombreProd, precio){ //Funcion para agregar productos al carrito
    carItems.push({nombre: NombreProd, precio: precio}) //Agregar los productos al array del carrito
    carTotal += precio; //Suma del precio de los productos al total del carrito
    updateCarritoUI(); //Actualiza la interfaz del carrito
}
 
function updateCarritoUI(){ //Funcion para actualizar interfaz de carrito
    const carList = document.getElementById('car-list'); //Obtener el elemento de la lista del carrito
    const carTotalElement = document.getElementById('car-total'); //Obtener el elemento del total del carrito
    carList.innerHTML = ''; //Limpiar la lista del carrito
 
    carItems.forEach(item =>{
        const li = document.createElement('li'); //Crea un nuevo elemento de la lista
        li.textContent = `${item.nombre} - $${item.precio}`; //Estableciendo el texto del elemento en lista
        carList.appendChild(li); //Agregamos cada elemento de lista a la lista del carrito
    });
 
    carTotalElement.textContent = carTotal; //Actualizando el total del carrito
}
 
function compra(){ //funcion para realizar la compra
    alert(`Compra realizada! Total: $${carTotal}`); //Muestra una alerta con la suma total de la compra
    carItems = []; //Vaciar el array del carrito
    carTotal = 0; //Vaciar el total del carrito
    updateCarritoUI(); //Actualizamos la interfaz del carrito
}