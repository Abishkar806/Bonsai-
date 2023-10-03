// select the element with class 'products-preview'
let preveiwContainer = document.querySelector('.products-preview');

// select all elements with class 'preview' inside the preview container
let previewBox = preveiwContainer.querySelectorAll('.preview');

// select all product element and attach an event listener on each
document.querySelectorAll('.products-container .product').forEach(product => {

    product.onclick = () => {
        
        // make the preview container visible
        preveiwContainer.style.display = 'flex';
        let name = product.getAttribute('data-name');
        previewBox.forEach(preview => {
            let target = preview.getAttribute('data-target');
            if (name == target) {
                preview.classList.add('active');
            }
        });
    };
});

previewBox.forEach(close => {
    close.querySelector('.fa-times').onclick = () => {
        close.classList.remove('active');
        preveiwContainer.style.display = 'none';
    };
});