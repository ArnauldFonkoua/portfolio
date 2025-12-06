<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
    msg: {
        type: String,
        required: true,
    },
})

const mobileOpen = ref(false)
function toggleMobile() {
    mobileOpen.value = !mobileOpen.value
}
</script>

<template>
    <nav class="nav" role="navigation" aria-label="Main navigation">
        <div class="nav-inner wrapper">
            <div class="brand">
                <img src="@/assets/logo.svg" alt="Logo" class="logo" />
                <div class="brand-text">
                    <p class="title">Ecommerce</p>
                    <small class="subtitle">{{ props.msg }}</small>
                </div>
            </div>

            <button class="mobile-toggle" @click="toggleMobile" aria-label="Toggle menu" :aria-expanded="mobileOpen.toString()">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>

            <ul :class="['nav-links', { open: mobileOpen }]" @click.outside="mobileOpen = false">
                <li><RouterLink to="/">Home</RouterLink></li>
                <li><RouterLink to="/shop">shop</RouterLink></li>
                <li><RouterLink to="/about">About</RouterLink></li>
                <li><RouterLink to="/contactus">Contact</RouterLink></li>
                <li><RouterLink to="/account">Account</RouterLink></li>
            </ul>

            <div class="actions">
                <label class="search" aria-hidden="false">
                    <input class="search-input" type="search" placeholder="Search products..." aria-label="Search products" />
                    <button class="search-btn" aria-label="Search">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 21l-4.35-4.35" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                            <circle cx="11" cy="11" r="6" stroke="currentColor" stroke-width="1.6"/>
                        </svg>
                    </button>
                </label>

                <RouterLink to="/cart" class="cart" aria-label="View cart">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 6h15l-1.5 9h-11L6 6z" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                        <circle cx="10" cy="20" r="1" fill="currentColor"/>
                        <circle cx="18" cy="20" r="1" fill="currentColor"/>
                    </svg>
                    <span class="cart-badge">3</span>
                </RouterLink>
            </div>
        </div>
    </nav>
</template>

<style scoped>
* { box-sizing: border-box; }
.nav {
    /* Break out to full viewport width so the nav is full-bleed even when inside containers */
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    width: 100vw;
    background: linear-gradient(90deg,#050706c2 0%, #0b110ee0 100%);
    color: #fff;
    box-shadow: 0 6px 18px rgba(33,33,33,0.12);
    border-radius: 0; /* avoid rounded edges */
}
.nav-inner {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 12px 18px;
}
.brand {
    display: flex;
    align-items: center;
    gap: 12px;
}
.logo {
    width: 42px;
    height: 42px;
    object-fit: contain;
}
.brand-text .title {
    font-weight: 700;
    letter-spacing: 0.2px;
}
.brand-text .subtitle {
    display: block;
    font-size: 11px;
    opacity: 0.95;
}
.nav-links {
    list-style: none;
    display: flex;
    gap: 18px;
    margin-left: 8px;
}
.nav-links li a {
    color: rgba(255,255,255,0.95);
    text-decoration: none;
    padding: 8px 10px;
    border-radius: 8px;
    transition: background .18s, transform .12s;
}
.nav-links li a:hover {
    background: rgba(255,255,255,0.08);
    transform: translateY(-1px);
}
.actions {
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 12px;
}
.search {
    display: flex;
    align-items: center;
    background: rgba(255,255,255,0.06);
    padding: 6px;
    border-radius: 8px;
}
.search-input {
    background: transparent;
    border: none;
    outline: none;
    color: #fff;
    width: 180px;
}
.search-btn {
    background: transparent;
    border: none;
    color: #fff;
    display: flex;
    align-items: center;
    padding: 4px;
}
.cart {
    position: relative;
    color: #fff;
    display: inline-flex;
    align-items: center;
}
.cart-badge {
    position: absolute;
    top: -6px;
    right: -6px;
    background: #ff6b6b;
    color: white;
    font-size: 11px;
    padding: 2px 6px;
    border-radius: 999px;
}
.mobile-toggle {
    display: none;
    background: transparent;
    border: none;
    color: inherit;
}

/* Responsive */
@media (max-width: 1024px) {
    .nav-inner { padding: 10px 14px; }
    .nav-links {
        position: absolute;
        left: 0;
        right: 0;
        top: 64px;
        background: linear-gradient(180deg, rgba(46,165,128,0.98), rgba(59,191,122,0.98));
        flex-direction: column;
        gap: 0;
        padding: 8px 12px;
        display: none;
        z-index: 40;
    }
    .nav-links.open { display: flex; }
    .nav-links li a { display: block; padding: 12px 10px; }
    .mobile-toggle { display: inline-flex; margin-left: 8px; }
    .actions { margin-left: 8px; }
    .search-input { width: 110px; }
}

</style>
