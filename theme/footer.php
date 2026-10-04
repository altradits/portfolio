<?php
/**
 * The template for displaying the footer
 */
?>
<footer class="bg-[#09090B] text-white py-16 border-t border-zinc-800">
    <div class="max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
            <div class="col-span-2 lg:col-span-2">
                <a href="<?php echo function_exists('home_url') ? esc_url( home_url( '/' ) ) : './'; ?>" class="inline-block mb-4">
                    <img src="<?php echo function_exists('get_template_directory_uri') ? get_template_directory_uri() . '/assets/logo.svg' : 'theme/assets/logo.svg'; ?>" 
                         onerror="this.onerror=null; this.src='assets/logo.svg';" 
                         alt="Altradits" 
                         class="h-8 w-auto brightness-0 invert">
                </a>
                <p class="text-xs text-zinc-400 max-w-sm leading-relaxed">
                    The precision social media automation and multi-channel distribution syndicate. Inspire, educate, and entertain across all accounts while you live life beyond your desk.
                </p>
            </div>
            
            <div>
                <div class="text-xs font-bold uppercase tracking-wider text-white mb-3">Product</div>
                <ul class="space-y-2 text-xs text-zinc-400">
                    <li><a href="#how-it-works" class="hover:text-white transition-colors">How It Works</a></li>
                    <li><a href="#channels" class="hover:text-white transition-colors">Channels</a></li>
                    <li><a href="#pricing" class="hover:text-white transition-colors">Pricing</a></li>
                    <li><a href="#studio" class="hover:text-white transition-colors">Studio</a></li>
                </ul>
            </div>

            <div>
                <div class="text-xs font-bold uppercase tracking-wider text-white mb-3">Distribution</div>
                <ul class="space-y-2 text-xs text-zinc-400">
                    <li><a href="#channels" class="hover:text-white transition-colors">LinkedIn Rails</a></li>
                    <li><a href="#channels" class="hover:text-white transition-colors">X / Twitter API</a></li>
                    <li><a href="#channels" class="hover:text-white transition-colors">Instagram Engine</a></li>
                    <li><a href="#channels" class="hover:text-white transition-colors">Bitcoin Sound Money</a></li>
                </ul>
            </div>

            <div>
                <div class="text-xs font-bold uppercase tracking-wider text-white mb-3">Company</div>
                <ul class="space-y-2 text-xs text-zinc-400">
                    <li><a href="https://wa.me/254707172370" target="_blank" class="hover:text-white transition-colors">Direct Connect</a></li>
                    <li><a href="BRAND_IDENTITY_GUIDELINES.md" class="hover:text-white transition-colors">Brand Guidelines</a></li>
                    <li><a href="#" class="hover:text-white transition-colors">Privacy Policy</a></li>
                    <li><a href="#" class="hover:text-white transition-colors">Terms of Service</a></li>
                </ul>
            </div>
        </div>

        <div class="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
            <div>
                © <?php echo date('Y'); ?> Altradits Engineering Syndicate. Founded by Stanley Chege Thuita. All rights reserved.
            </div>
            <div class="flex gap-4">
                <a href="#studio" class="text-zinc-400 hover:text-white transition-colors">Launch Studio</a>
                <span>•</span>
                <a href="#pricing" class="text-zinc-400 hover:text-white transition-colors">Lightning Billing</a>
            </div>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
