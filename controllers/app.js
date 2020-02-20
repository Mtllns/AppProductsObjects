import Product from "../model/product.js";
import UI from "../model/ui.js";


// DOM Events
document.getElementById('product-form').addEventListener("submit", function(e) { // function(e) la "e" viene de "event" que se utiliza más a bajo con un metodo.
    const name  = document.getElementById('name').value;
    const price = document.getElementById('price').valueAsNumber;
    const year  = document.getElementById('year').value;
    const ui = new UI(); // instaciamos objeto UserInterface "UI"

    if ((name == "") || (price == "") || (year == "")) { // comprobamos si los campos estan vacios
        ui.showMessage('No se puede crear un Producto vacio, rellena los campos, por favor', 'danger'); // mensaje de alerta para que rellene los campos
    }else {
        // console.log("Name: "+ name + "\n" + "Price: " + price + "\n" + "Year: " + year);
        // console.log(new Product(name, price, year));
    
        const product = new Product(name, price, year); // instaciamos objeto producto
        
        ui.addProduct(product);
        ui.resetForm(); // llamamos al metodo para limpiar el formulario
        ui.showMessage('Product Added Successfully', 'success'); // llamamos metodo para mostrar mensaje
    
    }
    e.preventDefault(); // el metodo "preventDefault()" detiene el comportamiento por defecto del "sumbit"

});
// recogemos evento "click en el DOM, en el elemento con la clase 'product-list'"
document.getElementById('product-list').addEventListener('click', function(e){ // function(e) la "e" viene de "event"
    const ui = new UI();
    ui.deleteProduct(e.target);
    // console.log(e.target);
});