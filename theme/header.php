<!DOCTYPE html>
<html <?php language_attributes(); ?> class="dark scroll-smooth">
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
    <link rel="icon" type="image/svg+xml" href="<?php echo function_exists('get_template_directory_uri') ? get_template_directory_uri() . '/assets/favicon.svg' : 'assets/favicon.svg'; ?>">
    <!-- Google Fonts: Open Sans & Plus Jakarta Sans -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <!-- Tailwind CSS CDN for instant rendering verification -->
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="<?php echo function_exists('get_stylesheet_uri') ? get_stylesheet_uri() : 'theme/style.css'; ?>">
</head>
<body <?php body_class('bg-zinc-950 text-zinc-100 antialiased selection:bg-[#E55252] selection:text-white overflow-x-hidden min-h-screen flex flex-col'); ?>>

<!-- Floating Glass Navbar with Solid White Logo Badge -->
<header class="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center px-4">
    <nav class="flex items-center justify-between w-full max-w-7xl 2xl:max-w-[1600px] px-5 sm:px-8 py-3 bg-zinc-950/85 backdrop-blur-xl border border-zinc-800/80 rounded-full shadow-2xl">
        
        <!-- Logo with Solid White Background Badge -->
        <div class="bg-white px-3.5 py-1.5 rounded-lg shadow-md flex items-center hover:opacity-95 transition-opacity">
            <a href="<?php echo function_exists('home_url') ? esc_url( home_url( '/' ) ) : './'; ?>" class="flex items-center">
                <img src="<?php echo function_exists('get_template_directory_uri') ? get_template_directory_uri() . '/assets/logo.svg' : 'assets/logo.svg'; ?>" 
                     onerror="this.onerror=null; this.src='assets/logo.svg'; if(!this.complete || this.naturalWidth === 0){ this.src='theme/assets/logo.png'; }"
                     alt="Altradits" 
                     class="h-6 sm:h-7.5 w-auto object-contain block" />
            </a>
        </div>

        <!-- Desktop Navigation Links -->
        <div class="hidden md:flex items-center space-x-8 text-sm font-medium text-zinc-300">
            <a href="#gigs" class="hover:text-white transition-colors">Gigs</a>
            <a href="#expeditions" class="hover:text-white transition-colors">Expeditions</a>
            <a href="#network" class="hover:text-white transition-colors">Network</a>
            <a href="#shop" class="hover:text-white transition-colors">Shop</a>
            <a href="#code" class="hover:text-white transition-colors">Code</a>
        </div>

        <!-- Action Button & Mobile Menu Toggle -->
        <div class="flex items-center space-x-3">
            <a href="https://wa.me/254707172370" target="_blank" rel="noopener noreferrer" class="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#E55252] hover:bg-[#ff6e6e] transition-all rounded-full shadow-lg">
                Connect
            </a>
            <button onclick="toggleMobileMenu()" class="md:hidden text-zinc-300 hover:text-white p-1.5 focus:outline-none" aria-label="Toggle navigation menu">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>
    </nav>
</header>

<!-- Mobile Navigation Dropdown Menu -->
<div id="mobile-menu" class="fixed inset-x-4 top-20 z-40 hidden md:hidden bg-zinc-900/95 backdrop-blur-2xl border border-zinc-800 rounded-2xl p-6 shadow-2xl">
    <div class="flex flex-col space-y-4 text-base font-semibold text-zinc-200">
        <a href="#gigs" onclick="toggleMobileMenu()" class="hover:text-white transition-colors py-2 border-b border-zinc-800">Gigs</a>
        <a href="#expeditions" onclick="toggleMobileMenu()" class="hover:text-white transition-colors py-2 border-b border-zinc-800">Expeditions</a>
        <a href="#network" onclick="toggleMobileMenu()" class="hover:text-white transition-colors py-2 border-b border-zinc-800">Network</a>
        <a href="#shop" onclick="toggleMobileMenu()" class="hover:text-white transition-colors py-2 border-b border-zinc-800">Shop</a>
        <a href="#code" onclick="toggleMobileMenu()" class="hover:text-white transition-colors py-2">Code</a>
    </div>
</div>
