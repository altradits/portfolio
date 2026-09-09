<?php
/**
 * The main template file for Altradits Theme
 */
get_header();
?>

<main id="primary" class="site-main">
    <section class="relative min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center px-6 overflow-hidden">
        <!-- Background Ambient Glow -->
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(229,82,82,0.06)_0%,rgba(16,185,129,0.04)_40%,transparent_70%)] pointer-events-none"></div>
        
        <!-- Hero Section Watermark (8% Low Opacity Large-Scale Texture) -->
        <div class="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
            <img src="<?php echo function_exists('get_template_directory_uri') ? get_template_directory_uri() . '/assets/hero-watermark.svg' : 'assets/hero-watermark.svg'; ?>" 
                 alt="" 
                 class="w-[1200px] max-w-[150vw] opacity-8 blur-[0.5px] transform -rotate-3 scale-110" />
        </div>
        
        <div class="relative z-10 max-w-4xl mx-auto text-center mt-20">
            <h1 class="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                Build Fast Software. Settle Payments Anywhere.
            </h1>
            
            <p class="text-lg sm:text-xl text-zinc-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                You get production systems delivered on schedule. I build web applications, integrate Bitcoin and mobile money rails, and run long distance expeditions. Check my code and hire me for your team.
            </p>

            <div class="flex flex-wrap items-center justify-center gap-4">
                <a href="https://wa.me/254707172370" target="_blank" rel="noopener noreferrer" class="px-6 py-3 rounded-full bg-[#E55252] hover:bg-[#ff6e6e] text-white font-semibold text-sm transition-colors shadow-lg">
                    Hire Me Today
                </a>
                <a href="#code" class="px-6 py-3 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 font-semibold text-sm transition-colors">
                    View My Code
                </a>
            </div>
        </div>
    </section>
</main>

<?php
get_footer();
