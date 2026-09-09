<?php
/**
 * The main template file for Altradits Theme
 */
get_header();
?>

<main id="primary" class="site-main">
    <section class="relative min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center px-6 overflow-hidden">
        
        <!-- Background Cinematic Slideshow -->
        <div id="hero-slideshow" class="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <img src="<?php echo function_exists('get_template_directory_uri') ? get_template_directory_uri() . '/assets/hero/slide-1-hub.jpg' : 'assets/hero/slide-1-hub.jpg'; ?>" alt="Altradits Tech Hub" class="hero-slide active" id="slide-0" />
            <img src="<?php echo function_exists('get_template_directory_uri') ? get_template_directory_uri() . '/assets/hero/slide-2-mountain.jpg' : 'assets/hero/slide-2-mountain.jpg'; ?>" alt="Mountain Expedition" class="hero-slide" id="slide-1" />
            <img src="<?php echo function_exists('get_template_directory_uri') ? get_template_directory_uri() . '/assets/hero/slide-3-bitcoin.jpg' : 'assets/hero/slide-3-bitcoin.jpg'; ?>" alt="Bitcoin Engineering Night" class="hero-slide" id="slide-2" />
            <img src="<?php echo function_exists('get_template_directory_uri') ? get_template_directory_uri() . '/assets/hero/slide-4-expedition.jpg' : 'assets/hero/slide-4-expedition.jpg'; ?>" alt="Overland Expedition" class="hero-slide" id="slide-3" />
        </div>

        <!-- Multi-Layer Dark Vignette Scrim & Ambient Gradients -->
        <div class="absolute inset-0 z-1 bg-gradient-to-b from-zinc-950/90 via-zinc-950/70 to-zinc-950 pointer-events-none"></div>
        <div class="absolute inset-0 z-1 bg-[radial-gradient(ellipse_at_center,rgba(9,9,11,0.45)_0%,rgba(9,9,11,0.92)_70%,#09090b_100%)] pointer-events-none"></div>
        <div class="absolute inset-0 z-1 bg-[radial-gradient(circle_at_center,rgba(229,82,82,0.12)_0%,transparent_60%)] pointer-events-none"></div>

        <!-- Hero Section Watermark (Ambient Subtle Texture) -->
        <div class="absolute inset-0 z-1 flex items-center justify-center pointer-events-none select-none overflow-hidden">
            <img src="<?php echo function_exists('get_template_directory_uri') ? get_template_directory_uri() . '/assets/hero-watermark.svg' : 'assets/hero-watermark.svg'; ?>" 
                 alt="" 
                 class="w-[1200px] max-w-[150vw] opacity-5 blur-[0.5px] transform -rotate-3 scale-110" />
        </div>
        
        <!-- Hero Foreground Content -->
        <div class="relative z-10 max-w-4xl mx-auto text-center mt-20">
            <h1 class="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight drop-shadow-md">
                Build Fast Software. Settle Payments Anywhere.
            </h1>
            
            <p class="text-lg sm:text-xl text-zinc-200 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-sm font-normal">
                You get production systems delivered on schedule. I build web applications, integrate Bitcoin and mobile money rails, and run long distance expeditions. Check my code and hire me for your team.
            </p>

            <div class="flex flex-wrap items-center justify-center gap-4">
                <a href="https://wa.me/254707172370" target="_blank" rel="noopener noreferrer" class="px-7 py-3.5 rounded-full bg-[#E55252] hover:bg-[#ff6e6e] text-white font-semibold text-sm transition-all shadow-xl hover:scale-105 active:scale-95">
                    Hire Me Today
                </a>
                <a href="#code" class="px-7 py-3.5 rounded-full bg-zinc-900/90 hover:bg-zinc-800/90 border border-zinc-700/80 backdrop-blur-md text-zinc-100 font-semibold text-sm transition-all hover:scale-105 active:scale-95 shadow-lg">
                    View My Code
                </a>
            </div>
        </div>

        <!-- Subtle Story Slideshow Indicator Bars -->
        <div class="absolute bottom-8 z-10 flex items-center space-x-2.5">
            <button onclick="setSlide(0)" class="hero-indicator active" id="ind-0" aria-label="Slide 1 - Collaboration Hub"></button>
            <button onclick="setSlide(1)" class="hero-indicator" id="ind-1" aria-label="Slide 2 - Mountain Expedition"></button>
            <button onclick="setSlide(2)" class="hero-indicator" id="ind-2" aria-label="Slide 3 - Bitcoin Engineering"></button>
            <button onclick="setSlide(3)" class="hero-indicator" id="ind-3" aria-label="Slide 4 - Overland Route"></button>
        </div>
    </section>
</main>

<script>
    let currentSlide = 0;
    const totalSlides = 4;
    let slideTimer;

    function setSlide(index) {
        currentSlide = index;
        for (let i = 0; i < totalSlides; i++) {
            const slide = document.getElementById('slide-' + i);
            const ind = document.getElementById('ind-' + i);
            if (slide && ind) {
                if (i === index) {
                    slide.classList.add('active');
                    ind.classList.add('active');
                } else {
                    slide.classList.remove('active');
                    ind.classList.remove('active');
                }
            }
        }
        resetSlideTimer();
    }

    function nextSlide() {
        const next = (currentSlide + 1) % totalSlides;
        setSlide(next);
    }

    function resetSlideTimer() {
        clearInterval(slideTimer);
        slideTimer = setInterval(nextSlide, 5500);
    }

    resetSlideTimer();
</script>

<?php
get_footer();
