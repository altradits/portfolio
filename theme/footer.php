<?php
/**
 * The template for displaying the footer
 */
?>
<footer class="py-12 px-4 sm:px-8 lg:px-12 border-t border-zinc-200 bg-white w-full">
    <div class="max-w-7xl 2xl:max-w-[1600px] mx-auto flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
        <div class="flex items-center space-x-2">
            <img src="<?php echo function_exists('get_template_directory_uri') ? get_template_directory_uri() . '/assets/favicon.svg' : 'assets/favicon.svg'; ?>" alt="" class="w-6 h-6 object-contain" />
            <span class="font-semibold text-zinc-700">Altradits Engineering Syndicate</span>
        </div>
        <div>© <?php echo date('Y'); ?> Stanley Chege Thuita. All rights reserved.</div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
