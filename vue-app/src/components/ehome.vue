

<script setup>
 document.querySelectorAll('.hover-accent').forEach(link => {
            link.addEventListener('mouseover', function() {
                this.classList.remove('text-dark');
                this.classList.add('accent-text');
            });
            link.addEventListener('mouseout', function() {
                this.classList.remove('accent-text');
                this.classList.add('text-dark');
            });
        });
        document.querySelectorAll('.hover-shadow-lg').forEach(card => {
            card.addEventListener('mouseover', function() {
                this.classList.add('shadow-lg');
                this.classList.remove('shadow-sm');
            });
            card.addEventListener('mouseout', function() {
                this.classList.remove('shadow-lg');
                this.classList.add('shadow-sm');
            });
        });
        document.querySelectorAll('.hover-white').forEach(link => {
            link.addEventListener('mouseover', function() {
                this.classList.add('text-white');
            });
            link.addEventListener('mouseout', function() {
                this.classList.remove('text-white');
            });
        });
</script>
<template>
<head>
    <title>Sleek Home Goods | Bootstrap E-commerce</title>
    
    <!-- Load Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" xintegrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

</head>
<body>

    <!-- Main Content Area -->
    <main class="container-lg py-5">

        <!-- 1. Hero Section -->
        <section class="bg-light rounded-4 shadow-lg mb-5 overflow-hidden">
            <div class="row g-0 align-items-center">
                <!-- Image Container -->
                <div class="col-md-6">
                    <img src="https://placehold.co/1200x900/4f46e5/ffffff?text=Curated+Home" 
                         alt="Stylish living room with modern furniture" 
                         class="img-fluid w-100"
                         style="height: 380px; object-fit: cover;"
                         onerror="this.onerror=null; this.src='https://placehold.co/1200x900/4f46e5/ffffff?text=Image+Unavailable';"
                    >
                </div>
                <!-- Text Content -->
                <div class="col-md-6 p-4 p-md-5 p-lg-5 text-center text-md-start">
                    <p class="small fw-semibold accent-text text-uppercase mb-2">New Arrivals</p>
                    <h1 class="display-5 fw-bolder lh-sm mb-3">
                        Modern Living, Simplified.
                    </h1>
                    <p class="fs-5 text-muted mb-4">
                        Discover beautifully crafted furniture and decor designed for comfort, quality, and timeless style.
                    </p>
                    <a href="#" class="btn btn-accent btn-lg fw-bold rounded-pill shadow">
                        Shop The Collection
                    </a>
                </div>
            </div>
        </section>

        <!-- 2. Featured Products Grid -->
        <section class="mb-5">
            <h2 class="text-center fs-2 fw-bold mb-4">Our Best Sellers</h2>
            
            <div class="row row-cols-2 row-cols-md-4 g-4">
                
                <!-- Product Card 1 -->
                <div class="col">
                    <div class="card h-100 border-0 rounded-4 shadow-sm overflow-hidden hover-shadow-lg">
                        <a href="#" class="text-decoration-none text-dark">
                            <img src="https://placehold.co/600x600/f3f4f6/374151?text=Product+01" 
                                 alt="Minimalist Desk Lamp" 
                                 class="card-img-top w-100"
                                 style="aspect-ratio: 1 / 1; object-fit: cover;"
                                 onerror="this.onerror=null; this.src='https://placehold.co/600x600/f3f4f6/374151?text=Placeholder';"
                            >
                            <div class="card-body text-center">
                                <h3 class="card-title h5 fw-semibold text-truncate">Minimalist Desk Lamp</h3>
                                <p class="card-text text-muted">7900.00FCFA</p>
                            </div>
                        </a>
                    </div>
                </div>

                <!-- Product Card 2 -->
                <div class="col">
                    <div class="card h-100 border-0 rounded-4 shadow-sm overflow-hidden hover-shadow-lg">
                        <a href="#" class="text-decoration-none text-dark">
                            <img src="https://placehold.co/600x600/f3f4f6/374151?text=Product+02" 
                                 alt="Hand-woven Throw Blanket" 
                                 class="card-img-top w-100"
                                 style="aspect-ratio: 1 / 1; object-fit: cover;"
                                 onerror="this.onerror=null; this.src='https://placehold.co/600x600/f3f4f6/374151?text=Placeholder';"
                            >
                            <div class="card-body text-center">
                                <h3 class="card-title h5 fw-semibold text-truncate">Hand-woven Throw Blanket</h3>
                                <p class="card-text text-muted">11900.00FCFA</p>
                            </div>
                        </a>
                    </div>
                </div>
                
                <!-- Product Card 3 -->
                <div class="col">
                    <div class="card h-100 border-0 rounded-4 shadow-sm overflow-hidden hover-shadow-lg">
                        <a href="#" class="text-decoration-none text-dark">
                            <img src="https://placehold.co/600x600/f3f4f6/374151?text=Product+03" 
                                 alt="Nordic Style Ceramic Mug Set" 
                                 class="card-img-top w-100"
                                 style="aspect-ratio: 1 / 1; object-fit: cover;"
                                 onerror="this.onerror=null; this.src='https://placehold.co/600x600/f3f4f6/374151?text=Placeholder';"
                            >
                            <div class="card-body text-center">
                                <h3 class="card-title h5 fw-semibold text-truncate">Ceramic Mug Set</h3>
                                <p class="card-text text-muted">4500.00fCfa</p>
                            </div>
                        </a>
                    </div>
                </div>

                <!-- Product Card 4 -->
                <div class="col">
                    <div class="card h-100 border-0 rounded-4 shadow-sm overflow-hidden hover-shadow-lg">
                        <a href="#" class="text-decoration-none text-dark">
                            <img src="https://placehold.co/600x600/f3f4f6/374151?text=Product+04" 
                                 alt="Geometric Wooden Side Table" 
                                 class="card-img-top w-100"
                                 style="aspect-ratio: 1 / 1; object-fit: cover;"
                                 onerror="this.onerror=null; this.src='https://placehold.co/600x600/f3f4f6/374151?text=Placeholder';"
                            >
                            <div class="card-body text-center">
                                <h3 class="card-title h5 fw-semibold text-truncate">Wooden Side Table</h3>
                                <p class="card-text text-muted">20000.00FCFA</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            
            <div class="text-center mt-5">
                <a href="#" class="btn btn-outline-secondary btn-lg fw-bold rounded-pill accent-text border-accent" style="--bs-btn-border-color: var(--bs-accent-indigo);">
                    View All Products
                </a>
            </div>
        </section>
        
        <!-- 3. Value Proposition / Feature Banner -->
        <section class="bg-white rounded-4 shadow-lg p-4 p-md-5 text-center mb-5">
            <h3 class="fs-2 fw-bold mb-3">Committed to Quality and Ethics</h3>
            <p class="fs-5 text-muted max-w-4xl mx-auto mb-5">
                We carefully select every vendor to ensure our products meet high standards for quality, sustainability, and ethical production.
            </p>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <!-- Feature 1 -->
                <div class="col">
                    <div class="d-flex flex-column align-items-center">
                        <div class="p-3 mb-3 rounded-circle bg-opacity-10" style="background-color: var(--bs-accent-indigo);">
                            <!-- Quality Icon -->
                            <svg class="bi accent-text" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M7.784 1.792a.5.5 0 0 1 .432 0l7 3.992A.5.5 0 0 1 15 6v6a.5.5 0 0 1-.216.417l-7 3.992a.5.5 0 0 1-.432 0l-7-3.992A.5.5 0 0 1 1 12V6a.5.5 0 0 1 .216-.417l7-3.992zM1.815 6.13l6.476-3.696a.5.5 0 0 1 .418 0l6.476 3.696V11.5L8.7 15.192a.5.5 0 0 1-.4 0L1.815 11.5V6.13z"/>
                                <path d="M4.212 7.749a.5.5 0 0 1 .752-.656l2.091 2.373 3.636-4.545a.5.5 0 0 1 .773.618l-4 5a.5.5 0 0 1-.74.063l-2.5-2.857z"/>
                            </svg>
                        </div>
                        <h4 class="fs-4 fw-semibold">Guaranteed Quality</h4>
                        <p class="text-muted">Curated, durable, and stylish items only.</p>
                    </div>
                </div>
                
                <!-- Feature 2 -->
                <div class="col">
                    <div class="d-flex flex-column align-items-center">
                        <div class="p-3 mb-3 rounded-circle bg-opacity-10" style="background-color: var(--bs-accent-indigo);">
                            <!-- Ethical Icon -->
                            <svg class="bi accent-text" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5"/>
                            </svg>
                        </div>
                        <h4 class="fs-4 fw-semibold">Ethical Sourcing</h4>
                        <p class="text-muted">Supporting fair labor and sustainable materials.</p>
                    </div>
                </div>

                <!-- Feature 3 -->
                <div class="col">
                    <div class="d-flex flex-column align-items-center">
                        <div class="p-3 mb-3 rounded-circle bg-opacity-10" style="background-color: var(--bs-accent-indigo);">
                            <!-- Returns Icon -->
                            <svg class="bi accent-text" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M12 1.5H8.623a1.5 1.5 0 0 0-1.492 1.353V2.5h-5A1.5 1.5 0 0 0 1 4v10a1.5 1.5 0 0 0 1.5 1.5h12a1.5 1.5 0 0 0 1.5-1.5V4a1.5 1.5 0 0 0-1.5-1.5H9.377A1.5 1.5 0 0 0 7.885 1.5zM8 3.5h.5a.5.5 0 0 1 0 1H8v-1zM2 4.5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 .5.5V14a.5.5 0 0 1-.5.5H2.5A.5.5 0 0 1 2 14V4.5z"/>
                            </svg>
                        </div>
                        <h4 class="fs-4 fw-semibold">Free Returns</h4>
                        <p class="text-muted">30-day no-hassle return policy.</p>
                    </div>
                </div>
            </div>
        </section>

    </main>


            
     <!-- <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" xintegrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script> -->

</body>
</template>

<style scoped>
        
        :root {
            --bs-font-sans-serif: 'Inter', sans-serif;
            --bs-accent-indigo: #4f46e5; /* Custom Indigo */
            --bs-primary-dark: #1e293b; 
        }

        body {
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
            transform: scale(1.05);
        }
        .border-accent { border-color: var(--bs-accent-indigo) !important; }
</style>