<?php
/**
 * Consoles — таксономия для товаров WooCommerce
 * Игры = товары, Консоли = таксономия product_console
 * Метаполя консоли: картинка, наличие (stock)
 */

if (!defined('ABSPATH')) exit;

add_action('init', 'register_gamestore_console_taxonomy');
function register_gamestore_console_taxonomy() {
    register_taxonomy('product_console', 'product', array(
        'labels' => array(
            'name'              => __('Consoles', 'core-gamestore'),
            'singular_name'     => __('Console', 'core-gamestore'),
            'search_items'      => __('Search Consoles', 'core-gamestore'),
            'all_items'         => __('All Consoles', 'core-gamestore'),
            'parent_item'       => __('Parent Console', 'core-gamestore'),
            'parent_item_colon' => __('Parent Console:', 'core-gamestore'),
            'edit_item'         => __('Edit Console', 'core-gamestore'),
            'update_item'       => __('Update Console', 'core-gamestore'),
            'add_new_item'      => __('Add New Console', 'core-gamestore'),
            'new_item_name'     => __('New Console Name', 'core-gamestore'),
            'menu_name'         => __('Consoles', 'core-gamestore'),
        ),
        'hierarchical'      => true,
        'public'            => true,
        'show_ui'           => true,
        'show_admin_column' => false,
        'show_in_rest'      => true,
        'rewrite'           => array('slug' => 'console'),
    ));
}

/* ============================================================
 * МЕТАПОЛЯ КОНСОЛИ (картинка + наличие)
 * ============================================================ */

add_action('product_console_add_form_fields', 'gamestore_console_add_form_fields');
function gamestore_console_add_form_fields() {
    ?>
    <div class="form-field">
        <label><?php _e('Console Cover', 'core-gamestore'); ?></label>
        <input type="hidden" name="console_cover" value="">
        <div id="console-cover-preview" style="margin:10px 0;"></div>
        <button type="button" class="button" onclick="gamestoreConsoleMediaUpload(this)">Upload</button>
        <button type="button" class="button" onclick="gamestoreConsoleRemoveCover(this)" style="display:none;">Remove</button>
    </div>

    <div class="form-field">
        <label for="console_stock"><?php _e('Stock', 'core-gamestore'); ?></label>
        <select name="console_stock" id="console_stock">
            <option value="instock"><?php _e('In stock', 'core-gamestore'); ?></option>
            <option value="outofstock"><?php _e('Out of stock', 'core-gamestore'); ?></option>
            <option value="preorder"><?php _e('Pre-order', 'core-gamestore'); ?></option>
        </select>
    </div>
    <?php
}

add_action('product_console_edit_form_fields', 'gamestore_console_edit_form_fields');
function gamestore_console_edit_form_fields($term) {
    $cover_id  = get_term_meta($term->term_id, 'console_cover', true);
    $cover_url = $cover_id ? wp_get_attachment_url($cover_id) : '';
    $stock     = get_term_meta($term->term_id, 'console_stock', true);
    if (!$stock) $stock = 'instock';
    ?>
    <tr class="form-field">
        <th scope="row"><label><?php _e('Console Cover', 'core-gamestore'); ?></label></th>
        <td>
            <input type="hidden" name="console_cover" value="<?php echo esc_attr($cover_id); ?>">
            <div id="console-cover-preview" style="margin:10px 0;">
                <?php if ($cover_url): ?>
                    <img src="<?php echo esc_url($cover_url); ?>" style="max-width:150px;">
                <?php endif; ?>
            </div>
            <button type="button" class="button" onclick="gamestoreConsoleMediaUpload(this)">Upload</button>
            <button type="button" class="button" onclick="gamestoreConsoleRemoveCover(this)" <?php echo $cover_id ? '' : 'style="display:none;"'; ?>>Remove</button>
        </td>
    </tr>

    <tr class="form-field">
        <th scope="row"><label for="console_stock"><?php _e('Stock', 'core-gamestore'); ?></label></th>
        <td>
            <select name="console_stock" id="console_stock">
                <option value="instock"    <?php selected($stock, 'instock'); ?>><?php _e('In stock', 'core-gamestore'); ?></option>
                <option value="outofstock" <?php selected($stock, 'outofstock'); ?>><?php _e('Out of stock', 'core-gamestore'); ?></option>
                <option value="preorder"   <?php selected($stock, 'preorder'); ?>><?php _e('Pre-order', 'core-gamestore'); ?></option>
            </select>
        </td>
    </tr>
    <?php
}

add_action('created_product_console', 'gamestore_console_save_term_meta');
add_action('edited_product_console', 'gamestore_console_save_term_meta');
function gamestore_console_save_term_meta($term_id) {
    if (isset($_POST['console_cover'])) {
        $cover_id = (int) $_POST['console_cover'];
        if ($cover_id) {
            update_term_meta($term_id, 'console_cover', $cover_id);
        } else {
            delete_term_meta($term_id, 'console_cover');
        }
    }

    if (isset($_POST['console_stock'])) {
        $allowed = array('instock', 'outofstock', 'preorder');
        $stock   = sanitize_key($_POST['console_stock']);
        if (in_array($stock, $allowed, true)) {
            update_term_meta($term_id, 'console_stock', $stock);
        } else {
            delete_term_meta($term_id, 'console_stock');
        }
    }
}

add_action('admin_enqueue_scripts', 'gamestore_console_tax_admin_assets');
function gamestore_console_tax_admin_assets() {
    $screen = get_current_screen();
    if (!$screen || $screen->taxonomy !== 'product_console') return;

    wp_enqueue_media();
    ?>
    <script>
    function gamestoreConsoleMediaUpload(btn) {
        var wrap = btn.closest('.form-field') || btn.closest('td');
        var up = wp.media({
            title: 'Select Console Cover',
            button: { text: 'Set Image' },
            multiple: false
        });
        up.on('select', function() {
            var att = up.state().get('selection').first().toJSON();
            wrap.querySelector('[name=console_cover]').value = att.id;
            wrap.querySelector('#console-cover-preview').innerHTML =
                '<img src="'+att.url+'" style="max-width:150px;">';
            var btns = wrap.querySelectorAll('.button');
            btns[btns.length-1].style.display = '';
        });
        up.open();
    }

    function gamestoreConsoleRemoveCover(btn) {
        var wrap = btn.closest('.form-field') || btn.closest('td');
        wrap.querySelector('[name=console_cover]').value = '';
        wrap.querySelector('#console-cover-preview').innerHTML = '';
        btn.style.display = 'none';
    }
    </script>
    <?php
}

/* ============================================================
 * КОЛОНКИ В СПИСКЕ ТЕРМИНОВ
 * Убираем «Количество» (count), добавляем «Cover» и «Stock»
 * ============================================================ */
add_filter('manage_edit-product_console_columns', 'gamestore_console_columns');
function gamestore_console_columns($columns) {
    // убираем колонку с количеством
    if (isset($columns['posts'])) {
        unset($columns['posts']);
    }

    $new = array();
    foreach ($columns as $key => $label) {
        $new[$key] = $label;
        if ($key === 'name') {
            $new['console_cover'] = __('Cover', 'core-gamestore');
            $new['console_stock'] = __('Stock', 'core-gamestore');
        }
    }
    return $new;
}

add_filter('manage_product_console_custom_column', 'gamestore_console_custom_column_content', 10, 3);
function gamestore_console_custom_column_content($content, $column_name, $term_id) {
    if ($column_name === 'console_cover') {
        $cover_id = get_term_meta($term_id, 'console_cover', true);
        if ($cover_id) {
            $url = wp_get_attachment_url($cover_id);
            if ($url) {
                return '<img src="' . esc_url($url) . '" style="max-width:60px;height:auto;">';
            }
        }
        return '—';
    }

    if ($column_name === 'console_stock') {
        $stock = get_term_meta($term_id, 'console_stock', true);
        if (!$stock) $stock = 'instock';

        $labels = array(
            'instock'    => __('In stock', 'core-gamestore'),
            'outofstock' => __('Out of stock', 'core-gamestore'),
            'preorder'   => __('Pre-order', 'core-gamestore'),
        );
        $colors = array(
            'instock'    => '#46b450',
            'outofstock' => '#dc3232',
            'preorder'   => '#ffb900',
        );

        $label = isset($labels[$stock]) ? $labels[$stock] : $stock;
        $color = isset($colors[$stock]) ? $colors[$stock] : '#666';

        return '<span style="display:inline-block;padding:2px 8px;border-radius:3px;color:#fff;background:' . esc_attr($color) . ';">'
            . esc_html($label) . '</span>';
    }

    return $content;
}