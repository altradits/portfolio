<!DOCTYPE html>
<html <?php language_attributes(); ?> class="scroll-smooth">
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
<body <?php body_class('bg-[#FAFAFA] text-zinc-900 antialiased selection:bg-[#E55252] selection:text-white overflow-x-hidden min-h-screen flex flex-col'); ?>>

<!-- Floating Glass Navbar with Seamless Blended Logo -->
<header class="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center px-4">
    <nav class="flex items-center justify-between w-full max-w-7xl 2xl:max-w-[1600px] px-5 sm:px-8 py-2.5 sm:py-3 bg-white/90 backdrop-blur-xl border border-zinc-200/80 rounded-full shadow-lg">
        
        <!-- Prominent Altradits Brand Logo (Seamlessly Blended) -->
        <a href="<?php echo function_exists('home_url') ? esc_url( home_url( '/' ) ) : './'; ?>" class="flex items-center group transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98] py-0.5" aria-label="Altradits Home">
            <img src="<?php echo function_exists('get_template_directory_uri') ? get_template_directory_uri() . '/assets/logo.svg' : 'assets/logo.svg'; ?>" 
                 onerror="this.onerror=null; this.src='assets/logo.svg'; if(!this.complete || this.naturalWidth === 0){ this.src='theme/assets/logo.png'; }"
                 alt="Altradits" 
                 class="h-9 sm:h-10 md:h-11 lg:h-12 w-auto object-contain block transition-all" />
        </a>

        <!-- Desktop Navigation Links (Glassmorphic Hover System) -->
        <div class="hidden md:flex items-center space-x-1 lg:space-x-2">
            <a href="#gigs" class="al-nav-link">Gigs</a>
            <a href="#expeditions" class="al-nav-link">Expeditions</a>
            <a href="#network" class="al-nav-link">Network</a>
            <a href="#shop" class="al-nav-link">Shop</a>
            <a href="#code" class="al-nav-link">Code</a>
        </div>

        <!-- Action Button & Mobile Menu Toggle -->
        <div class="flex items-center space-x-3">
            <a href="https://wa.me/254707172370" target="_blank" rel="noopener noreferrer" class="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#E55252] hover:bg-[#ff6e6e] transition-all rounded-full shadow-md hover:shadow-lg hover:scale-105 active:scale-95">
                Connect
            </a>
            <button onclick="toggleMobileMenu()" class="md:hidden text-zinc-700 hover:text-zinc-950 p-1.5 focus:outline-none" aria-label="Toggle navigation menu">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>
    </nav>
</header>

<!-- Mobile Navigation Dropdown Menu -->
<div id="mobile-menu" class="fixed inset-x-4 top-20 z-40 hidden md:hidden bg-white/90 backdrop-blur-2xl border border-zinc-200/80 rounded-3xl p-4 shadow-2xl ring-1 ring-black/[0.04]">
    <div class="flex flex-col space-y-1.5">
        <a href="#gigs" onclick="toggleMobileMenu()" class="al-mobile-nav-link">
            <span>Gigs</span>
            <span class="text-xs uppercase tracking-wider text-zinc-400 font-medium">01</span>
        </a>
        <a href="#expeditions" onclick="toggleMobileMenu()" class="al-mobile-nav-link">
            <span>Expeditions</span>
            <span class="text-xs uppercase tracking-wider text-zinc-400 font-medium">02</span>
        </a>
        <a href="#network" onclick="toggleMobileMenu()" class="al-mobile-nav-link">
            <span>Network</span>
            <span class="text-xs uppercase tracking-wider text-zinc-400 font-medium">03</span>
        </a>
        <a href="#shop" onclick="toggleMobileMenu()" class="al-mobile-nav-link">
            <span>Shop</span>
            <span class="text-xs uppercase tracking-wider text-zinc-400 font-medium">04</span>
        </a>
        <a href="#code" onclick="toggleMobileMenu()" class="al-mobile-nav-link">
            <span>Code</span>
            <span class="text-xs uppercase tracking-wider text-zinc-400 font-medium">05</span>
        </a>
    </div>
</div>
