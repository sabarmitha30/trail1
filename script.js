// Get cart from local storage or create empty
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to add product to cart
function addToCart(name, price) {
    cart.push({ name: name, price: price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " added to cart!");
}

// Function to display cart items in cart.html
function displayCart() {
    const cartItems = document.getElementById("cartItems");
    const totalPrice = document.getElementById("totalPrice");

    if (!cartItems) return;

    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${item.name}</td>
            <td>₹${item.price}</td>
            <td><button onclick="removeItem(${index})">Remove</button></td>
        `;

        cartItems.appendChild(row);
        total += item.price;
    });

    if (totalPrice) {
        totalPrice.textContent = "Total Price: ₹" + total;
    }
}

// Function to remove item from cart
function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}
