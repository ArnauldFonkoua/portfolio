<template>
  <div class="cart-container">
    <h2>Shopping Cart</h2>

    <div v-if="loading" class="info-message">Loading cart items...</div>
    <div v-else-if="cartItems.length === 0" class="info-message empty-cart">
      Your cart is empty. Start shopping!
    </div>
    <div v-else-if="error" class="error-message">
      {{ error }}
    </div>

    <div v-if="cartItems.length > 0 && !loading" class="cart-content">
      <table class="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cartItems" :key="item.id">
            <td>
              <div class="product-info">
                <img :src="item.imageUrl" alt="Product Image" class="product-image" />
                <span>{{ item.name }}</span>
              </div>
            </td>
            <td>{{ item.price.toFixed(2) }} FCFA</td>
            <td>
              <input
                type="number"
                v-model.number="item.quantity"
                @change="updateQuantity(item.id, $event.target.value)"
                min="1"
                class="quantity-input"
              />
            </td>
            <td>{{ (item.price * item.quantity).toFixed(2) }} FCFA</td>
            <td>
              <button @click="removeItem(item.id)" class="remove-btn">Remove</button>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="cart-summary">
        <h3>Order Summary</h3>
        <div class="summary-line">
          <span>Subtotal:</span>
          <span>{{ subtotal.toFixed(2) }} FCFA</span>
        </div>
        <div class="summary-line">
          <span>Shipping:</span>
          <span>{{ shipping.toFixed(2) }} FCFA</span>
        </div>
        <div class="summary-line total">
          <strong>Grand Total:</strong>
          <strong>{{ grandTotal.toFixed(2) }} FCFA</strong>
        </div>
        <button @click="checkout" class="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

// --- STATE MANAGEMENT ---

const cartItems = ref([]);
const loading = ref(true);
const error = ref(null);

// --- COMPUTED PROPERTIES ---

// Calculates the total price of all items excluding shipping
const subtotal = computed(() => {
  return cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0);
});

// Define shipping cost
const shipping = computed(() => {
  return subtotal.value > 100 ? 0 : 5.00; // Free shipping over $100
});

// Calculates the final price including shipping
const grandTotal = computed(() => {
  return subtotal.value + shipping.value;
});

// --- METHODS ---

// Simulates fetching cart data (replace with Axios call to backend later)
const fetchCartData = () => {
  loading.value = true;
  error.value = null;

  try {

    const dummyData = [
      { id: 101, name: "Luxury Watch", price: 15000.00, quantity: 1, imageUrl: "https://via.placeholder.com/60/007bff/FFFFFF?text=W" },
      { id: 102, name: "Leather Wallet", price: 20000.50, quantity: 2, imageUrl: "https://via.placeholder.com/60/28a745/FFFFFF?text=L" },
      { id: 103, name: "Travel Mug", price: 30000.00, quantity: 3, imageUrl: "https://via.placeholder.com/60/ffc107/333333?text=T" },
    ];

    setTimeout(() => {
      cartItems.value = dummyData;
      loading.value = false;
    }, 500);

  } catch (err) {
    error.value = 'Failed to load cart data.';
    loading.value = false;
  }
};

const updateQuantity = (id, newQuantity) => {
  const item = cartItems.value.find(i => i.id === id);
  if (item && newQuantity > 0) {
    item.quantity = Number(newQuantity);
    console.log(`Updated quantity for item ${id} to ${item.quantity}`);
  }
};

const removeItem = (id) => {
  cartItems.value = cartItems.value.filter(item => item.id !== id);
  console.log(`Removed item ${id} from cart.`);
};

const checkout = () => {
  if (cartItems.value.length > 0) {
    alert(`Proceeding to checkout with a total of $${grandTotal.value.toFixed(2)}`);
  }
};



onMounted(() => {
  fetchCartData();
});
</script>

<style scoped>
.cart-container {
  max-width: 1000px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  font-family: Arial, sans-serif;
}

h2 {
  text-align: center;
  color: #343a40;
  margin-bottom: 30px;
  font-size: 2em;
}

.info-message {
  text-align: center;
  padding: 20px;
  background-color: #e9ecef;
  border-radius: 5px;
  color: #6c757d;
}

.empty-cart {
  font-style: italic;
  font-weight: bold;
}

.error-message {
  text-align: center;
  padding: 20px;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  color: #721c24;
  border-radius: 5px;
}

.cart-content {
  display: flex;
  gap: 30px;
}

.cart-table {
  flex-grow: 1;
  width: 65%;
  border-collapse: collapse;
  background-color: #ffffff;
}

.cart-table th, .cart-table td {
  padding: 15px;
  text-align: left;
  border-bottom: 1px solid #dee2e6;
  vertical-align: middle;
}

.cart-table th {
  background-color: #e9ecef;
  color: #495057;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.9em;
}

.product-info {
  display: flex;
  align-items: center;
  gap: 15px;
}

.product-image {
  width: 60px;
  height: 60px;
  border-radius: 4px;
  object-fit: cover;
}

.quantity-input {
  width: 50px;
  padding: 8px;
  text-align: center;
  border: 1px solid #ced4da;
  border-radius: 4px;
}

.remove-btn {
  background: none;
  border: none;
  color: #dc3545;
  cursor: pointer;
  padding: 5px 10px;
  font-size: 0.9em;
}

.remove-btn:hover {
  text-decoration: underline;
}

.cart-summary {
  width: 35%;
  max-width: 300px;
  padding: 20px;
  background-color: #ffffff;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.cart-summary h3 {
  margin-top: 0;
  margin-bottom: 20px;
  border-bottom: 1px solid #dee2e6;
  padding-bottom: 10px;
}

.summary-line {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 1em;
}

.summary-line.total {
  padding-top: 10px;
  border-top: 2px solid #343a40;
  margin-top: 15px;
  font-size: 1.2em;
}

.checkout-btn {
  width: 100%;
  padding: 12px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1em;
  font-weight: bold;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s;
}

.checkout-btn:hover {
  background-color: #1e7e34;
}


@media (max-width: 768px) {
  .cart-content {
    flex-direction: column;
    gap: 20px;
  }

  .cart-table, .cart-summary {
    width: 100%;
    max-width: 100%;
  }
}
</style>
