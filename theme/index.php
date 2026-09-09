<?php
/**
 * The main template file for Altradits Theme
 */
get_header();
?>

<main id="primary" class="site-main flex-1 w-full">

    <!-- HERO SECTION (Figma / Framer / Plasticity Minimalist Interactive Canvas) -->
    <section id="hero" class="relative min-h-[92vh] sm:min-h-screen w-full bg-[#FAFAFA] flex flex-col items-center justify-center px-4 sm:px-8 lg:px-12 overflow-hidden select-none pt-28 sm:pt-36 pb-16 sm:pb-20">
        
        <!-- Subtle Figma Precision Grid Dots -->
        <div class="absolute inset-0 z-0 opacity-40 pointer-events-none" 
             style="background-image: radial-gradient(rgba(0,0,0,0.07) 1px, transparent 1px); background-size: 28px 28px;"></div>
        
        <!-- Ambient Luminous Scrims -->
        <div class="absolute inset-0 z-1 bg-gradient-to-b from-white/90 via-white/50 to-[#FAFAFA] pointer-events-none"></div>
        <div class="absolute inset-0 z-1 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.70)_0%,rgba(255,255,255,0.95)_70%,#FAFAFA_100%)] pointer-events-none"></div>

        <!-- Interactive Plasticity & Framer Physics Canvas (Responds to Hover & Click) -->
        <canvas id="hero-plasticity-canvas" class="absolute inset-0 z-2 w-full h-full cursor-crosshair"></canvas>

        <!-- Live CAD Telemetry HUD (Plasticity Precision Indicator) -->
        <div id="hero-cad-hud" class="absolute top-24 right-6 sm:right-10 z-10 hidden sm:flex items-center space-x-3 px-3.5 py-1.5 rounded-lg bg-white/80 backdrop-blur-md border border-zinc-200/80 text-[11px] font-mono text-zinc-500 shadow-sm pointer-events-none">
            <span class="inline-block w-1.5 h-1.5 rounded-full bg-[#059669]"></span>
            <span id="cad-hud-coords">X: 000 | Y: 000</span>
            <span class="text-zinc-300">|</span>
            <span id="cad-hud-mode" class="text-zinc-700 font-semibold">Web Engine</span>
        </div>

        <!-- Hero Foreground Content (Clean, Plain, Direct-Response) -->
        <div id="hero-tilt-card" class="relative z-10 w-full max-w-4xl mx-auto text-center flex flex-col items-center justify-center transition-transform duration-200 ease-out will-change-transform">
            
            <!-- Availability Beacon (Direct Signal) -->
            <div class="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/90 border border-zinc-200/90 shadow-sm backdrop-blur-md mb-6 hover:scale-105 transition-all">
                <span class="w-2 h-2 rounded-full bg-[#059669] animate-ping"></span>
                <span class="w-2 h-2 rounded-full bg-[#059669]"></span>
                <span class="text-xs font-semibold text-zinc-700 tracking-wide">Available for Sprints</span>
            </div>

            <!-- Two-Line Animated H1 (Line 1 Constant, Line 2 Action Pain Points) -->
            <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-950 mb-6 leading-[1.15] text-center w-full max-w-4xl mx-auto">
                <span class="block text-zinc-950">I Build Software That</span>
                <span id="hero-animated-painpoint" class="block text-[#E55252] mt-1 sm:mt-2 transition-all duration-300 ease-out transform translate-y-0 opacity-100">
                    Eliminates Server Bottlenecks.
                </span>
            </h1>
            
            <!-- Direct Short Guide Subtext -->
            <p class="text-lg sm:text-xl md:text-2xl text-zinc-600 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed font-normal">
                Full stack engineer. Web applications, Bitcoin Lightning corridors, and clean APIs delivered on schedule.
            </p>

            <!-- Minimalist Primary Call to Action -->
            <div class="flex flex-wrap items-center justify-center gap-4 w-full mb-8">
                <a href="https://wa.me/254707172370" target="_blank" rel="noopener noreferrer" 
                   class="px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-[#E55252] hover:bg-[#ff6e6e] text-white font-bold text-sm sm:text-base transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
                    Hire Me Today
                </a>
                <a href="#code" 
                   class="px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-white hover:bg-zinc-50 border border-zinc-200/90 text-zinc-900 font-semibold text-sm sm:text-base transition-all hover:scale-105 active:scale-95 shadow-sm">
                    View Work
                </a>
            </div>

            <!-- Figma-style Interactive Capability Switchers (Tactile Plasticity Modes) -->
            <div class="flex items-center justify-center space-x-2 text-xs font-semibold text-zinc-500 mb-6">
                <button onclick="setPlasticityMode(0)" id="mode-btn-0" class="mode-pill active px-4 py-2 rounded-full border border-zinc-200 bg-white text-zinc-900 shadow-sm transition-all">
                    Web Systems
                </button>
                <button onclick="setPlasticityMode(1)" id="mode-btn-1" class="mode-pill px-4 py-2 rounded-full border border-transparent hover:border-zinc-200 hover:bg-white/80 transition-all">
                    Bitcoin Rails
                </button>
                <button onclick="setPlasticityMode(2)" id="mode-btn-2" class="mode-pill px-4 py-2 rounded-full border border-transparent hover:border-zinc-200 hover:bg-white/80 transition-all">
                    Go Services
                </button>
            </div>

            <!-- Useful Interactive Reveal Card (Reveals deliverable specs & client pain points on interaction) -->
            <div id="hero-reveal-card" class="w-full max-w-2xl mx-auto bg-white/95 backdrop-blur-xl border border-zinc-200/90 rounded-2xl p-5 sm:p-6 shadow-xl transition-all duration-300 text-left">
                <div class="flex items-center justify-between pb-3 mb-3 border-b border-zinc-100">
                    <div class="flex items-center space-x-2">
                        <span id="reveal-tag-badge" class="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-blue-50 text-[#4A6FC3] border border-blue-100">
                            Web Application Sprint
                        </span>
                        <span class="text-xs text-zinc-400 font-medium hidden sm:inline">Interactive Blueprint</span>
                    </div>
                    <span id="reveal-timeline-badge" class="text-xs font-semibold text-zinc-700 bg-zinc-100 px-2.5 py-1 rounded-full">
                        14-Day Delivery
                    </span>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <span class="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block mb-1">Pain Point Solved</span>
                        <p id="reveal-painpoint" class="text-sm text-zinc-800 font-medium leading-snug">
                            Eliminates sluggish database queries, brittle frontend state, and slow page loads.
                        </p>
                    </div>
                    <div>
                        <span class="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block mb-1">Production Deliverable</span>
                        <p id="reveal-deliverable" class="text-sm text-zinc-800 font-medium leading-snug">
                            Production React, Next.js, and Node.js web app with sub-second response times.
                        </p>
                    </div>
                </div>

                <div class="mt-4 pt-3 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-2 text-xs">
                    <span id="reveal-stack" class="text-zinc-500 font-mono">
                        React • TypeScript • PostgreSQL • Redis
                    </span>
                    <a id="reveal-cta-link" href="https://wa.me/254707172370?text=Hi%20Stanley,%20I%20want%20to%20hire%20you%20for%20a%20Web%20Systems%20Sprint" target="_blank" rel="noopener noreferrer" class="font-bold text-[#E55252] hover:underline inline-flex items-center">
                        Hire for this sprint
                    </a>
                </div>
            </div>

        </div>
    </section>

    <!-- 1. ENGINEERING SERVICES SECTION (#gigs - Clean Light Cards) -->
    <section id="gigs" class="py-24 sm:py-32 px-4 sm:px-8 lg:px-12 w-full border-t border-zinc-200/80 bg-[#FAFAFA]">
        <div class="max-w-7xl 2xl:max-w-[1600px] mx-auto flex flex-col">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <h2 class="text-3xl sm:text-5xl font-extrabold text-zinc-950 mb-4 tracking-tight">
                    Engineering Services
                </h2>
                <p class="text-zinc-600 text-base sm:text-xl">
                    You get dedicated engineering sprints with clean architecture.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">
                <!-- Service Card 1 -->
                <div class="flex flex-col justify-between h-full bg-white border border-zinc-200/80 rounded-2xl p-8 sm:p-10 hover:border-[#E55252]/50 hover:shadow-xl transition-all hover:-translate-y-1.5 shadow-sm">
                    <div>
                        <div class="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 text-[#4A6FC3] flex items-center justify-center font-bold text-xl mb-8 shadow-sm">
                            FS
                        </div>
                        <h3 class="text-2xl font-bold text-zinc-950 mb-3">Full Stack Systems</h3>
                        <p class="text-zinc-600 text-sm sm:text-base leading-relaxed mb-8">
                            Build high-load web applications with React, TypeScript, Python, and Node.js. Your interface loads fast and handles heavy user volume with zero downtime.
                        </p>
                    </div>
                    <div class="pt-6 border-t border-zinc-100 text-xs sm:text-sm text-zinc-500 font-semibold">
                        React • TypeScript • Python • Next.js
                    </div>
                </div>

                <!-- Service Card 2 -->
                <div class="flex flex-col justify-between h-full bg-white border border-zinc-200/80 rounded-2xl p-8 sm:p-10 hover:border-[#E55252]/50 hover:shadow-xl transition-all hover:-translate-y-1.5 shadow-sm">
                    <div>
                        <div class="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-100 text-amber-600 flex items-center justify-center font-bold text-xl mb-8 shadow-sm">
                            LN
                        </div>
                        <h3 class="text-2xl font-bold text-zinc-950 mb-3">Payment Rail Integration</h3>
                        <p class="text-zinc-600 text-sm sm:text-base leading-relaxed mb-8">
                            Settle money instantly using Bitcoin Lightning Network and mobile money APIs. Your transactions clear in seconds across borders with minimal fees.
                        </p>
                    </div>
                    <div class="pt-6 border-t border-zinc-100 text-xs sm:text-sm text-zinc-500 font-semibold">
                        Bitcoin LND • BTCPay • M-Pesa Daraja
                    </div>
                </div>

                <!-- Service Card 3 -->
                <div class="flex flex-col justify-between h-full bg-white border border-zinc-200/80 rounded-2xl p-8 sm:p-10 hover:border-[#E55252]/50 hover:shadow-xl transition-all hover:-translate-y-1.5 shadow-sm">
                    <div>
                        <div class="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xl mb-8 shadow-sm">
                            DB
                        </div>
                        <h3 class="text-2xl font-bold text-zinc-950 mb-3">Database And Infrastructure</h3>
                        <p class="text-zinc-600 text-sm sm:text-base leading-relaxed mb-8">
                            Deploy scalable PostgreSQL databases, Redis cache layers, and Docker containers. Your backend runs with sub-second response times and rock solid security.
                        </p>
                    </div>
                    <div class="pt-6 border-t border-zinc-100 text-xs sm:text-sm text-zinc-500 font-semibold">
                        PostgreSQL • Redis • Docker • Linux
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 2. EXPEDITIONS & ENDURANCE SECTION (#expeditions - Crisp Image Grid) -->
    <section id="expeditions" class="py-24 sm:py-32 px-4 sm:px-8 lg:px-12 w-full border-t border-zinc-200/80 bg-white">
        <div class="max-w-7xl 2xl:max-w-[1600px] mx-auto flex flex-col">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <h2 class="text-3xl sm:text-5xl font-extrabold text-zinc-950 mb-4 tracking-tight">
                    Expeditions And Endurance
                </h2>
                <p class="text-zinc-600 text-base sm:text-xl">
                    High-altitude mountain summits and overland endurance routes.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">
                <div class="group flex flex-col justify-between h-full rounded-2xl overflow-hidden border border-zinc-200/80 bg-white shadow-md hover:shadow-xl transition-all">
                    <div class="w-full aspect-[16/10] overflow-hidden bg-zinc-100">
                        <img src="<?php echo function_exists('get_template_directory_uri') ? get_template_directory_uri() . '/assets/hero/slide-2-mountain.jpg' : 'assets/hero/slide-2-mountain.jpg'; ?>" alt="Mount Kenya Ascent" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div class="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                        <div>
                            <h3 class="text-2xl font-bold text-zinc-950 mb-3">Mount Kenya Summit Routes</h3>
                            <p class="text-zinc-600 text-sm sm:text-base leading-relaxed">
                                High-altitude speed ascents and technical ridge traverses across extreme terrain. Demanding environments require relentless focus and physical grit.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="group flex flex-col justify-between h-full rounded-2xl overflow-hidden border border-zinc-200/80 bg-white shadow-md hover:shadow-xl transition-all">
                    <div class="w-full aspect-[16/10] overflow-hidden bg-zinc-100">
                        <img src="<?php echo function_exists('get_template_directory_uri') ? get_template_directory_uri() . '/assets/hero/slide-4-expedition.jpg' : 'assets/hero/slide-4-expedition.jpg'; ?>" alt="Overland Expedition" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div class="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                        <div>
                            <h3 class="text-2xl font-bold text-zinc-950 mb-3">Cross Country Expeditions</h3>
                            <p class="text-zinc-600 text-sm sm:text-base leading-relaxed">
                                Long-distance motorcycle expeditions across remote African corridors. Self-supported navigation through desert tracks and mountain passes.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="group flex flex-col justify-between h-full rounded-2xl overflow-hidden border border-zinc-200/80 bg-white shadow-md hover:shadow-xl transition-all">
                    <div class="w-full aspect-[16/10] overflow-hidden bg-zinc-100">
                        <img src="<?php echo function_exists('get_template_directory_uri') ? get_template_directory_uri() . '/assets/hero/slide-1-hub.jpg' : 'assets/hero/slide-1-hub.jpg'; ?>" alt="Trail Marathon" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div class="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                        <div>
                            <h3 class="text-2xl font-bold text-zinc-950 mb-3">Ultra Endurance Trail Runs</h3>
                            <p class="text-zinc-600 text-sm sm:text-base leading-relaxed">
                                50 kilometer and 100 kilometer mountain trail events. Testing human endurance limits through disciplined training and mental stamina.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 3. NETWORK TELEMETRY SECTION (#network - Clean Light Metric Cards) -->
    <section id="network" class="py-24 sm:py-32 px-4 sm:px-8 lg:px-12 w-full border-t border-zinc-200/80 bg-[#FAFAFA]">
        <div class="max-w-7xl 2xl:max-w-[1600px] mx-auto flex flex-col">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <h2 class="text-3xl sm:text-5xl font-extrabold text-zinc-950 mb-4 tracking-tight">
                    Live Network Telemetry
                </h2>
                <p class="text-zinc-600 text-base sm:text-xl">
                    Direct connections to global payment rails and open source systems.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">
                <div class="flex flex-col justify-center items-center bg-white border border-zinc-200/80 rounded-2xl p-8 sm:p-10 text-center shadow-sm hover:shadow-md transition-shadow">
                    <div class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#E55252] mb-3">100%</div>
                    <div class="text-zinc-950 font-bold text-lg sm:text-xl mb-2">Bitcoin Node Verified</div>
                    <div class="text-zinc-500 text-xs sm:text-sm">Block height verified. Zero failed transactions.</div>
                </div>

                <div class="flex flex-col justify-center items-center bg-white border border-zinc-200/80 rounded-2xl p-8 sm:p-10 text-center shadow-sm hover:shadow-md transition-shadow">
                    <div class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-emerald-600 mb-3">24 / 7</div>
                    <div class="text-zinc-950 font-bold text-lg sm:text-xl mb-2">Lightning Node Active</div>
                    <div class="text-zinc-500 text-xs sm:text-sm">Active channels open. Routing payments globally.</div>
                </div>

                <div class="flex flex-col justify-center items-center bg-white border border-zinc-200/80 rounded-2xl p-8 sm:p-10 text-center shadow-sm hover:shadow-md transition-shadow">
                    <div class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#4A6FC3] mb-3">50+</div>
                    <div class="text-zinc-950 font-bold text-lg sm:text-xl mb-2">Developer Community</div>
                    <div class="text-zinc-500 text-xs sm:text-sm">Active builder network across Africa and worldwide.</div>
                </div>
            </div>
        </div>
    </section>

    <!-- 4. SHOP & HARDWARE GEAR SECTION (#shop - Light Product Cards) -->
    <section id="shop" class="py-24 sm:py-32 px-4 sm:px-8 lg:px-12 w-full border-t border-zinc-200/80 bg-white">
        <div class="max-w-7xl 2xl:max-w-[1600px] mx-auto flex flex-col">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <h2 class="text-3xl sm:text-5xl font-extrabold text-zinc-950 mb-4 tracking-tight">
                    Equipment And Toolkits
                </h2>
                <p class="text-zinc-600 text-base sm:text-xl">
                    Field-tested gear, developer hardware kits, and vector assets.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">
                <div class="flex flex-col justify-between h-full bg-[#FAFAFA] border border-zinc-200/80 rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-lg transition-all">
                    <div>
                        <div class="text-xs font-semibold text-[#E55252] uppercase tracking-wider mb-3">Hardware</div>
                        <h3 class="text-2xl font-bold text-zinc-950 mb-3">Cold Storage Backup Kit</h3>
                        <p class="text-zinc-600 text-sm sm:text-base leading-relaxed mb-8">
                            Stainless steel seed backup plates and offline signing hardware. Secure your digital wealth with physical defense.
                        </p>
                    </div>
                    <div class="flex items-center justify-between pt-6 border-t border-zinc-200">
                        <span class="text-lg sm:text-xl font-bold text-zinc-950">$120 / 180k sats</span>
                        <a href="https://wa.me/254707172370" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-xs sm:text-sm font-semibold text-white transition-all shadow-md">Order Kit</a>
                    </div>
                </div>

                <div class="flex flex-col justify-between h-full bg-[#FAFAFA] border border-zinc-200/80 rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-lg transition-all">
                    <div>
                        <div class="text-xs font-semibold text-amber-600 uppercase tracking-wider mb-3">Field Gear</div>
                        <h3 class="text-2xl font-bold text-zinc-950 mb-3">Expedition Field Pack</h3>
                        <p class="text-zinc-600 text-sm sm:text-base leading-relaxed mb-8">
                            Lightweight trail running packs, navigation compasses, and solar charging units tested in extreme conditions.
                        </p>
                    </div>
                    <div class="flex items-center justify-between pt-6 border-t border-zinc-200">
                        <span class="text-lg sm:text-xl font-bold text-zinc-950">$85 / 130k sats</span>
                        <a href="https://wa.me/254707172370" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-xs sm:text-sm font-semibold text-white transition-all shadow-md">Order Gear</a>
                    </div>
                </div>

                <div class="flex flex-col justify-between h-full bg-[#FAFAFA] border border-zinc-200/80 rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-lg transition-all">
                    <div>
                        <div class="text-xs font-semibold text-[#4A6FC3] uppercase tracking-wider mb-3">Digital Toolkit</div>
                        <h3 class="text-2xl font-bold text-zinc-950 mb-3">Vector Asset Toolkit</h3>
                        <p class="text-zinc-600 text-sm sm:text-base leading-relaxed mb-8">
                            Complete scalable SVG and PNG asset bundle for builders. Clean vector geometry and typography standards.
                        </p>
                    </div>
                    <div class="flex items-center justify-between pt-6 border-t border-zinc-200">
                        <span class="text-lg sm:text-xl font-bold text-zinc-950">$45 / 70k sats</span>
                        <a href="https://wa.me/254707172370" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-xs sm:text-sm font-semibold text-white transition-all shadow-md">Download</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 5. CODE REPOSITORIES SECTION (#code - Light Grid Cards) -->
    <section id="code" class="py-24 sm:py-32 px-4 sm:px-8 lg:px-12 w-full border-t border-zinc-200/80 bg-[#FAFAFA]">
        <div class="max-w-7xl 2xl:max-w-[1600px] mx-auto flex flex-col">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <h2 class="text-3xl sm:text-5xl font-extrabold text-zinc-950 mb-4 tracking-tight">
                    Public Code Repositories
                </h2>
                <p class="text-zinc-600 text-base sm:text-xl">
                    Inspect live code, audit commits, and clone repositories.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">
                <a href="https://github.com/altradits/portfolio" target="_blank" rel="noopener noreferrer" class="group flex flex-col justify-between h-full bg-white border border-zinc-200/80 rounded-2xl p-8 sm:p-10 hover:border-zinc-300 hover:shadow-lg transition-all hover:-translate-y-1.5 shadow-sm">
                    <div>
                        <div class="flex items-center justify-between mb-6">
                            <span class="font-mono text-xs text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">altradits/portfolio</span>
                            <span class="text-xs text-zinc-500 font-semibold">GitHub</span>
                        </div>
                        <h3 class="text-2xl font-bold text-zinc-950 group-hover:text-emerald-600 transition-colors mb-3">portfolio</h3>
                        <p class="text-zinc-600 text-sm sm:text-base leading-relaxed">
                            Core personal portfolio and custom WordPress theme with clean responsive architecture.
                        </p>
                    </div>
                    <div class="pt-6 border-t border-zinc-100 text-xs text-zinc-500 font-semibold">
                        PHP • HTML • CSS • JavaScript
                    </div>
                </a>

                <a href="https://github.com/altradits" target="_blank" rel="noopener noreferrer" class="group flex flex-col justify-between h-full bg-white border border-zinc-200/80 rounded-2xl p-8 sm:p-10 hover:border-zinc-300 hover:shadow-lg transition-all hover:-translate-y-1.5 shadow-sm">
                    <div>
                        <div class="flex items-center justify-between mb-6">
                            <span class="font-mono text-xs text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">altradits/lightning</span>
                            <span class="text-xs text-zinc-500 font-semibold">GitHub</span>
                        </div>
                        <h3 class="text-2xl font-bold text-zinc-950 group-hover:text-amber-600 transition-colors mb-3">lightning-gateway</h3>
                        <p class="text-zinc-600 text-sm sm:text-base leading-relaxed">
                            High-speed Bitcoin Lightning payment processor with automated webhook notifications.
                        </p>
                    </div>
                    <div class="pt-6 border-t border-zinc-100 text-xs text-zinc-500 font-semibold">
                        Python • LND • Fastify
                    </div>
                </a>

                <a href="https://github.com/altradits" target="_blank" rel="noopener noreferrer" class="group flex flex-col justify-between h-full bg-white border border-zinc-200/80 rounded-2xl p-8 sm:p-10 hover:border-zinc-300 hover:shadow-lg transition-all hover:-translate-y-1.5 shadow-sm">
                    <div>
                        <div class="flex items-center justify-between mb-6">
                            <span class="font-mono text-xs text-[#4A6FC3] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">altradits/payments</span>
                            <span class="text-xs text-zinc-500 font-semibold">GitHub</span>
                        </div>
                        <h3 class="text-2xl font-bold text-zinc-950 group-hover:text-[#4A6FC3] transition-colors mb-3">daraja-mobile-payments</h3>
                        <p class="text-zinc-600 text-sm sm:text-base leading-relaxed">
                            Production ready mobile money SDK for instant payment settlements.
                        </p>
                    </div>
                    <div class="pt-6 border-t border-zinc-100 text-xs text-zinc-500 font-semibold">
                        TypeScript • REST API
                    </div>
                </a>
            </div>
        </div>
    </section>

    <!-- 6. CONTACT SECTION (Light Centered Flex Box) -->
    <section class="py-24 sm:py-32 px-4 sm:px-8 lg:px-12 w-full border-t border-zinc-200/80 bg-white">
        <div class="max-w-4xl mx-auto text-center flex flex-col items-center">
            <h2 class="text-3xl sm:text-5xl font-extrabold text-zinc-950 mb-6 tracking-tight">
                Start Your Project Today
            </h2>
            <p class="text-lg sm:text-xl text-zinc-600 max-w-xl mx-auto mb-10 leading-relaxed">
                Reach out directly on WhatsApp or email. You get a direct response within two hours.
            </p>

            <div class="flex flex-wrap items-center justify-center gap-4 w-full">
                <a href="https://wa.me/254707172370" target="_blank" rel="noopener noreferrer" class="px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-[#E55252] hover:bg-[#ff6e6e] text-white font-semibold text-sm sm:text-base transition-all shadow-lg hover:scale-105 active:scale-95">
                    WhatsApp Chat
                </a>
                <a href="mailto:stanley@altradits.com" class="px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-white hover:bg-zinc-100 border border-zinc-300 text-zinc-900 font-semibold text-sm sm:text-base transition-all hover:scale-105 active:scale-95 shadow-sm">
                    Send Email
                </a>
                <a href="https://github.com/altradits" target="_blank" rel="noopener noreferrer" class="px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-white hover:bg-zinc-100 border border-zinc-300 text-zinc-900 font-semibold text-sm sm:text-base transition-all hover:scale-105 active:scale-95 shadow-sm">
                    GitHub Profile
                </a>
            </div>
        </div>
    </section>

</main>

<script>
    function toggleMobileMenu() {
        const menu = document.getElementById('mobile-menu');
        if (menu) {
            menu.classList.toggle('hidden');
        }
    }

    // Capability Data for Interactive Reveal
    const capabilityData = [
        {
            title: "Web Systems",
            modeName: "Web Engine",
            tag: "Web Application Sprint",
            tagClass: "bg-blue-50 text-[#4A6FC3] border-blue-100",
            timeline: "14-Day Delivery",
            painpoint: "Eliminates sluggish database queries, brittle frontend state, and slow page loads.",
            deliverable: "Production React, Next.js, and Node.js web app with sub-second response times.",
            stack: "React • TypeScript • PostgreSQL • Redis",
            ctaText: "Hire for this sprint",
            ctaUrl: "https://wa.me/254707172370?text=Hi%20Stanley,%20I%20want%20to%20hire%20you%20for%20a%20Web%20Systems%20Sprint"
        },
        {
            title: "Bitcoin Rails",
            modeName: "Bitcoin Rails",
            tag: "Lightning Payment Rails",
            tagClass: "bg-amber-50 text-amber-600 border-amber-100",
            timeline: "7-Day Delivery",
            painpoint: "Bypasses high merchant fees, slow bank settlements, and chargeback fraud.",
            deliverable: "Instant 24/7 cross-border settlement using Bitcoin Lightning and M-Pesa APIs.",
            stack: "Bitcoin LND • BTCPay • Webhooks • Daraja M-Pesa",
            ctaText: "Hire for this sprint",
            ctaUrl: "https://wa.me/254707172370?text=Hi%20Stanley,%20I%20want%20to%20hire%20you%20for%20a%20Bitcoin%20Rails%20Sprint"
        },
        {
            title: "Go Services",
            modeName: "Go Backend",
            tag: "High-Concurrency Backend",
            tagClass: "bg-emerald-50 text-emerald-600 border-emerald-100",
            timeline: "10-Day Delivery",
            painpoint: "Fixes heavy memory consumption and unscalable synchronous API architectures.",
            deliverable: "Lean Go microservices handling 50,000+ requests per second with 99.99% uptime.",
            stack: "Go 1.23 • gRPC • Docker • Linux Kernel Tuning",
            ctaText: "Hire for this sprint",
            ctaUrl: "https://wa.me/254707172370?text=Hi%20Stanley,%20I%20want%20to%20hire%20you%20for%20a%20Go%20Backend%20Sprint"
        }
    ];

    // Two-Line Animated H1 Pain Point Rotator
    const painPoints = [
        "Eliminates Server Bottlenecks.",
        "Settles Payments In Milliseconds.",
        "Scales Without Technical Debt.",
        "Launches Your MVP In Record Time.",
        "Protects Your Core Revenue Rails."
    ];
    let currentPainPointIndex = 0;
    function cyclePainPoint() {
        const el = document.getElementById('hero-animated-painpoint');
        if (!el) return;
        el.style.opacity = '0';
        el.style.transform = 'translateY(12px)';
        setTimeout(() => {
            currentPainPointIndex = (currentPainPointIndex + 1) % painPoints.length;
            el.textContent = painPoints[currentPainPointIndex];
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 300);
    }
    setInterval(cyclePainPoint, 3200);

    // Interactive Plasticity, Framer & Figma Physics Engine
    class HeroPlasticityEngine {
        constructor(canvasId, cardId) {
            this.canvas = document.getElementById(canvasId);
            this.card = document.getElementById(cardId);
            if (!this.canvas) return;
            this.ctx = this.canvas.getContext('2d');
            this.particles = [];
            this.shockwaves = [];
            this.sparks = [];
            this.mouse = { x: null, y: null, targetX: null, targetY: null, radius: 180 };
            this.tilt = { x: 0, y: 0, targetX: 0, targetY: 0 };
            this.mode = 0; // 0: Web, 1: Bitcoin, 2: Go
            this.time = 0;
            this.animId = null;
            this.isVisible = true;

            this.palettes = [
                { primary: { r: 74, g: 111, b: 195 }, accent: { r: 229, g: 82, b: 82 }, speed: 1.0 },   // Web
                { primary: { r: 217, g: 119, b: 6 }, accent: { r: 251, g: 191, b: 36 }, speed: 1.35 },  // Bitcoin
                { primary: { r: 5, g: 150, b: 105 }, accent: { r: 74, g: 111, b: 195 }, speed: 1.2 }   // Go
            ];

            this.init();
        }

        init() {
            this.resize();
            this.createParticles();
            this.bindEvents();
            this.animate();
        }

        resize() {
            const dpr = window.devicePixelRatio || 1;
            const hero = this.canvas.parentElement;
            if (!hero) return;
            const rect = hero.getBoundingClientRect();
            this.width = rect.width;
            this.height = rect.height;
            this.canvas.width = this.width * dpr;
            this.canvas.height = this.height * dpr;
            this.ctx.scale(dpr, dpr);
        }

        createParticles() {
            this.particles = [];
            const count = Math.floor(Math.min(75, Math.max(30, (this.width * this.height) / 16000)));
            for (let i = 0; i < count; i++) {
                this.particles.push({
                    x: Math.random() * this.width,
                    y: Math.random() * this.height,
                    vx: (Math.random() - 0.5) * 0.6,
                    vy: (Math.random() - 0.5) * 0.6,
                    radius: Math.random() * 2.0 + 1.2,
                    alpha: Math.random() * 0.45 + 0.3,
                    pulseSpeed: Math.random() * 0.03 + 0.01,
                    pulseVal: Math.random() * Math.PI
                });
            }
        }

        bindEvents() {
            window.addEventListener('resize', () => {
                this.resize();
                this.createParticles();
            });

            const hero = this.canvas.parentElement;
            if (hero) {
                hero.addEventListener('mousemove', (e) => {
                    const rect = this.canvas.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    this.mouse.x = x;
                    this.mouse.y = y;

                    // Update CAD HUD coordinates
                    const hudCoords = document.getElementById('cad-hud-coords');
                    if (hudCoords) {
                        hudCoords.textContent = `X: ${Math.round(x).toString().padStart(3, '0')} | Y: ${Math.round(y).toString().padStart(3, '0')}`;
                    }

                    // Compute 3D tilt angles (Framer style spring target)
                    const centerX = this.width / 2;
                    const centerY = this.height / 2;
                    this.tilt.targetX = ((y - centerY) / centerY) * -5.5; // rotateX
                    this.tilt.targetY = ((x - centerX) / centerX) * 5.5;  // rotateY
                });

                hero.addEventListener('mouseleave', () => {
                    this.mouse.x = null;
                    this.mouse.y = null;
                    this.tilt.targetX = 0;
                    this.tilt.targetY = 0;
                });

                // Haptic Click Shockwave & Sparks (Plasticity tactile click)
                hero.addEventListener('click', (e) => {
                    const rect = this.canvas.getBoundingClientRect();
                    const clickX = e.clientX - rect.left;
                    const clickY = e.clientY - rect.top;

                    // Shockwave ring
                    this.shockwaves.push({
                        x: clickX,
                        y: clickY,
                        radius: 5,
                        maxRadius: Math.min(300, this.width * 0.35),
                        alpha: 0.85
                    });

                    // Kinetic sparks
                    for (let i = 0; i < 14; i++) {
                        const angle = Math.random() * Math.PI * 2;
                        const speed = Math.random() * 5.0 + 2.0;
                        this.sparks.push({
                            x: clickX,
                            y: clickY,
                            vx: Math.cos(angle) * speed,
                            vy: Math.sin(angle) * speed,
                            radius: Math.random() * 2.5 + 1.0,
                            alpha: 1.0,
                            life: 1.0
                        });
                    }

                    // Pulse Reveal Card
                    const revealCard = document.getElementById('hero-reveal-card');
                    if (revealCard) {
                        revealCard.classList.add('ring-2', 'ring-[#E55252]/30');
                        setTimeout(() => {
                            revealCard.classList.remove('ring-2', 'ring-[#E55252]/30');
                        }, 400);
                    }
                });

                // Touch handling
                hero.addEventListener('touchmove', (e) => {
                    if (e.touches.length > 0) {
                        const rect = this.canvas.getBoundingClientRect();
                        this.mouse.x = e.touches[0].clientX - rect.left;
                        this.mouse.y = e.touches[0].clientY - rect.top;
                    }
                }, { passive: true });

                hero.addEventListener('touchend', () => {
                    this.mouse.x = null;
                    this.mouse.y = null;
                    this.tilt.targetX = 0;
                    this.tilt.targetY = 0;
                });

                const observer = new IntersectionObserver((entries) => {
                    this.isVisible = entries[0].isIntersecting;
                    if (this.isVisible && !this.animId) {
                        this.animate();
                    }
                }, { threshold: 0.1 });
                observer.observe(hero);
            }
        }

        setMode(index) {
            this.mode = index % this.palettes.length;
            const data = capabilityData[this.mode];

            // Update mode pills
            document.querySelectorAll('.mode-pill').forEach((btn, idx) => {
                if (idx === this.mode) {
                    btn.classList.add('active', 'bg-white', 'text-zinc-900', 'border-zinc-200', 'shadow-sm');
                    btn.classList.remove('border-transparent', 'text-zinc-500');
                } else {
                    btn.classList.remove('active', 'bg-white', 'text-zinc-900', 'border-zinc-200', 'shadow-sm');
                    btn.classList.add('border-transparent', 'text-zinc-500');
                }
            });

            // Update CAD HUD mode
            const cadMode = document.getElementById('cad-hud-mode');
            if (cadMode) {
                cadMode.textContent = data.modeName;
            }

            // Update Reveal Card
            const tagBadge = document.getElementById('reveal-tag-badge');
            const timelineBadge = document.getElementById('reveal-timeline-badge');
            const painpointEl = document.getElementById('reveal-painpoint');
            const deliverableEl = document.getElementById('reveal-deliverable');
            const stackEl = document.getElementById('reveal-stack');
            const ctaLink = document.getElementById('reveal-cta-link');

            if (tagBadge && data) {
                tagBadge.className = `px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider border ${data.tagClass}`;
                tagBadge.textContent = data.tag;
            }
            if (timelineBadge && data) {
                timelineBadge.textContent = data.timeline;
            }
            if (painpointEl && data) {
                painpointEl.textContent = data.painpoint;
            }
            if (deliverableEl && data) {
                deliverableEl.textContent = data.deliverable;
            }
            if (stackEl && data) {
                stackEl.textContent = data.stack;
            }
            if (ctaLink && data) {
                ctaLink.href = data.ctaUrl;
                ctaLink.textContent = data.ctaText;
            }

            // Trigger ripple pulse
            this.shockwaves.push({
                x: this.width / 2,
                y: this.height / 2,
                radius: 10,
                maxRadius: 280,
                alpha: 0.75
            });
        }

        animate() {
            if (!this.isVisible) {
                this.animId = null;
                return;
            }

            this.time += 0.016 * this.palettes[this.mode].speed;
            this.ctx.clearRect(0, 0, this.width, this.height);

            const palette = this.palettes[this.mode];
            const primary = palette.primary;
            const accent = palette.accent;

            // 1. Damped Spring 3D Tilt on Foreground Card
            if (this.card) {
                this.tilt.x += (this.tilt.targetX - this.tilt.x) * 0.12;
                this.tilt.y += (this.tilt.targetY - this.tilt.y) * 0.12;
                this.card.style.transform = `perspective(1000px) rotateX(${this.tilt.x.toFixed(2)}deg) rotateY(${this.tilt.y.toFixed(2)}deg)`;
            }

            // 2. Plasticity 3D Curvature NURBS Wave (Parametric Surface Ribbon)
            const ribbonPoints = [];
            const steps = 60;
            const ribbonY = this.height * 0.52;
            const amp = 35 + 10 * Math.sin(this.time * 1.5);

            this.ctx.beginPath();
            for (let i = 0; i <= steps; i++) {
                const u = i / steps;
                const x = u * this.width;
                const wave1 = Math.sin(u * Math.PI * 3 + this.time * 2.0) * amp;
                const wave2 = Math.cos(u * Math.PI * 2 - this.time * 1.2) * (amp * 0.5);
                const mouseInfluence = (this.mouse.x !== null) ? Math.exp(-Math.pow((x - this.mouse.x) / 180, 2)) * 40 : 0;
                const y = ribbonY + wave1 + wave2 - mouseInfluence;

                ribbonPoints.push({ x, y });
                if (i === 0) this.ctx.moveTo(x, y);
                else this.ctx.lineTo(x, y);
            }
            this.ctx.strokeStyle = `rgba(${accent.r}, ${accent.g}, ${accent.b}, 0.28)`;
            this.ctx.lineWidth = 1.8;
            this.ctx.stroke();

            // 3. Shockwave Rings (Tactile click response)
            for (let i = this.shockwaves.length - 1; i >= 0; i--) {
                const sw = this.shockwaves[i];
                sw.radius += (sw.maxRadius - sw.radius) * 0.08 + 2.5;
                sw.alpha *= 0.94;

                this.ctx.beginPath();
                this.ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
                this.ctx.strokeStyle = `rgba(${accent.r}, ${accent.g}, ${accent.b}, ${sw.alpha})`;
                this.ctx.lineWidth = 2.0;
                this.ctx.stroke();

                if (sw.alpha < 0.02 || sw.radius >= sw.maxRadius) {
                    this.shockwaves.splice(i, 1);
                }
            }

            // 4. Kinetic Sparks
            for (let i = this.sparks.length - 1; i >= 0; i--) {
                const sp = this.sparks[i];
                sp.x += sp.vx;
                sp.y += sp.vy;
                sp.vx *= 0.95;
                sp.vy *= 0.95;
                sp.life -= 0.025;
                sp.alpha = Math.max(0, sp.life);

                this.ctx.beginPath();
                this.ctx.arc(sp.x, sp.y, sp.radius * sp.life, 0, Math.PI * 2);
                this.ctx.fillStyle = `rgba(${accent.r}, ${accent.g}, ${accent.b}, ${sp.alpha})`;
                this.ctx.fill();

                if (sp.life <= 0) {
                    this.sparks.splice(i, 1);
                }
            }

            // 5. Kinetic Particles & Connecting Mesh
            for (let i = 0; i < this.particles.length; i++) {
                const p = this.particles[i];

                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > this.width) p.vx *= -1;
                if (p.y < 0 || p.y > this.height) p.vy *= -1;

                p.pulseVal += p.pulseSpeed;
                const currentR = p.radius + Math.sin(p.pulseVal) * 0.5;

                // Mouse interaction
                if (this.mouse.x !== null && this.mouse.y !== null) {
                    const dx = this.mouse.x - p.x;
                    const dy = this.mouse.y - p.y;
                    const dist = Math.hypot(dx, dy);
                    if (dist < this.mouse.radius) {
                        const force = (1 - dist / this.mouse.radius) * 1.6;
                        p.x -= (dx / dist) * force;
                        p.y -= (dy / dist) * force;

                        // Connecting laser ray to cursor
                        const rayAlpha = (1 - dist / this.mouse.radius) * 0.35;
                        this.ctx.beginPath();
                        this.ctx.moveTo(p.x, p.y);
                        this.ctx.lineTo(this.mouse.x, this.mouse.y);
                        this.ctx.strokeStyle = `rgba(${primary.r}, ${primary.g}, ${primary.b}, ${rayAlpha})`;
                        this.ctx.lineWidth = 1;
                        this.ctx.stroke();
                    }
                }

                // Core & Halo
                this.ctx.beginPath();
                this.ctx.arc(p.x, p.y, currentR, 0, Math.PI * 2);
                this.ctx.fillStyle = `rgba(${primary.r}, ${primary.g}, ${primary.b}, ${p.alpha})`;
                this.ctx.fill();
            }

            // Mesh Lines
            const maxDist = 120;
            for (let i = 0; i < this.particles.length; i++) {
                for (let j = i + 1; j < this.particles.length; j++) {
                    const p1 = this.particles[i];
                    const p2 = this.particles[j];
                    const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);

                    if (dist < maxDist) {
                        const lineAlpha = (1 - dist / maxDist) * 0.18;
                        this.ctx.beginPath();
                        this.ctx.moveTo(p1.x, p1.y);
                        this.ctx.lineTo(p2.x, p2.y);
                        this.ctx.strokeStyle = `rgba(${primary.r}, ${primary.g}, ${primary.b}, ${lineAlpha})`;
                        this.ctx.lineWidth = 0.75;
                        this.ctx.stroke();
                    }
                }
            }

            this.animId = requestAnimationFrame(() => this.animate());
        }
    }

    let plasticityEngine;
    function setPlasticityMode(idx) {
        if (plasticityEngine) {
            plasticityEngine.setMode(idx);
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        plasticityEngine = new HeroPlasticityEngine('hero-plasticity-canvas', 'hero-tilt-card');
    });
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        plasticityEngine = new HeroPlasticityEngine('hero-plasticity-canvas', 'hero-tilt-card');
    }
</script>

<?php
get_footer();

