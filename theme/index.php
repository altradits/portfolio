<?php
/**
 * The main template file for Altradits Theme
 */
get_header();
?>

<main id="primary" class="site-main">
    <section class="relative min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center px-6 overflow-hidden">
        <!-- Background Ambient Glow -->
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08)_0%,transparent_70%)] pointer-events-none"></div>
        
        <div class="relative z-10 max-w-4xl mx-auto text-center mt-20">
            <div class="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Open Source Syndicate • Built by Stanley Chege Thuita</span>
            </div>
            
            <h1 class="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                Engineering the <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">Limitless Network</span>.
            </h1>
            
            <p class="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                The ultimate personal lifestyle ecosystem for remote earnings, extreme endurance challenges, global tech connections, and Bitcoin freedom.
            </p>
        </div>
    </section>
</main>

<?php
get_footer();
