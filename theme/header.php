<!DOCTYPE html>
<html <?php language_attributes(); ?> class="dark scroll-smooth">
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
    <!-- Tailwind CSS CDN for instant rendering verification -->
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body <?php body_class('bg-zinc-950 text-zinc-100 antialiased selection:bg-emerald-500 selection:text-zinc-950'); ?>>

<!-- Floating Glass Navbar with Solid White Logo Badge -->
<header class="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
    <nav class="flex items-center justify-between w-full max-w-5xl px-6 py-3 bg-zinc-950/70 backdrop-blur-xl border border-zinc-800/60 rounded-full shadow-2xl">
        
        <!-- Logo with Solid White Background Badge -->
        <div class="bg-white px-3.5 py-1.5 rounded-lg shadow-md flex items-center hover:opacity-95 transition-opacity">
            <a href="<?php echo function_exists('home_url') ? esc_url( home_url( '/' ) ) : './'; ?>" class="flex items-center">
                <img src="<?php echo function_exists('get_template_directory_uri') ? get_template_directory_uri() . '/assets/logo.svg' : 'assets/logo.svg'; ?>" 
                     onerror="this.onerror=null; this.src='assets/logo.svg'; if(!this.complete || this.naturalWidth === 0){ this.src='theme/assets/logo.png'; }"
                     alt="Altradits" 
                     class="h-7 sm:h-8 w-auto object-contain block" />
            </a>
        </div>

        <!-- Navigation Links -->
        <div class="hidden md:flex items-center space-x-8 text-sm font-medium text-zinc-300">
            <a href="#gigs" class="hover:text-white transition-colors">Gigs</a>
            <a href="#expeditions" class="hover:text-white transition-colors">Expeditions</a>
            <a href="#network" class="hover:text-white transition-colors">Network</a>
            <a href="#shop" class="hover:text-white transition-colors">Shop</a>
            <a href="#code" class="hover:text-white transition-colors">Code</a>
        </div>

        <!-- Connect Action Button -->
        <div>
            <a href="https://wa.me/254707172370" target="_blank" rel="noopener noreferrer" class="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-950 bg-emerald-400 hover:bg-emerald-300 transition-colors rounded-full shadow-lg">
                Connect ⚡
            </a>
        </div>
    </nav>
</header>
