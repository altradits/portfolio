<?php
/**
 * The main template file for Altradits Theme
 */
get_header();
?>

<main id="primary" class="site-main flex-1 w-full">

    <!-- HERO SECTION (Full-Screen Immersive Canvas) -->
    <section class="relative min-h-screen w-full bg-zinc-950 text-white flex flex-col items-center justify-center px-4 sm:px-8 lg:px-12 overflow-hidden">
        
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

        <!-- Hero Section Watermark -->
        <div class="absolute inset-0 z-1 flex items-center justify-center pointer-events-none select-none overflow-hidden">
            <img src="<?php echo function_exists('get_template_directory_uri') ? get_template_directory_uri() . '/assets/hero-watermark.svg' : 'assets/hero-watermark.svg'; ?>" 
                 alt="" 
                 class="w-[1400px] max-w-[150vw] opacity-5 blur-[0.5px] transform -rotate-3 scale-110" />
        </div>
        
        <!-- Hero Foreground Content (Fluid Flex Box Container) -->
        <div class="relative z-10 w-full max-w-5xl 2xl:max-w-6xl mx-auto text-center flex flex-col items-center justify-center mt-24 sm:mt-20">
            <h1 class="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-6 leading-tight drop-shadow-md">
                Build Fast Software. Settle Payments Anywhere.
            </h1>
            
            <p class="text-lg sm:text-xl lg:text-2xl text-zinc-200 max-w-3xl mx-auto mb-10 leading-relaxed drop-shadow-sm font-normal">
                You get production systems delivered on schedule. I build web applications, integrate Bitcoin and mobile money rails, and run long distance expeditions. Check my code and hire me for your team.
            </p>

            <div class="flex flex-wrap items-center justify-center gap-4 w-full">
                <a href="https://wa.me/254707172370" target="_blank" rel="noopener noreferrer" class="px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-[#E55252] hover:bg-[#ff6e6e] text-white font-semibold text-sm sm:text-base transition-all shadow-xl hover:scale-105 active:scale-95">
                    Hire Me Today
                </a>
                <a href="#code" class="px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-zinc-900/90 hover:bg-zinc-800/90 border border-zinc-700/80 backdrop-blur-md text-zinc-100 font-semibold text-sm sm:text-base transition-all hover:scale-105 active:scale-95 shadow-lg">
                    View My Code
                </a>
            </div>
        </div>

        <!-- Story Slideshow Indicator Bars -->
        <div class="absolute bottom-8 z-10 flex items-center space-x-2.5">
            <button onclick="setSlide(0)" class="hero-indicator active" id="ind-0" aria-label="Slide 1 - Collaboration Hub"></button>
            <button onclick="setSlide(1)" class="hero-indicator" id="ind-1" aria-label="Slide 2 - Mountain Expedition"></button>
            <button onclick="setSlide(2)" class="hero-indicator" id="ind-2" aria-label="Slide 3 - Bitcoin Engineering"></button>
            <button onclick="setSlide(3)" class="hero-indicator" id="ind-3" aria-label="Slide 4 - Overland Route"></button>
        </div>
    </section>

    <!-- 1. ENGINEERING SERVICES SECTION (#gigs - Fluid Grid & Flex System) -->
    <section id="gigs" class="py-24 sm:py-32 px-4 sm:px-8 lg:px-12 w-full border-t border-zinc-900 bg-zinc-950">
        <div class="max-w-7xl 2xl:max-w-[1600px] mx-auto flex flex-col">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <h2 class="text-3xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
                    Engineering Services
                </h2>
                <p class="text-zinc-400 text-base sm:text-xl">
                    You get dedicated engineering sprints with clean architecture.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">
                <!-- Service Card 1 -->
                <div class="flex flex-col justify-between h-full bg-zinc-900/60 backdrop-blur-md border border-zinc-800/80 rounded-2xl p-8 sm:p-10 hover:border-[#E55252]/50 transition-all hover:-translate-y-1.5 shadow-lg">
                    <div>
                        <div class="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-[#4A6FC3] flex items-center justify-center font-bold text-xl mb-8 shadow-inner">
                            FS
                        </div>
                        <h3 class="text-2xl font-bold text-white mb-3">Full Stack Systems</h3>
                        <p class="text-zinc-400 text-sm sm:text-base leading-relaxed mb-8">
                            Build high-load web applications with React, TypeScript, Python, and Node.js. Your interface loads fast and handles heavy user volume with zero downtime.
                        </p>
                    </div>
                    <div class="pt-6 border-t border-zinc-800/80 text-xs sm:text-sm text-zinc-500 font-medium">
                        React • TypeScript • Python • Next.js
                    </div>
                </div>

                <!-- Service Card 2 -->
                <div class="flex flex-col justify-between h-full bg-zinc-900/60 backdrop-blur-md border border-zinc-800/80 rounded-2xl p-8 sm:p-10 hover:border-[#E55252]/50 transition-all hover:-translate-y-1.5 shadow-lg">
                    <div>
                        <div class="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xl mb-8 shadow-inner">
                            LN
                        </div>
                        <h3 class="text-2xl font-bold text-white mb-3">Payment Rail Integration</h3>
                        <p class="text-zinc-400 text-sm sm:text-base leading-relaxed mb-8">
                            Settle money instantly using Bitcoin Lightning Network and mobile money APIs. Your transactions clear in seconds across borders with minimal fees.
                        </p>
                    </div>
                    <div class="pt-6 border-t border-zinc-800/80 text-xs sm:text-sm text-zinc-500 font-medium">
                        Bitcoin LND • BTCPay • M-Pesa Daraja
                    </div>
                </div>

                <!-- Service Card 3 -->
                <div class="flex flex-col justify-between h-full bg-zinc-900/60 backdrop-blur-md border border-zinc-800/80 rounded-2xl p-8 sm:p-10 hover:border-[#E55252]/50 transition-all hover:-translate-y-1.5 shadow-lg">
                    <div>
                        <div class="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xl mb-8 shadow-inner">
                            DB
                        </div>
                        <h3 class="text-2xl font-bold text-white mb-3">Database And Infrastructure</h3>
                        <p class="text-zinc-400 text-sm sm:text-base leading-relaxed mb-8">
                            Deploy scalable PostgreSQL databases, Redis cache layers, and Docker containers. Your backend runs with sub-second response times and rock solid security.
                        </p>
                    </div>
                    <div class="pt-6 border-t border-zinc-800/80 text-xs sm:text-sm text-zinc-500 font-medium">
                        PostgreSQL • Redis • Docker • Linux
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 2. EXPEDITIONS & ENDURANCE SECTION (#expeditions - Fluid Photographic Grid) -->
    <section id="expeditions" class="py-24 sm:py-32 px-4 sm:px-8 lg:px-12 w-full border-t border-zinc-900 bg-zinc-950">
        <div class="max-w-7xl 2xl:max-w-[1600px] mx-auto flex flex-col">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <h2 class="text-3xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
                    Expeditions And Endurance
                </h2>
                <p class="text-zinc-400 text-base sm:text-xl">
                    High-altitude mountain summits and overland endurance routes.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">
                <div class="group flex flex-col justify-between h-full rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-xl">
                    <div class="w-full aspect-[16/10] overflow-hidden bg-zinc-950">
                        <img src="<?php echo function_exists('get_template_directory_uri') ? get_template_directory_uri() . '/assets/hero/slide-2-mountain.jpg' : 'assets/hero/slide-2-mountain.jpg'; ?>" alt="Mount Kenya Ascent" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div class="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                        <div>
                            <h3 class="text-2xl font-bold text-white mb-3">Mount Kenya Summit Routes</h3>
                            <p class="text-zinc-400 text-sm sm:text-base leading-relaxed">
                                High-altitude speed ascents and technical ridge traverses across extreme terrain. Demanding environments require relentless focus and physical grit.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="group flex flex-col justify-between h-full rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-xl">
                    <div class="w-full aspect-[16/10] overflow-hidden bg-zinc-950">
                        <img src="<?php echo function_exists('get_template_directory_uri') ? get_template_directory_uri() . '/assets/hero/slide-4-expedition.jpg' : 'assets/hero/slide-4-expedition.jpg'; ?>" alt="Overland Expedition" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div class="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                        <div>
                            <h3 class="text-2xl font-bold text-white mb-3">Cross Country Expeditions</h3>
                            <p class="text-zinc-400 text-sm sm:text-base leading-relaxed">
                                Long-distance motorcycle expeditions across remote African corridors. Self-supported navigation through desert tracks and mountain passes.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="group flex flex-col justify-between h-full rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-xl">
                    <div class="w-full aspect-[16/10] overflow-hidden bg-zinc-950">
                        <img src="<?php echo function_exists('get_template_directory_uri') ? get_template_directory_uri() . '/assets/hero/slide-1-hub.jpg' : 'assets/hero/slide-1-hub.jpg'; ?>" alt="Trail Marathon" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div class="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                        <div>
                            <h3 class="text-2xl font-bold text-white mb-3">Ultra Endurance Trail Runs</h3>
                            <p class="text-zinc-400 text-sm sm:text-base leading-relaxed">
                                50 kilometer and 100 kilometer mountain trail events. Testing human endurance limits through disciplined training and mental stamina.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 3. NETWORK TELEMETRY SECTION (#network - Dynamic Flex Metrics) -->
    <section id="network" class="py-24 sm:py-32 px-4 sm:px-8 lg:px-12 w-full border-t border-zinc-900 bg-zinc-950">
        <div class="max-w-7xl 2xl:max-w-[1600px] mx-auto flex flex-col">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <h2 class="text-3xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
                    Live Network Telemetry
                </h2>
                <p class="text-zinc-400 text-base sm:text-xl">
                    Direct connections to global payment rails and open source systems.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">
                <div class="flex flex-col justify-center items-center bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 sm:p-10 text-center shadow-lg hover:border-zinc-700 transition-colors">
                    <div class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#E55252] mb-3">100%</div>
                    <div class="text-white font-bold text-lg sm:text-xl mb-2">Bitcoin Node Verified</div>
                    <div class="text-zinc-400 text-xs sm:text-sm">Block height verified. Zero failed transactions.</div>
                </div>

                <div class="flex flex-col justify-center items-center bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 sm:p-10 text-center shadow-lg hover:border-zinc-700 transition-colors">
                    <div class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-emerald-400 mb-3">24 / 7</div>
                    <div class="text-white font-bold text-lg sm:text-xl mb-2">Lightning Node Active</div>
                    <div class="text-zinc-400 text-xs sm:text-sm">Active channels open. Routing payments globally.</div>
                </div>

                <div class="flex flex-col justify-center items-center bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 sm:p-10 text-center shadow-lg hover:border-zinc-700 transition-colors">
                    <div class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#4A6FC3] mb-3">50+</div>
                    <div class="text-white font-bold text-lg sm:text-xl mb-2">Developer Community</div>
                    <div class="text-zinc-400 text-xs sm:text-sm">Active builder network across Africa and worldwide.</div>
                </div>
            </div>
        </div>
    </section>

    <!-- 4. SHOP & HARDWARE GEAR SECTION (#shop - Fluid Flex Product Cards) -->
    <section id="shop" class="py-24 sm:py-32 px-4 sm:px-8 lg:px-12 w-full border-t border-zinc-900 bg-zinc-950">
        <div class="max-w-7xl 2xl:max-w-[1600px] mx-auto flex flex-col">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <h2 class="text-3xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
                    Equipment And Toolkits
                </h2>
                <p class="text-zinc-400 text-base sm:text-xl">
                    Field-tested gear, developer hardware kits, and vector assets.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">
                <div class="flex flex-col justify-between h-full bg-zinc-900/70 border border-zinc-800 rounded-2xl p-8 sm:p-10 shadow-lg hover:border-zinc-700 transition-colors">
                    <div>
                        <div class="text-xs font-semibold text-[#E55252] uppercase tracking-wider mb-3">Hardware</div>
                        <h3 class="text-2xl font-bold text-white mb-3">Cold Storage Backup Kit</h3>
                        <p class="text-zinc-400 text-sm sm:text-base leading-relaxed mb-8">
                            Stainless steel seed backup plates and offline signing hardware. Secure your digital wealth with physical defense.
                        </p>
                    </div>
                    <div class="flex items-center justify-between pt-6 border-t border-zinc-800/80">
                        <span class="text-lg sm:text-xl font-bold text-white">$120 / 180k sats</span>
                        <a href="https://wa.me/254707172370" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-xs sm:text-sm font-semibold text-white transition-all shadow-md">Order Kit</a>
                    </div>
                </div>

                <div class="flex flex-col justify-between h-full bg-zinc-900/70 border border-zinc-800 rounded-2xl p-8 sm:p-10 shadow-lg hover:border-zinc-700 transition-colors">
                    <div>
                        <div class="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-3">Field Gear</div>
                        <h3 class="text-2xl font-bold text-white mb-3">Expedition Field Pack</h3>
                        <p class="text-zinc-400 text-sm sm:text-base leading-relaxed mb-8">
                            Lightweight trail running packs, navigation compasses, and solar charging units tested in extreme conditions.
                        </p>
                    </div>
                    <div class="flex items-center justify-between pt-6 border-t border-zinc-800/80">
                        <span class="text-lg sm:text-xl font-bold text-white">$85 / 130k sats</span>
                        <a href="https://wa.me/254707172370" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-xs sm:text-sm font-semibold text-white transition-all shadow-md">Order Gear</a>
                    </div>
                </div>

                <div class="flex flex-col justify-between h-full bg-zinc-900/70 border border-zinc-800 rounded-2xl p-8 sm:p-10 shadow-lg hover:border-zinc-700 transition-colors">
                    <div>
                        <div class="text-xs font-semibold text-[#4A6FC3] uppercase tracking-wider mb-3">Digital Toolkit</div>
                        <h3 class="text-2xl font-bold text-white mb-3">Vector Asset Toolkit</h3>
                        <p class="text-zinc-400 text-sm sm:text-base leading-relaxed mb-8">
                            Complete scalable SVG and PNG asset bundle for builders. Clean vector geometry and typography standards.
                        </p>
                    </div>
                    <div class="flex items-center justify-between pt-6 border-t border-zinc-800/80">
                        <span class="text-lg sm:text-xl font-bold text-white">$45 / 70k sats</span>
                        <a href="https://wa.me/254707172370" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-xs sm:text-sm font-semibold text-white transition-all shadow-md">Download</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 5. CODE REPOSITORIES SECTION (#code - Responsive Grid Spread) -->
    <section id="code" class="py-24 sm:py-32 px-4 sm:px-8 lg:px-12 w-full border-t border-zinc-900 bg-zinc-950">
        <div class="max-w-7xl 2xl:max-w-[1600px] mx-auto flex flex-col">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <h2 class="text-3xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
                    Public Code Repositories
                </h2>
                <p class="text-zinc-400 text-base sm:text-xl">
                    Inspect live code, audit commits, and clone repositories.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">
                <a href="https://github.com/altradits/portfolio" target="_blank" rel="noopener noreferrer" class="group flex flex-col justify-between h-full bg-zinc-900/60 border border-zinc-800 rounded-2xl p-8 sm:p-10 hover:border-zinc-700 transition-all hover:-translate-y-1.5 shadow-lg">
                    <div>
                        <div class="flex items-center justify-between mb-6">
                            <span class="font-mono text-xs text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">altradits/portfolio</span>
                            <span class="text-xs text-zinc-500 font-semibold">GitHub</span>
                        </div>
                        <h3 class="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors mb-3">portfolio</h3>
                        <p class="text-zinc-400 text-sm sm:text-base leading-relaxed">
                            Core personal portfolio and custom WordPress theme with dark obsidian architecture.
                        </p>
                    </div>
                    <div class="pt-6 border-t border-zinc-800/80 text-xs text-zinc-500 font-medium">
                        PHP • HTML • CSS • JavaScript
                    </div>
                </a>

                <a href="https://github.com/altradits" target="_blank" rel="noopener noreferrer" class="group flex flex-col justify-between h-full bg-zinc-900/60 border border-zinc-800 rounded-2xl p-8 sm:p-10 hover:border-zinc-700 transition-all hover:-translate-y-1.5 shadow-lg">
                    <div>
                        <div class="flex items-center justify-between mb-6">
                            <span class="font-mono text-xs text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">altradits/lightning</span>
                            <span class="text-xs text-zinc-500 font-semibold">GitHub</span>
                        </div>
                        <h3 class="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors mb-3">lightning-gateway</h3>
                        <p class="text-zinc-400 text-sm sm:text-base leading-relaxed">
                            High-speed Bitcoin Lightning payment processor with automated webhook notifications.
                        </p>
                    </div>
                    <div class="pt-6 border-t border-zinc-800/80 text-xs text-zinc-500 font-medium">
                        Python • LND • Fastify
                    </div>
                </a>

                <a href="https://github.com/altradits" target="_blank" rel="noopener noreferrer" class="group flex flex-col justify-between h-full bg-zinc-900/60 border border-zinc-800 rounded-2xl p-8 sm:p-10 hover:border-zinc-700 transition-all hover:-translate-y-1.5 shadow-lg">
                    <div>
                        <div class="flex items-center justify-between mb-6">
                            <span class="font-mono text-xs text-[#4A6FC3] bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">altradits/payments</span>
                            <span class="text-xs text-zinc-500 font-semibold">GitHub</span>
                        </div>
                        <h3 class="text-2xl font-bold text-white group-hover:text-[#4A6FC3] transition-colors mb-3">daraja-mobile-payments</h3>
                        <p class="text-zinc-400 text-sm sm:text-base leading-relaxed">
                            Production ready mobile money SDK for instant payment settlements.
                        </p>
                    </div>
                    <div class="pt-6 border-t border-zinc-800/80 text-xs text-zinc-500 font-medium">
                        TypeScript • REST API
                    </div>
                </a>
            </div>
        </div>
    </section>

    <!-- 6. CONTACT SECTION (Fluid Centered Flex Box) -->
    <section class="py-24 sm:py-32 px-4 sm:px-8 lg:px-12 w-full border-t border-zinc-900 bg-zinc-950">
        <div class="max-w-4xl mx-auto text-center flex flex-col items-center">
            <h2 class="text-3xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight">
                Start Your Project Today
            </h2>
            <p class="text-lg sm:text-xl text-zinc-300 max-w-xl mx-auto mb-10 leading-relaxed">
                Reach out directly on WhatsApp or email. You get a direct response within two hours.
            </p>

            <div class="flex flex-wrap items-center justify-center gap-4 w-full">
                <a href="https://wa.me/254707172370" target="_blank" rel="noopener noreferrer" class="px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-[#E55252] hover:bg-[#ff6e6e] text-white font-semibold text-sm sm:text-base transition-all shadow-xl hover:scale-105 active:scale-95">
                    WhatsApp Chat
                </a>
                <a href="mailto:stanley@altradits.com" class="px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 font-semibold text-sm sm:text-base transition-all hover:scale-105 active:scale-95">
                    Send Email
                </a>
                <a href="https://github.com/altradits" target="_blank" rel="noopener noreferrer" class="px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 font-semibold text-sm sm:text-base transition-all hover:scale-105 active:scale-95">
                    GitHub Profile
                </a>
            </div>
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

    function toggleMobileMenu() {
        const menu = document.getElementById('mobile-menu');
        if (menu) {
            menu.classList.toggle('hidden');
        }
    }

    resetSlideTimer();
</script>

<?php
get_footer();
