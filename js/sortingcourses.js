    const categoryLinks = document.querySelectorAll('ul li a');
    const products = document.querySelectorAll('.product-list__item');

    // Add event listeners to each category link
    categoryLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default link behavior

            // Get the selected category from the data-category attribute
            const category = this.getAttribute('data-category');

            // Loop through all products
            products.forEach(product => {
                // Check if the product matches the selected category
                if (category === 'all' || product.getAttribute('data-category') === category) {
                    product.style.display = 'block'; // Show the product
                } else {
                    product.style.display = 'none'; // Hide the product
                }
            });
        });
    });
