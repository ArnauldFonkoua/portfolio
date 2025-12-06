<script setup>
import { ref, computed, onMounted } from 'vue';
import * as bootstrap from 'bootstrap';

// Import Bootstrap's CSS
import 'bootstrap/dist/css/bootstrap.css';
// const products = ref([
//     { id: 1, name: 'Modular Oak Sideboard', price: 49900.00, category: 'Furniture', material: 'Wood', color: 'Oak', imageUrl: 'https://placehold.co/600x600/f3f4f6/374151?text=Oak+Sideboard' },
//     { id: 2, name: 'Nordic Wool Area Rug', price: 27500.00, category: 'Textiles', material: 'Wool', color: 'Grey', imageUrl: 'https://placehold.co/600x600/f3f4f6/374151?text=Handwoven+Rug' },
//     { id: 3, name: 'Geometric Terracotta Planter', price: 35000.00, category: 'Home Decor', material: 'Ceramic', color: 'Terracotta', imageUrl: 'https://placehold.co/600x600/f3f4f6/374151?text=Terracotta+Planter' },
//     { id: 4, name: 'Sculptural Glass Carafe', price: 55000.00, category: 'Kitchenware', material: 'Glass', color: 'Clear', imageUrl: 'https://placehold.co/600x600/f3f4f6/374151?text=Glass+Carafe' },
//     { id: 5, name: 'Ergonomic Walnut Dining Chair', price: 18900.00, category: 'Furniture', material: 'Wood', color: 'Walnut', imageUrl: 'https://placehold.co/600x600/f3f4f6/374151?text=Walnut+Chair' },
//     { id: 6, name: 'Washed Linen Throw Pillow', price: 45000.00, category: 'Textiles', material: 'Linen', color: 'White', imageUrl: 'https://placehold.co/600x600/f3f4f6/374151?text=Linen+Pillow' },
//     { id: 7, name: 'Minimalist Ceramic Mug Set', price: 20008.00, category: 'Kitchenware', material: 'Ceramic', color: 'White', imageUrl: 'https://placehold.co/600x600/f3f4f6/374151?text=Ceramic+Mugs' },
//     { id: 8, name: 'Industrial Metal Floor Lamp', price: 145000.00, category: 'Home Decor', material: 'Metal', color: 'Black', imageUrl: 'https://placehold.co/600x600/f3f4f6/374151?text=Floor+Lamp' },
//     { id: 9, name: 'Bamboo Storage Basket', price: 19000.99, category: 'Home Decor', material: 'Wood', color: 'Bamboo', imageUrl: 'https://placehold.co/600x600/f3f4f6/374151?text=Bamboo+Basket' },
//     { id: 10, name: 'Sustainable Cotton Throw Blanket', price: 80005.00, category: 'Textiles', material: 'Cotton', color: 'Green', imageUrl: 'https://placehold.co/600x600/f3f4f6/374151?text=Cotton+Throw' },
// ]);

// 1. Define the API endpoint URL
const API_BASE_URL = 'http://localhost:5174';

// --- Reactive State ---
// Initialize products as an EMPTY array, it will be populated by the API call
const products = ref([]);

// Filter State (Initial values remain the same)
const selectedCategories = ref(['Furniture']);
const maxPrice = ref(500000);
const selectedMaterials = ref(['Ceramic']);
const isSidebarOpen = ref(false);
const modalInstance = ref(null);

// --- Computed Properties (Filtering and Derived State) ---

const availableFilters = computed(() => {
    const categories = {};
    const materials = {};
    products.value.forEach(p => {
        categories[p.category] = (categories[p.category] || 0) + 1;
        materials[p.material] = (materials[p.material] || 0) + 1;
    });
    return { categories, materials };
});

const filteredProducts = computed(() => {
    return products.value.filter(product => {
        const categoryMatch = selectedCategories.value.length === 0 || selectedCategories.value.includes(product.category);
        const priceMatch = product.price <= maxPrice.value;
        const materialMatch = selectedMaterials.value.length === 0 || selectedMaterials.value.includes(product.material);
        return categoryMatch && priceMatch && materialMatch;
    });
});

const totalResults = computed(() => filteredProducts.value.length);
const visibleResultsStart = 1;
const visibleResultsEnd = computed(() => Math.min(16, totalResults.value));


// --- Core Functions: Data Fetching and API Interaction ---


// ASYNC FUNCTION: Fetch products from the Express Backend

async function fetchProducts() {
    console.log('Fetching products from backend...');
    try {
        const response = await axios.get(`${API_BASE_URL}/products`);
        // Update the reactive products ref with the data from the backend
        products.value = response.data;
        console.log('Products loaded successfully.');
    } catch (error) {
        console.error('Error fetching products:', error);
        // Display a user-friendly error message if fetch fails
        showModal('Failed to load products. The server might be offline.');
    }
}

//3. ASYNC FUNCTION: Send "Add to Cart" request to the Express Backend

async function addToCart(product) {
    try {
        // POST request to the Express /api/cart/add endpoint
        const response = await axios.post(`${API_BASE_URL}/cart/`, {
            productId: product.id,
            quantity: 1 // Sending a quantity of 1 with the product ID
        });

        // Check the response structure defined in your Express backend
        if (response.status === 200 && response.data.success) {
            showModal(`"${product.name}" successfully added to your cart!`);
        } else {
            showModal(response.data.message || 'Error processing cart request.');
        }

    } catch (error) {
        console.error('Error adding to cart:', error);
        // Show an error message for network issues or server errors (4xx/5xx)
        showModal('Error: Could not connect to cart service. Please try again.');
    }
}

// // Filter State
// const selectedCategories = ref(['Furniture']); // Start with 'Furniture' selected
// const maxPrice = ref(500000); // Initial price slider value
// const selectedMaterials = ref(['Ceramic']);
// const isSidebarOpen = ref(false); // Mobile sidebar state
// const modalInstance = ref(null); // Reference to the Bootstrap Modal object

// // --- Computed Properties (Filtering and Derived State) ---

// // Get unique filter options and count them
// const availableFilters = computed(() => {
//     const categories = {};
//     const materials = {};
//     products.value.forEach(p => {
//         categories[p.category] = (categories[p.category] || 0) + 1;
//         materials[p.material] = (materials[p.material] || 0) + 1;
//     });
//     return { categories, materials };
// });

// // The core filtering logic
// const filteredProducts = computed(() => {
//     return products.value.filter(product => {
//         const categoryMatch = selectedCategories.value.length === 0 || selectedCategories.value.includes(product.category);
//         const priceMatch = product.price <= maxPrice.value;
//         const materialMatch = selectedMaterials.value.length === 0 || selectedMaterials.value.includes(product.material);

//         // Combine all filter criteria
//         return categoryMatch && priceMatch && materialMatch;
//     });
// });


// // Total results count for display
// const totalResults = computed(() => filteredProducts.value.length);
// const visibleResultsStart = 1;
// const visibleResultsEnd = Math.min(16, totalResults.value); // Showing 1-16 or less

// --- Methods (Actions) ---

// Function to handle the category checkbox change
function toggleCategory(category) {
    const index = selectedCategories.value.indexOf(category);
    if (index > -1) {
        selectedCategories.value.splice(index, 1); // Remove
    } else {
        selectedCategories.value.push(category); // Add
    }
}

// Function to handle the material checkbox change
function toggleMaterial(material) {
    const index = selectedMaterials.value.indexOf(material);
    if (index > -1) {
        selectedMaterials.value.splice(index, 1); // Remove
    } else {
        selectedMaterials.value.push(material); // Add
    }
}

// Function to show the custom message modal
function showModal(message) {
    const modalContentEl = document.getElementById('modalMessageContent');
    if (modalContentEl) {
        modalContentEl.textContent = message;
    }
    modalInstance.value?.show();
}

// Toggle mobile filter sidebar visibility
function toggleSidebar() {
    isSidebarOpen.value = !isSidebarOpen.value;
}

// // Simulate Add to Cart button functionality
// function addToCart(productName) {
//     showModal(`"${productName}" successfully added to your cart.`);
// }

// Simulate filter apply button
function applyFilters() {
    showModal('Filters Applied! Products are filtered below.');
    if (isSidebarOpen.value) {
        toggleSidebar(); // Close sidebar on mobile after applying filters
    }
}


// --- Lifecycle Hook ---
onMounted(() => {
    // 1. Initialize the Bootstrap Modal instance once the component is mounted
    // We access 'bootstrap' from the global window object, which requires
    // the Bootstrap JS file to be loaded in the main HTML file.
    if (window.bootstrap) {
        modalInstance.value = new window.bootstrap.Modal(document.getElementById('messageModal'));
    } else {
        console.error("Bootstrap JS not found. Modal won't work.");
    }
});

</script>

<template>
    <div :class="{ 'sidebar-open': isSidebarOpen }">

        <main class="container-lg py-5">
            <h1 class="display-5 fw-bold mb-4 text-center text-md-start">Shop All Products</h1>
            <p class="fs-5 text-muted mb-5 text-center text-md-start">
                Explore our full catalog of high-quality, sustainable home goods.
            </p>

            <button class="btn btn-outline-secondary d-md-none w-100 mb-4" @click="toggleSidebar">
                <svg class="bi me-2" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/></svg>
                Show Filters
            </button>


            <div class="row g-5">

                <div class="col-md-3">
                    <div id="filterSidebar" class="p-4 p-md-0 rounded-4 bg-white shadow-sm shadow-md-none">
                        <div class="d-flex justify-content-between align-items-center mb-4 d-md-none">
                            <h4 class="h5 fw-bold m-0">Filter By</h4>
                            <button type="button" class="btn-close" aria-label="Close" @click="toggleSidebar"></button>
                        </div>

                        <h4 class="h5 fw-bold mb-3 d-none d-md-block">Filter By</h4>

                        <div class="mb-4 pb-3 border-bottom">
                            <h5 class="fs-6 fw-semibold mb-3 accent-text">Category</h5>
                            <div v-for="(count, category) in availableFilters.categories" :key="category" class="form-check">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    :id="`cat-${category}`"
                                    :value="category"
                                    :checked="selectedCategories.includes(category)"
                                    @change="toggleCategory(category)"
                                >
                                <label class="form-check-label text-muted" :for="`cat-${category}`">{{ category }} ({{ count }})</label>
                            </div>
                        </div>

                        <div class="mb-4 pb-3 border-bottom">
                            <h5 class="fs-6 fw-semibold mb-3 accent-text">Price Range</h5>
                            <input
                                type="range"
                                class="form-range"
                                id="priceRange"
                                min="0"
                                max="1000"
                                step="10"
                                v-model.number="maxPrice"
                            >
                            <div class="d-flex justify-content-between small text-muted">
                                <span>0 FCFA</span>
                                <span>Up to FCFA<span id="currentPrice">{{ maxPrice.toFixed(0) }}</span></span>
                            </div>
                        </div>

                        <div class="mb-4 pb-3 border-bottom">
                            <h5 class="fs-6 fw-semibold mb-3 accent-text">Color</h5>
                            <div class="d-flex flex-wrap gap-2">
                                <button class="btn btn-sm rounded-circle border p-2" style="background-color: #fff; width: 30px; height: 30px;" aria-label="White Color"></button>
                                <button class="btn btn-sm rounded-circle border p-2" style="background-color: #000; width: 30px; height: 30px;" aria-label="Black Color"></button>
                                <button class="btn btn-sm rounded-circle border p-2" style="background-color: #bfa180; width: 30px; height: 30px;" aria-label="Oak Color"></button>
                                <button class="btn btn-sm rounded-circle border p-2" style="background-color: #79a690; width: 30px; height: 30px;" aria-label="Green Color"></button>
                                <button class="btn btn-sm rounded-circle border p-2" style="background-color: #e5e5e5; width: 30px; height: 30px;" aria-label="Grey Color"></button>
                            </div>
                        </div>

                        <div class="mb-4">
                            <h5 class="fs-6 fw-semibold mb-3 accent-text">Material</h5>
                            <div v-for="(count, material) in availableFilters.materials" :key="material" class="form-check">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    :id="`mat-${material}`"
                                    :value="material"
                                    :checked="selectedMaterials.includes(material)"
                                    @change="toggleMaterial(material)"
                                >
                                <label class="form-check-label text-muted" :for="`mat-${material}`">{{ material }}</label>
                            </div>
                        </div>

                        <button class="btn btn-accent w-100 rounded-pill mt-3 fw-bold" @click="applyFilters">Apply Filters</button>
                    </div>
                    <div v-if="isSidebarOpen" class="sidebar-backdrop d-md-none" @click="toggleSidebar"></div>
                </div>

                <div class="col-md-9">

                    <div class="d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom">
                        <p class="text-muted m-0">
                            Showing <span class="fw-bold">{{ visibleResultsStart }}-{{ visibleResultsEnd }}</span> of
                            <span class="fw-bold">{{ totalResults }}</span> results
                        </p>
                        <div class="d-flex align-items-center">
                            <label for="sortSelect" class="form-label m-0 me-2 small fw-semibold d-none d-sm-block">Sort By:</label>
                            <select class="form-select form-select-sm" id="sortSelect" style="width: auto;">
                                <option selected>Newest</option>
                                <option value="1">Price: Low to High</option>
                                <option value="2">Price: High to Low</option>
                                <option value="3">Top Rated</option>
                            </select>
                        </div>
                    </div>

                    <div class="row row-cols-2 row-cols-lg-3 g-4">
                        <div v-for="product in filteredProducts" :key="product.id" class="col">
                            <div class="card h-100 border-0 rounded-4 shadow-sm overflow-hidden product-card">
                                <a href="#" class="text-decoration-none text-dark">
                                    <div class="product-image-container bg-light">
                                        <img :src="product.imageUrl"
                                            :alt="product.name"
                                            class="product-image"
                                        >
                                    </div>
                                    <div class="card-body p-3">
                                        <p class="small text-muted mb-1">{{ product.category }}</p>
                                        <h3 class="card-title h6 fw-semibold text-truncate">{{ product.name }}</h3>
                                        <p class="card-text fw-bold">{{ product.price.toFixed(2) }} FCFA</p>
                                    </div>
                                </a>
                                <div class="card-footer bg-white border-0 p-3 pt-0">
                                    <button class="btn btn-sm btn-accent w-100 rounded-pill" @click="addToCart(product.name)">Add to Cart</button>
                                </div>
                            </div>
                        </div>

                        <div v-if="filteredProducts.length === 0" class="col-12 text-center py-5">
                            <p class="lead text-muted">No products match your current filters. Try adjusting your selections.</p>
                        </div>

                    </div>

                    <nav class="mt-5 d-flex justify-content-center" aria-label="Product page navigation">
                        <ul class="pagination pagination-lg">
                            <li class="page-item disabled"><a class="page-link" href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>
                            <li class="page-item active" aria-current="page"><a class="page-link" href="#">1</a></li>
                            <li class="page-item disabled"><a class="page-link" href="#">2</a></li>
                            <li class="page-item disabled"><a class="page-link" href="#">3</a></li>
                            <li class="page-item disabled"><a class="page-link" href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>
                        </ul>
                    </nav>

                </div>
            </div>
        </main>

        <div class="modal fade" id="messageModal" tabindex="-1" aria-labelledby="messageModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content rounded-4 shadow-lg">
                    <div class="modal-header border-0 pb-0">
                        <h5 class="modal-title fw-bold accent-text" id="messageModalLabel">Notification</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body pt-2 pb-4">
                        <p id="modalMessageContent" class="fs-6"></p>
                    </div>
                    <div class="modal-footer border-0 pt-0">
                        <button type="button" class="btn btn-accent rounded-pill px-4" data-bs-dismiss="modal">Got It</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
/* NOTE: In a real environment, you'd link a separate CSS file or use a CSS preprocessor.
   These styles are copied from your original code and scoped to this component. */

    :root {
        --bs-font-sans-serif: 'Inter', sans-serif;
        --bs-accent-indigo: #4f46e5; /* Custom Indigo */
        --bs-primary-dark: #1e293b;
    }

    /* Target the component's root div for the sidebar class */
    div {
        font-family: var(--bs-font-sans-serif);
        background-color: #f7f9fb;
        color: var(--bs-primary-dark);
    }

    .accent-text { color: var(--bs-accent-indigo) !important; }
    .accent-bg { background-color: var(--bs-accent-indigo) !important; }
    .btn-accent {
        background-color: var(--bs-accent-indigo);
        border-color: var(--bs-accent-indigo);
        color: white;
        transition: all 0.3s ease;
    }
    .btn-accent:hover {
        background-color: #3730a3;
        border-color: #3730a3;
        color: white;
        transform: scale(1.02); /* Adjusted scale for a subtle hover */
    }
    .border-accent { border-color: var(--bs-accent-indigo) !important; }

    /* Product Card specific styling */
    .product-card {
        transition: transform 0.2s, box-shadow 0.2s;
    }
    .product-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
    }
    .product-image-container {
        aspect-ratio: 1 / 1;
        overflow: hidden;
    }
    .product-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    /* Filter Sidebar Styling for Mobile (Hidden by default, shown on md+) */
    @media (max-width: 767.98px) {
        #filterSidebar {
            display: none; /* Hidden on mobile by default, toggled by class */
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            width: 75%;
            z-index: 1050;
            background-color: white;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            overflow-y: auto;
            padding-top: 56px; /* Space for the fixed header */
            transition: transform 0.3s ease-out; /* Add transition for smoothness */
            transform: translateX(-100%); /* Start off-screen */
        }
        .sidebar-backdrop {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 1040;
        }

        /* State when sidebar is open */
        .sidebar-open #filterSidebar {
            display: block; /* Vue's v-if handles display, but this ensures visibility */
            transform: translateX(0);
        }
        .sidebar-open .sidebar-backdrop { display: block; }

        /* The main content shifts when sidebar is open to show the backdrop */
        .sidebar-open {
            overflow: hidden; /* Prevents scrolling on the main content when sidebar is open */
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        }
    }
</style>
