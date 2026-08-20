<?php

// 1. Field for adding
function news_category_add_meta_field() {
    ?>
    <div class="form-field">
        <label>Icon</label>
        <input type="hidden" name="icon" value="">
        <div id="icon-preview"></div>
        <button type="button" class="button" onclick="mediaUpload(this)">Upload</button>
        <button type="button" class="button" onclick="removeIcon(this)" style="display:none">Remove</button>
    </div>
    <?php
}

// 2. Field for editing
function news_category_edit_meta_field($term) {
    $icon_id = get_term_meta($term->term_id, 'icon', true);
    $icon_url = $icon_id ? wp_get_attachment_url($icon_id) : '';
    ?>
    <tr class="form-field">
        <th scope="row"><label>Icon</label></th>
        <td>
            <input type="hidden" style="margin-bottom: 14px" name="icon" value="<?=$icon_id?>">
            <div id="icon-preview">
                <?=$icon_url ? "<img src='$icon_url' style='max-width:100px'>" : ''?>
            </div>
            <button type="button" class="button" onclick="mediaUpload(this)">Upload</button>
            <button type="button" class="button" onclick="removeIcon(this)" <?=$icon_id ? '' : 'style=display:none'?>>Remove</button>
        </td>
    </tr>
    <?php
}

// 3. Save
function save_news_category_meta($term_id) {
    $icon_id = isset($_POST['icon']) ? (int)$_POST['icon'] : 0;
    $icon_id ? update_term_meta($term_id, 'icon', $icon_id) : delete_term_meta($term_id, 'icon');
}

// 4. Media uploader
function enqueue_media_uploader() {
    if(get_current_screen()->taxonomy != 'news_category') return;
    wp_enqueue_media();
    ?>
    <script>
    function mediaUpload(btn) {
        var wrap = btn.closest('.form-field') || btn.closest('td');
        var up = wp.media({title:'Select', button:{text:'Select'}, multiple:false});
        up.on('select', function() {
            var att = up.state().get('selection').first().toJSON();
            wrap.querySelector('[name=icon]').value = att.id;
            var preview = wrap.querySelector('#icon-preview');
            preview.innerHTML = "<img src='"+att.url+"' style='max-width:100px'>";
            var btns = wrap.querySelectorAll('.button');
            btns[btns.length-1].style.display = '';
        });
        up.open();
    }
    function removeIcon(btn) {
        var wrap = btn.closest('.form-field') || btn.closest('td');
        wrap.querySelector('[name=icon]').value = '';
        wrap.querySelector('#icon-preview').innerHTML = '';
        btn.style.display = 'none';
    }
    </script>
    <?php
}

function news_category_add_icon_column($columns) {
    $columns['news_category_icon'] = __('Icon', 'text_domain');
    return $columns;
}
add_filter('manage_edit-news_category_columns', 'news_category_add_icon_column');

function news_category_icon_column_content($content, $column_name, $term_id) {
    if ($column_name !== 'news_category_icon') {
        return $content;
    }
    
    $icon_id = get_term_meta($term_id, 'icon', true);
    
    if ($icon_id) {
        $icon_url = wp_get_attachment_url($icon_id);
        if ($icon_url) {
            $content = '<img 
                src="'. esc_url($icon_url) .'" 
                alt="" 
                style="max-width: 50px; height: auto;"
            />';
        }
    }
    
    return $content;
}
add_filter('manage_news_category_custom_column', 'news_category_icon_column_content', 10, 3);

// Hooks
add_action('news_category_add_form_fields', 'news_category_add_meta_field');
add_action('news_category_edit_form_fields', 'news_category_edit_meta_field');
add_action('created_news_category', 'save_news_category_meta');
add_action('edited_news_category', 'save_news_category_meta');
add_action('admin_enqueue_scripts', 'enqueue_media_uploader');