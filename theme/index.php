<?php
/**
 * The main template file for Altradits Theme
 */
get_header();
?>

<main id="primary" class="site-main flex-1 w-full">

    <!-- HERO SECTION -->
    <section id="hero" class="relative min-h-[85vh] sm:min-h-[90vh] w-full bg-[#FAFAFA] flex flex-col items-center justify-center px-4 sm:px-8 lg:px-12 overflow-hidden pt-28 sm:pt-36 pb-16">
        <div class="absolute inset-0 z-0 opacity-40 pointer-events-none" 
             style="background-image: radial-gradient(rgba(0,0,0,0.06) 1px, transparent 1px); background-size: 28px 28px;"></div>
        <div class="absolute inset-0 z-1 bg-gradient-to-b from-white/90 via-white/50 to-[#FAFAFA] pointer-events-none"></div>

        <div class="relative z-10 w-full max-w-5xl 2xl:max-w-6xl mx-auto text-center flex flex-col items-center justify-center">
            <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#09090B] leading-[1.08] max-w-4xl mx-auto">
                Live life beyond your desk. <br class="hidden sm:inline" />
                <span class="text-[#4A6FC3]">We handle the precision.</span>
            </h1>

            <p class="mt-6 text-base sm:text-lg md:text-xl text-[#52525B] max-w-2xl mx-auto leading-relaxed">
                Write one message. Altradits automatically adapts, optimizes, and schedules your content across LinkedIn, X, Instagram, Facebook, Dev.to, and Bitcoin Blogs.
            </p>

            <div class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <a href="#studio" class="al-btn-primary w-full sm:w-auto">
                    LAUNCH LIVE STUDIO
                </a>
                <a href="#pricing" class="al-btn-secondary w-full sm:w-auto">
                    VIEW PRICING
                </a>
            </div>

            <!-- Quick Interactive Demo Prompts -->
            <div class="mt-12 w-full max-w-2xl bg-white border border-[#E4E4E7] rounded-2xl p-3 sm:p-4 shadow-sm text-left">
                <div class="text-xs font-bold uppercase tracking-wider text-[#71717A] mb-2 px-2">
                    Try A Sample Topic
                </div>
                <div class="flex flex-wrap gap-2">
                    <button onclick="setComposerSample('Just launched high-throughput Bitcoin Lightning payment rails with instant settlement and zero chargebacks. Sovereign finance is here.')" class="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#F4F4F5] hover:bg-[#E4E4E7] text-[#09090B] transition-colors text-left">
                        Lightning Rails Launch
                    </button>
                    <button onclick="setComposerSample('Engineered an ultra-fast event pipeline handling 50k requests per second with Redis and Rust. Architecture breakdown inside.')" class="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#F4F4F5] hover:bg-[#E4E4E7] text-[#09090B] transition-colors text-left">
                        High-Speed Architecture
                    </button>
                    <button onclick="setComposerSample('Living remotely from the mountains while our automated syndication engine handles full multi-channel distribution.')" class="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#F4F4F5] hover:bg-[#E4E4E7] text-[#09090B] transition-colors text-left">
                        Remote Lifestyle
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- INTERACTIVE SAAS STUDIO DASHBOARD -->
    <section id="studio" class="py-20 px-4 sm:px-8 lg:px-12 w-full border-t border-[#E4E4E7] bg-white">
        <div class="max-w-7xl 2xl:max-w-[1600px] mx-auto">
            
            <div class="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                <div>
                    <div class="text-xs font-bold uppercase tracking-wider text-[#4A6FC3] mb-1">Interactive SaaS Engine</div>
                    <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#09090B] tracking-tight">
                        Altradits Studio Dashboard
                    </h2>
                </div>
                
                <!-- Studio Navigation Tabs -->
                <div class="flex items-center gap-1.5 bg-[#F4F4F5] p-1.5 rounded-xl border border-[#E4E4E7] overflow-x-auto">
                    <button onclick="switchStudioTab('compose')" id="tab-btn-compose" class="al-tab-btn active">
                        COMPOSE
                    </button>
                    <button onclick="switchStudioTab('drafts')" id="tab-btn-drafts" class="al-tab-btn">
                        DRAFTS <span id="drafts-count" class="ml-1 px-1.5 py-0.5 text-[11px] bg-zinc-200 text-zinc-800 rounded-full">0</span>
                    </button>
                    <button onclick="switchStudioTab('scheduled')" id="tab-btn-scheduled" class="al-tab-btn">
                        SCHEDULED <span id="scheduled-count" class="ml-1 px-1.5 py-0.5 text-[11px] bg-[#4A6FC3] text-white rounded-full">0</span>
                    </button>
                    <button onclick="switchStudioTab('analytics')" id="tab-btn-analytics" class="al-tab-btn">
                        ANALYTICS
                    </button>
                </div>
            </div>

            <!-- TAB 1: COMPOSE -->
            <div id="view-compose" class="block">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    
                    <!-- Left Column: Composer Controls -->
                    <div class="lg:col-span-6 flex flex-col gap-5">
                        
                        <!-- Channel Selector Pills -->
                        <div class="al-card p-5">
                            <div class="text-xs font-bold uppercase tracking-wider text-[#71717A] mb-3">
                                Target Distribution Rails
                            </div>
                            <div class="flex flex-wrap gap-2">
                                <button type="button" onclick="togglePlatform('linkedin')" id="pill-linkedin" class="channel-pill active">
                                    LINKEDIN
                                </button>
                                <button type="button" onclick="togglePlatform('twitter')" id="pill-twitter" class="channel-pill active">
                                    X / TWITTER
                                </button>
                                <button type="button" onclick="togglePlatform('facebook')" id="pill-facebook" class="channel-pill active">
                                    FACEBOOK
                                </button>
                                <button type="button" onclick="togglePlatform('instagram')" id="pill-instagram" class="channel-pill active">
                                    INSTAGRAM
                                </button>
                                <button type="button" onclick="togglePlatform('devto')" id="pill-devto" class="channel-pill active">
                                    DEV.TO
                                </button>
                                <button type="button" onclick="togglePlatform('bitcoin')" id="pill-bitcoin" class="channel-pill active">
                                    BITCOIN BLOGS
                                </button>
                            </div>
                        </div>

                        <!-- AI Precision Engine & Tone Switcher -->
                        <div class="al-card p-5">
                            <div class="flex items-center justify-between mb-3">
                                <div class="text-xs font-bold uppercase tracking-wider text-[#71717A]">
                                    AI Precision Tone
                                </div>
                                <span class="text-xs font-semibold text-[#4A6FC3]">Active Optimization</span>
                            </div>
                            <div class="flex flex-wrap gap-2">
                                <button type="button" onclick="setAiTone('executive')" id="tone-executive" class="tone-pill active">
                                    Executive Authority
                                </button>
                                <button type="button" onclick="setAiTone('viral')" id="tone-viral" class="tone-pill">
                                    Punchy Viral
                                </button>
                                <button type="button" onclick="setAiTone('technical')" id="tone-technical" class="tone-pill">
                                    Deep Technical
                                </button>
                                <button type="button" onclick="setAiTone('bitcoin')" id="tone-bitcoin" class="tone-pill">
                                    Sound Money
                                </button>
                            </div>
                        </div>

                        <!-- Main Composer Input -->
                        <div class="al-card p-5 flex flex-col relative focus-within:border-[#4A6FC3]">
                            
                            <div id="image-preview-container" class="hidden mb-4 relative rounded-lg overflow-hidden border border-[#E4E4E7] bg-[#F4F4F5]">
                                <img id="attached-image-view" src="" alt="Attached media" class="w-full h-48 object-cover">
                                <button onclick="removeAttachedImage()" class="absolute top-2 right-2 px-2.5 py-1 bg-black/70 hover:bg-black text-white text-xs font-bold uppercase rounded-md transition-colors">
                                    REMOVE
                                </button>
                            </div>

                            <div id="ai-loading-overlay" class="hidden absolute inset-0 bg-white/90 backdrop-blur-sm z-20 rounded-2xl flex flex-col items-center justify-center p-6 text-center">
                                <div class="w-8 h-8 border-3 border-[#4A6FC3] border-t-transparent rounded-full animate-spin mb-3"></div>
                                <div class="text-sm font-bold text-[#09090B]">Precision AI Engine Working</div>
                                <p class="text-xs text-[#52525B] mt-1">Analyzing content, structure, and channel algorithms...</p>
                            </div>

                            <textarea id="composer-text" rows="7" 
                                      oninput="handleComposerInput()" 
                                      placeholder="What do you want to share with the world today? Share your thoughts, code breakthroughs, or business milestones..."
                                      class="w-full bg-transparent text-[#09090B] placeholder-[#71717A] text-sm sm:text-base resize-none focus:outline-none leading-relaxed"></textarea>
                            
                            <div class="mt-4 pt-3 border-t border-[#E4E4E7] flex flex-wrap items-center justify-between gap-3">
                                <div class="flex items-center gap-2">
                                    <input type="file" id="media-upload-input" accept="image/*" onchange="handleImageSelection(event)" class="hidden">
                                    <button type="button" onclick="document.getElementById('media-upload-input').click()" class="al-btn-secondary !py-1.5 !px-3 !text-xs">
                                        ATTACH PHOTO
                                    </button>
                                    <button type="button" onclick="triggerAiOptimization()" class="al-btn-secondary !py-1.5 !px-3 !text-xs !bg-[#F4F4F5] !border-transparent hover:!bg-[#E4E4E7]">
                                        OPTIMIZE COPY
                                    </button>
                                </div>

                                <div class="text-xs font-semibold text-[#71717A]" id="char-counter">
                                    0 characters
                                </div>
                            </div>
                        </div>

                        <!-- Action Buttons -->
                        <div class="flex items-center gap-3">
                            <button type="button" onclick="savePost('draft')" class="al-btn-secondary flex-1">
                                SAVE DRAFT
                            </button>
                            <button type="button" onclick="savePost('scheduled')" class="al-btn-primary flex-1">
                                SCHEDULE POST
                            </button>
                        </div>

                    </div>

                    <!-- Right Column: Live Previews -->
                    <div class="lg:col-span-6 flex flex-col gap-4">
                        <div class="flex items-center justify-between">
                            <div class="text-xs font-bold uppercase tracking-wider text-[#71717A]">
                                Live Channel Previews
                            </div>
                            <div class="text-xs text-[#52525B]">Real-time algorithm rendering</div>
                        </div>

                        <div id="previews-container" class="space-y-4 max-h-[750px] overflow-y-auto pr-1">
                            
                            <!-- LinkedIn Preview Card -->
                            <div id="preview-linkedin" class="al-card p-5 border-[#E4E4E7]">
                                <div class="flex items-center justify-between mb-3">
                                    <div class="flex items-center gap-3">
                                        <div class="w-10 h-10 rounded-full bg-[#4A6FC3] text-white flex items-center justify-center font-bold text-sm">
                                            A
                                        </div>
                                        <div>
                                            <div class="text-xs font-bold text-[#09090B]">Stanley Chege Thuita</div>
                                            <div class="text-[11px] text-[#71717A]">Founder at Altradits • Just now</div>
                                        </div>
                                    </div>
                                    <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-[#F4F4F5] text-[#4A6FC3] rounded">
                                        LINKEDIN
                                    </span>
                                </div>
                                <div id="preview-linkedin-body" class="text-xs sm:text-sm text-[#09090B] whitespace-pre-line leading-relaxed">
                                    Your post copy will render here in real time...
                                </div>
                                <div id="preview-linkedin-media" class="hidden mt-3 rounded-lg overflow-hidden border border-[#E4E4E7]">
                                    <img src="" alt="Media preview" class="w-full h-auto object-cover max-h-64">
                                </div>
                                <div class="mt-4 pt-2 border-t border-[#E4E4E7] flex justify-between text-[11px] font-bold uppercase tracking-wider text-[#71717A]">
                                    <span>LIKE</span>
                                    <span>COMMENT</span>
                                    <span>REPOST</span>
                                    <span>SEND</span>
                                </div>
                            </div>

                            <!-- Twitter / X Preview Card -->
                            <div id="preview-twitter" class="al-card p-5 border-[#E4E4E7]">
                                <div class="flex items-center justify-between mb-2">
                                    <div class="flex items-center gap-3">
                                        <div class="w-9 h-9 rounded-full bg-[#09090B] text-white flex items-center justify-center font-bold text-xs">
                                            A
                                        </div>
                                        <div>
                                            <div class="text-xs font-bold text-[#09090B]">Altradits <span class="text-[11px] text-[#71717A] font-normal">@altradits</span></div>
                                        </div>
                                    </div>
                                    <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-[#F4F4F5] text-[#09090B] rounded">
                                        X / TWITTER
                                    </span>
                                </div>
                                <div id="preview-twitter-body" class="text-xs sm:text-sm text-[#09090B] whitespace-pre-line leading-relaxed">
                                    Your tweet will render here in real time...
                                </div>
                                <div id="preview-twitter-media" class="hidden mt-3 rounded-xl overflow-hidden border border-[#E4E4E7]">
                                    <img src="" alt="Media preview" class="w-full h-auto object-cover max-h-64">
                                </div>
                                <div class="mt-3 pt-2 border-t border-[#E4E4E7] flex justify-between text-[11px] font-bold uppercase tracking-wider text-[#71717A]">
                                    <span>REPLY</span>
                                    <span>REPOST</span>
                                    <span>LIKE</span>
                                    <span>SHARE</span>
                                </div>
                            </div>

                            <!-- Instagram Preview Card -->
                            <div id="preview-instagram" class="al-card p-5 border-[#E4E4E7]">
                                <div class="flex items-center justify-between mb-3">
                                    <div class="flex items-center gap-3">
                                        <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-[#D97706] to-[#E55252] text-white flex items-center justify-center font-bold text-xs">
                                            A
                                        </div>
                                        <div class="text-xs font-bold text-[#09090B]">altradits</div>
                                    </div>
                                    <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-[#F4F4F5] text-[#E55252] rounded">
                                        INSTAGRAM
                                    </span>
                                </div>
                                <div id="preview-instagram-media" class="w-full aspect-video bg-[#F4F4F5] rounded-lg mb-3 flex items-center justify-center text-xs text-[#71717A] border border-[#E4E4E7] overflow-hidden">
                                    <img src="" alt="Media" class="w-full h-full object-cover hidden">
                                    <span class="placeholder-text">Attach image to view visual frame</span>
                                </div>
                                <div class="text-xs text-[#09090B] leading-relaxed">
                                    <strong class="font-bold mr-1">altradits</strong>
                                    <span id="preview-instagram-body">Your caption with visual tags will render here...</span>
                                </div>
                            </div>

                            <!-- Dev.to Technical Preview Card -->
                            <div id="preview-devto" class="al-card p-5 border-[#E4E4E7]">
                                <div class="flex items-center justify-between mb-3">
                                    <div class="text-[11px] font-bold text-[#09090B]">DEV COMMUNITY</div>
                                    <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-[#09090B] text-white rounded">
                                        DEV.TO
                                    </span>
                                </div>
                                <h3 id="preview-devto-title" class="text-sm sm:text-base font-bold text-[#09090B] mb-2">
                                    Your Technical Article Title
                                </h3>
                                <div class="flex gap-1.5 mb-2">
                                    <span class="text-[10px] bg-[#F4F4F5] text-[#52525B] font-semibold px-2 py-0.5 rounded">#engineering</span>
                                    <span class="text-[10px] bg-[#F4F4F5] text-[#52525B] font-semibold px-2 py-0.5 rounded">#automation</span>
                                </div>
                                <div id="preview-devto-body" class="text-xs text-[#52525B] line-clamp-3 leading-relaxed">
                                    Your formatted technical markdown will render here...
                                </div>
                            </div>

                            <!-- Bitcoin Blog Network Preview Card -->
                            <div id="preview-bitcoin" class="al-card p-5 border-[#E4E4E7]">
                                <div class="flex items-center justify-between mb-3 pb-2 border-b border-[#E4E4E7]">
                                    <div class="text-xs font-bold text-[#D97706]">BITCOIN SOUND MONEY SYNDICATE</div>
                                    <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-amber-50 text-[#D97706] rounded border border-amber-200">
                                        LIGHTNING RAIL
                                    </span>
                                </div>
                                <h3 id="preview-bitcoin-title" class="text-sm sm:text-base font-bold text-[#09090B] mb-1 font-serif">
                                    Sound Money and Sovereign Architecture
                                </h3>
                                <div class="text-[11px] text-[#71717A] mb-2">Stanley Chege Thuita • 21,000 Sats settlement</div>
                                <div id="preview-bitcoin-body" class="text-xs text-[#52525B] font-serif leading-relaxed line-clamp-3">
                                    Your sovereign thought will render here in clean serif publication style...
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <!-- TAB 2: DRAFTS -->
            <div id="view-drafts" class="hidden">
                <div class="max-w-4xl mx-auto">
                    <div class="flex items-center justify-between mb-6">
                        <h3 class="text-xl font-bold text-[#09090B]">Saved Drafts</h3>
                        <button onclick="switchStudioTab('compose')" class="al-btn-secondary !py-2 !px-4 !text-xs">
                            NEW POST
                        </button>
                    </div>

                    <div id="drafts-list" class="space-y-4">
                        <!-- Populated by JS -->
                    </div>
                </div>
            </div>

            <!-- TAB 3: SCHEDULED -->
            <div id="view-scheduled" class="hidden">
                <div class="max-w-4xl mx-auto">
                    <div class="flex items-center justify-between mb-6">
                        <div>
                            <h3 class="text-xl font-bold text-[#09090B]">Scheduled Publication Queue</h3>
                            <p class="text-xs text-[#52525B]">Posts automatically trigger across target channels on schedule</p>
                        </div>
                        <button onclick="switchStudioTab('compose')" class="al-btn-secondary !py-2 !px-4 !text-xs">
                            ADD TO QUEUE
                        </button>
                    </div>

                    <div id="scheduled-list" class="space-y-4">
                        <!-- Populated by JS -->
                    </div>
                </div>
            </div>

            <!-- TAB 4: ANALYTICS -->
            <div id="view-analytics" class="hidden">
                <div class="max-w-5xl mx-auto space-y-6">
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div class="al-card p-5">
                            <div class="text-xs font-bold uppercase tracking-wider text-[#71717A] mb-1">Total Posts Synced</div>
                            <div class="text-3xl font-extrabold text-[#09090B]" id="metric-total-posts">124</div>
                            <div class="text-xs text-[#059669] font-semibold mt-1">+18% this month</div>
                        </div>
                        <div class="al-card p-5">
                            <div class="text-xs font-bold uppercase tracking-wider text-[#71717A] mb-1">Audience Reach</div>
                            <div class="text-3xl font-extrabold text-[#4A6FC3]">84.2K</div>
                            <div class="text-xs text-[#059669] font-semibold mt-1">Across 6 networks</div>
                        </div>
                        <div class="al-card p-5">
                            <div class="text-xs font-bold uppercase tracking-wider text-[#71717A] mb-1">Time Saved</div>
                            <div class="text-3xl font-extrabold text-[#D97706]">38.5 hrs</div>
                            <div class="text-xs text-[#71717A] font-semibold mt-1">Automated distribution</div>
                        </div>
                        <div class="al-card p-5">
                            <div class="text-xs font-bold uppercase tracking-wider text-[#71717A] mb-1">Lightning Velocity</div>
                            <div class="text-3xl font-extrabold text-[#E55252]">100%</div>
                            <div class="text-xs text-[#059669] font-semibold mt-1">Zero downtime queue</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>

    <!-- HOW IT WORKS -->
    <section id="how-it-works" class="py-24 px-4 sm:px-8 lg:px-12 w-full border-t border-[#E4E4E7] bg-[#FAFAFA]">
        <div class="max-w-7xl 2xl:max-w-[1600px] mx-auto">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <div class="text-xs font-bold uppercase tracking-wider text-[#4A6FC3] mb-2">Automated Precision Engine</div>
                <h2 class="text-3xl sm:text-4xl font-extrabold text-[#09090B] tracking-tight">
                    Your social presence, running smoothly.
                </h2>
                <p class="mt-4 text-base sm:text-lg text-[#52525B]">
                    Share your journey to inspire, educate, and entertain without spending all day at your desk.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="al-card p-8 flex flex-col justify-between">
                    <div class="text-3xl font-extrabold text-[#4A6FC3] mb-4">01</div>
                    <div>
                        <h3 class="text-xl font-bold text-[#09090B] mb-2">Capture the Moment</h3>
                        <p class="text-sm text-[#52525B] leading-relaxed">
                            Write one core message or upload a photo. Forget platform formatting rules. Share your authentic thought directly.
                        </p>
                    </div>
                    <div class="mt-6 pt-4 border-t border-[#E4E4E7] text-xs font-semibold text-[#71717A]">
                        Unified smart composer
                    </div>
                </div>

                <div class="al-card p-8 flex flex-col justify-between">
                    <div class="text-3xl font-extrabold text-[#E55252] mb-4">02</div>
                    <div>
                        <h3 class="text-xl font-bold text-[#09090B] mb-2">Precision Tailoring</h3>
                        <p class="text-sm text-[#52525B] leading-relaxed">
                            Altradits adapts your post for every platform. Professional for LinkedIn, punchy for Twitter, visual for Instagram.
                        </p>
                    </div>
                    <div class="mt-6 pt-4 border-t border-[#E4E4E7] text-xs font-semibold text-[#71717A]">
                        Platform character tuning
                    </div>
                </div>

                <div class="al-card p-8 flex flex-col justify-between">
                    <div class="text-3xl font-extrabold text-[#D97706] mb-4">03</div>
                    <div>
                        <h3 class="text-xl font-bold text-[#09090B] mb-2">Set It and Forget It</h3>
                        <p class="text-sm text-[#52525B] leading-relaxed">
                            Schedule tailored posts across all accounts with one click. Visual calendar keeps your strategy synchronized.
                        </p>
                    </div>
                    <div class="mt-6 pt-4 border-t border-[#E4E4E7] text-xs font-semibold text-[#71717A]">
                        Timezone-aware queue
                    </div>
                </div>

                <div class="al-card p-8 flex flex-col justify-between">
                    <div class="text-3xl font-extrabold text-[#059669] mb-4">04</div>
                    <div>
                        <h3 class="text-xl font-bold text-[#09090B] mb-2">Live Life Beyond</h3>
                        <p class="text-sm text-[#52525B] leading-relaxed">
                            Close your laptop. Altradits publishes on time while you concentrate on building products and enjoying your life.
                        </p>
                    </div>
                    <div class="mt-6 pt-4 border-t border-[#E4E4E7] text-xs font-semibold text-[#71717A]">
                        Automated multi-rail distribution
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- SUPPORTED DISTRIBUTION RAILS -->
    <section id="channels" class="py-24 px-4 sm:px-8 lg:px-12 w-full border-t border-[#E4E4E7] bg-white">
        <div class="max-w-7xl 2xl:max-w-[1600px] mx-auto">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <div class="text-xs font-bold uppercase tracking-wider text-[#4A6FC3] mb-2">Multi-Channel Syndicate</div>
                <h2 class="text-3xl sm:text-4xl font-extrabold text-[#09090B] tracking-tight">
                    Supported Distribution Channels
                </h2>
                <p class="mt-4 text-base sm:text-lg text-[#52525B]">
                    One command center targeting every major network and sovereign developer hub.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="al-card p-6">
                    <div class="flex items-center justify-between mb-4">
                        <div class="text-base font-bold text-[#09090B]">LinkedIn</div>
                        <span class="text-xs font-bold px-2 py-0.5 bg-blue-50 text-[#4A6FC3] rounded">B2B & Executive</span>
                    </div>
                    <p class="text-xs text-[#52525B] leading-relaxed">
                        Automatic hook formatting, paragraph line-breaks, executive tone tuning, and optimal hashtag clusters.
                    </p>
                </div>

                <div class="al-card p-6">
                    <div class="flex items-center justify-between mb-4">
                        <div class="text-base font-bold text-[#09090B]">X / Twitter</div>
                        <span class="text-xs font-bold px-2 py-0.5 bg-zinc-100 text-[#09090B] rounded">280 Chars & Threads</span>
                    </div>
                    <p class="text-xs text-[#52525B] leading-relaxed">
                        Intelligent character limit truncation, viral punchlines, and automatic multi-tweet thread splitting.
                    </p>
                </div>

                <div class="al-card p-6">
                    <div class="flex items-center justify-between mb-4">
                        <div class="text-base font-bold text-[#09090B]">Instagram</div>
                        <span class="text-xs font-bold px-2 py-0.5 bg-pink-50 text-[#E55252] rounded">Visual & Reels</span>
                    </div>
                    <p class="text-xs text-[#52525B] leading-relaxed">
                        AI image caption generator, smart hashtag recommendations, and square preview framing.
                    </p>
                </div>

                <div class="al-card p-6">
                    <div class="flex items-center justify-between mb-4">
                        <div class="text-base font-bold text-[#09090B]">Facebook</div>
                        <span class="text-xs font-bold px-2 py-0.5 bg-blue-50 text-blue-700 rounded">Pages & Groups</span>
                    </div>
                    <p class="text-xs text-[#52525B] leading-relaxed">
                        Community engagement questions, rich media embedding, and page schedule synchronization.
                    </p>
                </div>

                <div class="al-card p-6">
                    <div class="flex items-center justify-between mb-4">
                        <div class="text-base font-bold text-[#09090B]">Dev.to</div>
                        <span class="text-xs font-bold px-2 py-0.5 bg-zinc-100 text-[#09090B] rounded">Markdown Articles</span>
                    </div>
                    <p class="text-xs text-[#52525B] leading-relaxed">
                        Automatic code syntax formatting, technical headers, tag taxonomy, and long-form developer articles.
                    </p>
                </div>

                <div class="al-card p-6">
                    <div class="flex items-center justify-between mb-4">
                        <div class="text-base font-bold text-[#09090B]">Bitcoin Blog Network</div>
                        <span class="text-xs font-bold px-2 py-0.5 bg-amber-50 text-[#D97706] rounded">Lightning Sound Money</span>
                    </div>
                    <p class="text-xs text-[#52525B] leading-relaxed">
                        Sovereign sound money publishing with instant Bitcoin Lightning micro-tipping settlement.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- PRICING & BITCOIN LIGHTNING RAILS -->
    <section id="pricing" class="py-24 px-4 sm:px-8 lg:px-12 w-full border-t border-[#E4E4E7] bg-[#FAFAFA]">
        <div class="max-w-7xl 2xl:max-w-[1600px] mx-auto">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <div class="text-xs font-bold uppercase tracking-wider text-[#4A6FC3] mb-2">Sound Money & Card Rails</div>
                <h2 class="text-3xl sm:text-4xl font-extrabold text-[#09090B] tracking-tight">
                    Scale your content, not your headcount.
                </h2>
                <p class="mt-4 text-base sm:text-lg text-[#52525B]">
                    Hire precision AI automation for a fraction of agency cost. Instant Bitcoin Lightning settlement available.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div class="al-card p-8 flex flex-col justify-between bg-white">
                    <div>
                        <div class="text-lg font-bold text-[#09090B]">Creator</div>
                        <p class="text-xs text-[#52525B] mt-2 mb-6">
                            For individual creators building their personal brand.
                        </p>
                        <div class="flex items-baseline gap-1 mb-6">
                            <span class="text-4xl font-extrabold text-[#09090B]">$19</span>
                            <span class="text-xs font-semibold text-[#71717A]">/ month</span>
                        </div>
                        <ul class="space-y-3 text-xs font-medium text-[#52525B] mb-8">
                            <li class="flex items-center gap-2">✓ 1 Workspace</li>
                            <li class="flex items-center gap-2">✓ Up to 5 Social Profiles</li>
                            <li class="flex items-center gap-2">✓ Unlimited Scheduled Posts</li>
                            <li class="flex items-center gap-2">✓ Smart AI Tailoring</li>
                            <li class="flex items-center gap-2">✓ Basic Analytics</li>
                        </ul>
                    </div>
                    <button onclick="openLightningModal('Creator', '$19')" class="al-btn-secondary w-full">
                        PAY WITH LIGHTNING
                    </button>
                </div>

                <div class="al-card p-8 flex flex-col justify-between bg-white border-2 border-[#4A6FC3] shadow-lg relative">
                    <div class="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-[#4A6FC3] text-white text-[10px] font-extrabold uppercase tracking-wider rounded-full">
                        MOST POPULAR
                    </div>
                    <div>
                        <div class="text-lg font-bold text-[#09090B]">Professional</div>
                        <p class="text-xs text-[#52525B] mt-2 mb-6">
                            For founders and power creators needing scale.
                        </p>
                        <div class="flex items-baseline gap-1 mb-6">
                            <span class="text-4xl font-extrabold text-[#09090B]">$49</span>
                            <span class="text-xs font-semibold text-[#71717A]">/ month</span>
                        </div>
                        <ul class="space-y-3 text-xs font-medium text-[#52525B] mb-8">
                            <li class="flex items-center gap-2">✓ 3 Workspaces</li>
                            <li class="flex items-center gap-2">✓ Up to 15 Social Profiles</li>
                            <li class="flex items-center gap-2">✓ Unlimited Scheduled Posts</li>
                            <li class="flex items-center gap-2">✓ Advanced Multimodal Vision AI</li>
                            <li class="flex items-center gap-2">✓ Deep Analytics and Reports</li>
                            <li class="flex items-center gap-2">✓ Priority Support</li>
                        </ul>
                    </div>
                    <button onclick="openLightningModal('Professional', '$49')" class="al-btn-primary w-full">
                        PAY WITH LIGHTNING
                    </button>
                </div>

                <div class="al-card p-8 flex flex-col justify-between bg-white">
                    <div>
                        <div class="text-lg font-bold text-[#09090B]">Agency</div>
                        <p class="text-xs text-[#52525B] mt-2 mb-6">
                            For teams managing multiple brands and client accounts.
                        </p>
                        <div class="flex items-baseline gap-1 mb-6">
                            <span class="text-4xl font-extrabold text-[#09090B]">$129</span>
                            <span class="text-xs font-semibold text-[#71717A]">/ month</span>
                        </div>
                        <ul class="space-y-3 text-xs font-medium text-[#52525B] mb-8">
                            <li class="flex items-center gap-2">✓ Unlimited Workspaces</li>
                            <li class="flex items-center gap-2">✓ Unlimited Social Profiles</li>
                            <li class="flex items-center gap-2">✓ Team Collaboration (5 seats)</li>
                            <li class="flex items-center gap-2">✓ Approval Workflows</li>
                            <li class="flex items-center gap-2">✓ White-Label Reports</li>
                            <li class="flex items-center gap-2">✓ Dedicated Success Manager</li>
                        </ul>
                    </div>
                    <button onclick="openLightningModal('Agency', '$129')" class="al-btn-secondary w-full">
                        PAY WITH LIGHTNING
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- CALL TO ACTION SECTION -->
    <section class="py-24 px-4 sm:px-8 lg:px-12 w-full bg-[#09090B] text-white text-center">
        <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                Ready to step away from the screen?
            </h2>
            <p class="mt-6 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                Join creators and founders who use Altradits to inspire, educate, and entertain their audience while actually living the life they post about.
            </p>
            <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#studio" class="al-btn-primary w-full sm:w-auto">
                    LAUNCH LIVE STUDIO
                </a>
                <a href="#how-it-works" class="al-btn-secondary w-full sm:w-auto !bg-transparent !text-white !border-zinc-700 hover:!bg-zinc-900">
                    SEE HOW IT WORKS
                </a>
            </div>
        </div>
    </section>

</main>

<!-- LIGHTNING PAYMENT MODAL -->
<div id="lightning-modal" class="fixed inset-0 z-[100] hidden items-center justify-center p-4 al-modal-overlay">
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden border border-[#E4E4E7]">
        <div class="flex items-center justify-between px-6 py-4 border-b border-[#E4E4E7]">
            <h3 class="text-base font-bold text-[#09090B]">
                Bitcoin Lightning Settlement
            </h3>
            <button onclick="closeLightningModal()" class="text-xs font-bold uppercase text-[#71717A] hover:text-[#09090B] px-2 py-1">
                CLOSE
            </button>
        </div>
        
        <div class="p-6 text-center">
            <p class="text-xs text-[#52525B] mb-5">
                Scan this QR code with your Lightning wallet to subscribe to the <strong id="modal-pkg-name" class="text-[#09090B]">Professional</strong> plan.
            </p>

            <div class="bg-[#F4F4F5] p-4 rounded-xl border border-[#E4E4E7] inline-block mb-5">
                <img id="lightning-qr-img" 
                     src="https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=lightning:lnurl1dp68gurn8ghj7ampd3kx2ar0veekzar0wd5xjtnrdakj7tnhv4kxctttdehhwm30d3h82unvwqhhqmm5v93xcetnd9nkuctvxgcsm55zyn" 
                     alt="Lightning QR Code" 
                     class="w-44 h-44 mx-auto rounded-lg">
            </div>

            <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5 text-left">
                <div class="text-xs font-semibold text-[#D97706] mb-1">Amount to send:</div>
                <div class="text-2xl font-extrabold text-[#09090B]">
                    <span id="modal-sats-amount">...</span> <span class="text-sm font-bold text-[#D97706]">Sats</span>
                </div>
                <div class="text-[11px] text-[#71717A] mt-1" id="modal-usd-equiv">
                    ≈ $49 USD (Live CoinDesk Rate)
                </div>
            </div>

            <div class="flex flex-col gap-2">
                <button onclick="copyLnurlAddress()" id="btn-copy-lnurl" class="al-btn-primary w-full">
                    COPY LNURL INVOICE
                </button>
                <button onclick="closeLightningModal()" class="al-btn-secondary w-full">
                    CANCEL
                </button>
            </div>
        </div>
    </div>
</div>

<!-- JAVASCRIPT APPLICATION CORE -->
<script>
    let selectedPlatforms = ['linkedin', 'twitter', 'facebook', 'instagram', 'devto', 'bitcoin'];
    let selectedTone = 'executive';
    let attachedImageData = null;
    let btcPriceUsd = 65000;
    const lnurlAddress = "lnurl1dp68gurn8ghj7ampd3kx2ar0veekzar0wd5xjtnrdakj7tnhv4kxctttdehhwm30d3h82unvwqhhqmm5v93xcetnd9nkuctvxgcsm55zyn";

    let savedPosts = [];
    try {
        const stored = localStorage.getItem('altradits_posts');
        if (stored) savedPosts = JSON.parse(stored);
    } catch (e) {
        console.warn("Storage load error:", e);
    }

    function toggleMobileMenu() {
        const menu = document.getElementById('mobile-menu');
        menu.classList.toggle('hidden');
    }

    function switchStudioTab(tab) {
        const tabs = ['compose', 'drafts', 'scheduled', 'analytics'];
        tabs.forEach(t => {
            const btn = document.getElementById('tab-btn-' + t);
            const view = document.getElementById('view-' + t);
            if (btn && view) {
                if (t === tab) {
                    btn.classList.add('active');
                    view.classList.remove('hidden');
                    view.classList.add('block');
                } else {
                    btn.classList.remove('active');
                    view.classList.add('hidden');
                    view.classList.remove('block');
                }
            }
        });
        updateCounts();
        if (tab === 'drafts') renderDrafts();
        if (tab === 'scheduled') renderScheduled();
    }

    function updateCounts() {
        const drafts = savedPosts.filter(p => p.status === 'draft');
        const scheduled = savedPosts.filter(p => p.status === 'scheduled');
        
        const draftsCountEl = document.getElementById('drafts-count');
        const schedCountEl = document.getElementById('scheduled-count');
        const totalPostsEl = document.getElementById('metric-total-posts');

        if (draftsCountEl) draftsCountEl.textContent = drafts.length;
        if (schedCountEl) schedCountEl.textContent = scheduled.length;
        if (totalPostsEl) totalPostsEl.textContent = 120 + savedPosts.length;
    }

    function togglePlatform(platform) {
        if (selectedPlatforms.includes(platform)) {
            if (selectedPlatforms.length > 1) {
                selectedPlatforms = selectedPlatforms.filter(p => p !== platform);
            }
        } else {
            selectedPlatforms.push(platform);
        }
        updatePlatformPills();
        updatePreviews();
    }

    function updatePlatformPills() {
        const platforms = ['linkedin', 'twitter', 'facebook', 'instagram', 'devto', 'bitcoin'];
        platforms.forEach(p => {
            const pill = document.getElementById('pill-' + p);
            const preview = document.getElementById('preview-' + p);
            if (pill) {
                if (selectedPlatforms.includes(p)) {
                    pill.classList.add('active');
                    if (preview) preview.classList.remove('hidden');
                } else {
                    pill.classList.remove('active');
                    if (preview) preview.classList.add('hidden');
                }
            }
        });
    }

    function setAiTone(tone) {
        selectedTone = tone;
        const tones = ['executive', 'viral', 'technical', 'bitcoin'];
        tones.forEach(t => {
            const el = document.getElementById('tone-' + t);
            if (el) {
                if (t === tone) el.classList.add('active');
                else el.classList.remove('active');
            }
        });
        updatePreviews();
    }

    function setComposerSample(text) {
        const textarea = document.getElementById('composer-text');
        if (textarea) {
            textarea.value = text;
            handleComposerInput();
            document.getElementById('studio').scrollIntoView({ behavior: 'smooth' });
        }
    }

    function handleImageSelection(event) {
        const file = event.target.files && event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function(e) {
            attachedImageData = e.target.result;
            const previewContainer = document.getElementById('image-preview-container');
            const previewImg = document.getElementById('attached-image-view');
            if (previewContainer && previewImg) {
                previewImg.src = attachedImageData;
                previewContainer.classList.remove('hidden');
            }
            updatePreviews();
        };
        reader.readAsDataURL(file);
    }

    function removeAttachedImage() {
        attachedImageData = null;
        const previewContainer = document.getElementById('image-preview-container');
        const uploadInput = document.getElementById('media-upload-input');
        if (previewContainer) previewContainer.classList.add('hidden');
        if (uploadInput) uploadInput.value = '';
        updatePreviews();
    }

    function triggerAiOptimization() {
        const textarea = document.getElementById('composer-text');
        const text = textarea ? textarea.value.trim() : '';
        if (!text) return;

        const overlay = document.getElementById('ai-loading-overlay');
        if (overlay) overlay.classList.remove('hidden');

        setTimeout(() => {
            if (overlay) overlay.classList.add('hidden');
            let optimized = text;
            if (selectedTone === 'executive') {
                optimized = text + "\n\nKey takeaway: Scalable infrastructure requires uncompromising precision and disciplined architecture.";
            } else if (selectedTone === 'viral') {
                optimized = "Most teams get this wrong.\n\n" + text + "\n\nHere is what happens when you build for velocity:";
            } else if (selectedTone === 'technical') {
                optimized = text + "\n\nBenchmark: 50,000 req/sec throughput with sub-millisecond p99 latency.";
            } else if (selectedTone === 'bitcoin') {
                optimized = text + "\n\nSettlement speed: Instant. Intermediaries: Zero. Sound money wins.";
            }
            if (textarea) {
                textarea.value = optimized;
                handleComposerInput();
            }
        }, 800);
    }

    function handleComposerInput() {
        const textarea = document.getElementById('composer-text');
        const text = textarea ? textarea.value : '';
        const counter = document.getElementById('char-counter');
        if (counter) counter.textContent = text.length + ' characters';
        updatePreviews();
    }

    function updatePreviews() {
        const textarea = document.getElementById('composer-text');
        const rawText = textarea ? textarea.value.trim() : '';
        const fallbackText = rawText || "Your post copy will render here in real time...";

        const liBody = document.getElementById('preview-linkedin-body');
        const liMedia = document.getElementById('preview-linkedin-media');
        if (liBody) liBody.textContent = rawText ? rawText + "\n\n#SoftwareEngineering #Architecture #Innovation" : fallbackText;
        if (liMedia) {
            if (attachedImageData) {
                liMedia.classList.remove('hidden');
                liMedia.querySelector('img').src = attachedImageData;
            } else {
                liMedia.classList.add('hidden');
            }
        }

        const twBody = document.getElementById('preview-twitter-body');
        const twMedia = document.getElementById('preview-twitter-media');
        if (twBody) twBody.textContent = rawText || "Your tweet will render here in real time...";
        if (twMedia) {
            if (attachedImageData) {
                twMedia.classList.remove('hidden');
                twMedia.querySelector('img').src = attachedImageData;
            } else {
                twMedia.classList.add('hidden');
            }
        }

        const igBody = document.getElementById('preview-instagram-body');
        const igMedia = document.getElementById('preview-instagram-media');
        if (igBody) igBody.textContent = rawText ? rawText + " • #altradits #techlife #engineering" : "Your caption with visual tags will render here...";
        if (igMedia) {
            const img = igMedia.querySelector('img');
            const placeholder = igMedia.querySelector('.placeholder-text');
            if (attachedImageData) {
                if (img) { img.src = attachedImageData; img.classList.remove('hidden'); }
                if (placeholder) placeholder.classList.add('hidden');
            } else {
                if (img) img.classList.add('hidden');
                if (placeholder) placeholder.classList.remove('hidden');
            }
        }

        const devTitle = document.getElementById('preview-devto-title');
        const devBody = document.getElementById('preview-devto-body');
        if (devTitle && devBody) {
            if (rawText) {
                const firstLine = rawText.split('\n')[0];
                devTitle.textContent = firstLine.length > 50 ? firstLine.substring(0, 50) + "..." : firstLine;
                devBody.textContent = rawText;
            } else {
                devTitle.textContent = "Your Technical Article Title";
                devBody.textContent = "Your formatted technical markdown will render here...";
            }
        }

        const btcTitle = document.getElementById('preview-bitcoin-title');
        const btcBody = document.getElementById('preview-bitcoin-body');
        if (btcTitle && btcBody) {
            if (rawText) {
                const firstLine = rawText.split('\n')[0];
                btcTitle.textContent = firstLine.length > 50 ? firstLine.substring(0, 50) + "..." : firstLine;
                btcBody.textContent = rawText;
            } else {
                btcTitle.textContent = "Sound Money and Sovereign Architecture";
                btcBody.textContent = "Your sovereign thought will render here in clean serif publication style...";
            }
        }
    }

    function savePost(status) {
        const textarea = document.getElementById('composer-text');
        const text = textarea ? textarea.value.trim() : '';
        if (!text && !attachedImageData) return;

        const newPost = {
            id: Date.now().toString(),
            text: text,
            platforms: [...selectedPlatforms],
            tone: selectedTone,
            imageData: attachedImageData,
            status: status,
            createdAt: Date.now(),
            scheduledFor: status === 'scheduled' ? Date.now() + (3600 * 1000 * (1 + savedPosts.length)) : null
        };

        savedPosts.unshift(newPost);
        localStorage.setItem('altradits_posts', JSON.stringify(savedPosts));

        if (textarea) textarea.value = '';
        removeAttachedImage();
        handleComposerInput();
        updateCounts();

        switchStudioTab(status === 'draft' ? 'drafts' : 'scheduled');
    }

    function deletePost(id) {
        savedPosts = savedPosts.filter(p => p.id !== id);
        localStorage.setItem('altradits_posts', JSON.stringify(savedPosts));
        updateCounts();
        renderDrafts();
        renderScheduled();
    }

    function editDraft(id) {
        const post = savedPosts.find(p => p.id === id);
        if (!post) return;

        const textarea = document.getElementById('composer-text');
        if (textarea) textarea.value = post.text;
        
        selectedPlatforms = post.platforms || ['linkedin', 'twitter'];
        updatePlatformPills();

        if (post.imageData) {
            attachedImageData = post.imageData;
            const previewContainer = document.getElementById('image-preview-container');
            const previewImg = document.getElementById('attached-image-view');
            if (previewContainer && previewImg) {
                previewImg.src = attachedImageData;
                previewContainer.classList.remove('hidden');
            }
        } else {
            removeAttachedImage();
        }

        deletePost(id);
        switchStudioTab('compose');
        handleComposerInput();
    }

    function renderDrafts() {
        const list = document.getElementById('drafts-list');
        if (!list) return;

        const drafts = savedPosts.filter(p => p.status === 'draft');
        if (drafts.length === 0) {
            list.innerHTML = `
                <div class="al-card p-12 text-center text-[#71717A]">
                    <div class="text-sm font-bold text-[#09090B] mb-1">No saved drafts</div>
                    <p class="text-xs">Create a new post in the Compose tab and save it as a draft.</p>
                </div>
            `;
            return;
        }

        list.innerHTML = drafts.map(p => `
            <div class="al-card p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div class="flex-1">
                    <div class="flex flex-wrap gap-1.5 mb-2">
                        ${p.platforms.map(plat => `<span class="text-[10px] font-bold uppercase px-2 py-0.5 bg-[#F4F4F5] text-[#09090B] rounded">${plat}</span>`).join('')}
                        <span class="text-[10px] text-[#71717A] ml-2">${new Date(p.createdAt).toLocaleDateString()}</span>
                    </div>
                    <p class="text-xs sm:text-sm text-[#09090B] line-clamp-2 leading-relaxed">
                        ${p.text || '<span class="italic text-zinc-400">Attached image draft</span>'}
                    </p>
                </div>
                <div class="flex items-center gap-2 w-full sm:w-auto">
                    <button onclick="editDraft('${p.id}')" class="al-btn-secondary !py-1.5 !px-3 !text-xs flex-1 sm:flex-none">
                        EDIT
                    </button>
                    <button onclick="deletePost('${p.id}')" class="al-btn-secondary !py-1.5 !px-3 !text-xs !text-[#E55252] hover:!border-[#E55252] flex-1 sm:flex-none">
                        DELETE
                    </button>
                </div>
            </div>
        `).join('');
    }

    function renderScheduled() {
        const list = document.getElementById('scheduled-list');
        if (!list) return;

        const scheduled = savedPosts.filter(p => p.status === 'scheduled');
        if (scheduled.length === 0) {
            list.innerHTML = `
                <div class="al-card p-12 text-center text-[#71717A]">
                    <div class="text-sm font-bold text-[#09090B] mb-1">No scheduled posts</div>
                    <p class="text-xs">Schedule your first tailored post from the Compose tab.</p>
                </div>
            `;
            return;
        }

        list.innerHTML = scheduled.map(p => `
            <div class="al-card p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div class="flex-1">
                    <div class="flex items-center gap-2 mb-2">
                        <span class="text-[10px] font-extrabold uppercase px-2 py-0.5 bg-emerald-50 text-[#059669] rounded border border-emerald-200">
                            QUEUED FOR DISTRIBUTION
                        </span>
                        <span class="text-[11px] font-bold text-[#4A6FC3]">
                            ${new Date(p.scheduledFor || p.createdAt).toLocaleString([], { dateStyle: 'short', timeStyle: 'short' })}
                        </span>
                    </div>
                    <div class="flex flex-wrap gap-1.5 mb-2">
                        ${p.platforms.map(plat => `<span class="text-[10px] font-bold uppercase px-2 py-0.5 bg-[#F4F4F5] text-[#09090B] rounded">${plat}</span>`).join('')}
                    </div>
                    <p class="text-xs sm:text-sm text-[#09090B] line-clamp-2 leading-relaxed">
                        ${p.text || '<span class="italic text-zinc-400">Attached image post</span>'}
                    </p>
                </div>
                <div class="flex items-center gap-2 w-full sm:w-auto">
                    <button onclick="deletePost('${p.id}')" class="al-btn-secondary !py-1.5 !px-3 !text-xs !text-[#E55252] hover:!border-[#E55252] flex-1 sm:flex-none">
                        CANCEL
                    </button>
                </div>
            </div>
        `).join('');
    }

    function fetchBtcPrice() {
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(res => res.json())
            .then(data => {
                if (data?.bpi?.USD?.rate_float) {
                    btcPriceUsd = data.bpi.USD.rate_float;
                }
            })
            .catch(err => console.warn('CoinDesk API notice:', err));
    }

    function openLightningModal(pkgName, priceStr) {
        const modal = document.getElementById('lightning-modal');
        const pkgNameEl = document.getElementById('modal-pkg-name');
        const satsAmountEl = document.getElementById('modal-sats-amount');
        const usdEquivEl = document.getElementById('modal-usd-equiv');

        const usd = parseFloat(priceStr.replace('$', '').replace(',', ''));
        const sats = Math.round((usd / btcPriceUsd) * 100000000);

        if (pkgNameEl) pkgNameEl.textContent = pkgName;
        if (satsAmountEl) satsAmountEl.textContent = sats.toLocaleString();
        if (usdEquivEl) usdEquivEl.textContent = `≈ ${priceStr} USD (Live Rate: $${Math.round(btcPriceUsd).toLocaleString()} / BTC)`;

        if (modal) {
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        }
    }

    function closeLightningModal() {
        const modal = document.getElementById('lightning-modal');
        if (modal) {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }
    }

    function copyLnurlAddress() {
        const btn = document.getElementById('btn-copy-lnurl');
        navigator.clipboard.writeText(lnurlAddress).then(() => {
            if (btn) {
                const originalText = btn.textContent;
                btn.textContent = "LNURL COPIED!";
                setTimeout(() => {
                    btn.textContent = originalText;
                }, 2000);
            }
        }).catch(() => {
            if (btn) btn.textContent = "COPIED TO CLIPBOARD";
        });
    }

    document.addEventListener('DOMContentLoaded', function() {
        fetchBtcPrice();
        updateCounts();
        updatePlatformPills();
        updatePreviews();
    });
</script>

<?php
get_footer();
