/*
In this task, you will create a small product store where users can view available products, add products to their shopping cart, and complete transactions. You will interact with a fake API to handle data about products and users. The API will simulate the functionality of a real-world e-commerce system.

The API will have two main routes:
- /products: Fetches a list of all available products.
- /users: Fetches the details of a user (such as their shopping cart and purchase history) and allows them to make purchases.


Requirements:

1. Product Listing:
- Route: /products
- Method: GET
- Description: Fetch and display a list of products. Each product has the following fields:
    - id: The product ID (unique).
    - name: The name of the product.
    - price: The price of the product.
    - description: A brief description of the product.
    - category: The category of the product (e.g., "electronics", "clothing", etc.).
    - stock: The number of units available in stock


2. Users
- Route: /users
- Method: GET, POST
- Description: Fetch the details of a user (such as their shopping cart and purchase history) and allow them to make purchases.
- Fields:
    - id: The user ID (unique).
    - name: The name of the user.
    - email: The email address of the user.
    - cart: An array of products that the user has added to their shopping cart.
    - purchaseHistory: An array of products that the user has purchased.
*/
const API_URL = "http://localhost:3000";

for (let i = 0; i < 5; i++) {}

async function fetchProducts() {
    try {
        const response = await fetch(`${API_URL}/users`);

        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error.message);
    }
}

// fetchProducts();

const fetchSingleProduct = async (id) => {
    try {
        const response = await fetch(`${API_URL}/products/${id}`);

        if (!response.ok) {
            throw new Error("Failed to fetch product");
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error.message);
    }
};

// fetchSingleProduct(2);