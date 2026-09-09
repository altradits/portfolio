<?php
/**
 * The template for displaying the footer
 */
?>
<footer class="py-12 px-6 border-t border-zinc-900 bg-zinc-950">
    <div class="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
        <div class="flex items-center space-x-2">
            <img src="<?php echo function_exists('get_template_directory_uri') ? get_template_directory_uri() . '/assets/favicon.svg' : 'assets/favicon.svg'; ?>" alt="" class="w-6 h-6 object-contain" />
            <span>Altradits Engineering Syndicate</span>
        </div>
        <div>© <?php echo date('Y'); ?> Stanley Chege Thuita. All rights reserved.</div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
