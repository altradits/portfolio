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
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="<?php echo function_exists('get_stylesheet_uri') ? get_stylesheet_uri() : 'theme/style.css'; ?>">
</head>
<body <?php body_class('bg-[#FAFAFA] text-[#09090B] antialiased selection:bg-[#E55252] selection:text-white overflow-x-hidden min-h-screen flex flex-col'); ?>>

<!-- Floating Glass Navbar with Master Vector Logo -->
<header class="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center px-4">
    <nav class="flex items-center justify-between w-full max-w-7xl 2xl:max-w-[1600px] px-5 sm:px-8 py-2.5 sm:py-3 al-glass-nav rounded-full">
        
        <!-- Master Vector Logo Standard -->
        <a href="<?php echo function_exists('home_url') ? esc_url( home_url( '/' ) ) : './'; ?>" class="flex items-center group transition-transform duration-200 hover:scale-[1.02]" aria-label="Altradits Home">
            <img src="<?php echo function_exists('get_template_directory_uri') ? get_template_directory_uri() . '/assets/logo.svg' : 'theme/assets/logo.svg'; ?>" 
                 onerror="this.onerror=null; this.src='assets/logo.svg';"
                 alt="Altradits" 
                 class="h-9 sm:h-10 md:h-11 w-auto object-contain block transition-all" />
        </a>

        <!-- Desktop Navigation Links -->
        <div class="hidden md:flex items-center space-x-1 lg:space-x-2">
            <a href="#how-it-works" class="al-nav-link">How It Works</a>
            <a href="#channels" class="al-nav-link">Channels</a>
            <a href="#pricing" class="al-nav-link">Pricing</a>
            <a href="#studio" class="al-nav-link">Studio</a>
        </div>

        <!-- Action Buttons (Zero Icons, Text-Only Constraint) -->
        <div class="flex items-center space-x-3">
            <a href="https://wa.me/254707172370" target="_blank" rel="noopener noreferrer" class="hidden sm:inline-flex al-btn-secondary !py-2 !px-4 !text-xs">
                CONNECT
            </a>
            <a href="#studio" class="al-btn-primary !py-2 !px-4 !text-xs">
                LAUNCH STUDIO
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
<div id="mobile-menu" class="fixed inset-x-4 top-20 z-40 hidden md:hidden bg-white/95 backdrop-blur-2xl border border-zinc-200 rounded-3xl p-4 shadow-2xl">
    <div class="flex flex-col space-y-2">
        <a href="#how-it-works" onclick="toggleMobileMenu()" class="al-mobile-nav-link">
            <span>How It Works</span>
            <span class="text-xs uppercase tracking-wider text-zinc-400 font-medium">01</span>
        </a>
        <a href="#channels" onclick="toggleMobileMenu()" class="al-mobile-nav-link">
            <span>Channels</span>
            <span class="text-xs uppercase tracking-wider text-zinc-400 font-medium">02</span>
        </a>
        <a href="#pricing" onclick="toggleMobileMenu()" class="al-mobile-nav-link">
            <span>Pricing</span>
            <span class="text-xs uppercase tracking-wider text-zinc-400 font-medium">03</span>
        </a>
        <a href="#studio" onclick="toggleMobileMenu()" class="al-mobile-nav-link">
            <span>Studio</span>
            <span class="text-xs uppercase tracking-wider text-zinc-400 font-medium">04</span>
        </a>
        <div class="pt-3 border-t border-zinc-100 flex flex-col gap-2">
            <a href="#studio" onclick="toggleMobileMenu()" class="al-btn-primary w-full text-center">
                LAUNCH STUDIO
            </a>
        </div>
    </div>
</div>
