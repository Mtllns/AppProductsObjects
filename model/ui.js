class UI {
    // metodo para añadir producto
    addProduct(product) {
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = 
            `<div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Product Name</strong>: ${product.name}
                    <strong>Product Price</strong>: ${product.price}€
                    <strong>Product Year</strong>: ${product.year}
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>
            </div>`;

        productList.appendChild(element); // al div 'product-list' le añadimos un elemento html hijo
        this.resetForm(); //
    }
    // metodo para eliminar datos en el formulario despues de crear el producto
    resetForm() { 
        document.getElementById('product-form').reset();
    }
    // metodo para eliminar producto
    deleteProduct(element) {
        if (element.name === 'delete') {
            element.parentElement.parentElement.parentElement.remove();
            this.showMessage('Product Delete Successfully', 'warning');
        }
    }
    // metodo para mostrar mensaje cuando creamos producto, eliminamos los datos vacios.
    showMessage(message, cssClass) {
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(message));
        // Showing in DOM
        const container = document.querySelector('.container');
        const app = document.querySelector('#app');
        container.insertBefore(div, app);
        // con el siguiente metodo eliminamos el mensaje despúes de 3seg
        setTimeout(function() {
            document.querySelector('.alert').remove(); 
        }, 4000);
    }   
}
export default UI;