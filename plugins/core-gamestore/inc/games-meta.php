<?php

add_filter('woocommerce_product_data_tabs', 'add_gamestore_tab');
function add_gamestore_tab($tabs) {
    $tabs['gamestore'] = array(
        'label' => 'GameStore',
        'target' => 'gamestore_product_data',
        'class' => array('show_if_simple', 'show_if_variable'),
        'priority' => 21 
    );
    return $tabs;
}

add_action('woocommerce_product_data_panels', 'add_gamestore_tab_content');
function add_gamestore_tab_content() {
    global $post;
    echo '<div id="gamestore_product_data" class="panel woocommerce_options_panel">';
    echo '<div class="options_group">';
    
    woocommerce_wp_text_input(array(
        'id' => '_gamestore_publisher',
        'label' => __('Publisher', 'core-gamestore'),
        'desc_tip' => true,
        'placeholder' => 'e.g. Ubisoft'
    ));

    woocommerce_wp_text_input(array(
        'id' => '_gamestore_single_player',
        'label' => __('Enter the Single Player value.', 'core-gamestore'),
        'desc_tip' => true,
        'placeholder' => 'e.g. Yes'
    ));

    woocommerce_wp_text_input(array(
        'id' => '_gamestore_release_date',
        'label' => __('Release Date', 'core-gamestore'),
        'description' => __('Enter the release date of the game.', 'core-gamestore'),
        'desc_tip' => false,
        'type' => 'date'
    ));

    echo '<p class="form-field"><strong><label>'.__('Platforms', 'core-gamestore').'</label></strong>';
    foreach(array('Xbox', 'PC', 'PlayStation') as $platform) {
        woocommerce_wp_checkbox(array(
            'id' => '_platform_'.strtolower($platform),
            'label' => $platform
        ));
    }
    echo '</p>';

    echo '<p class="form-field _gamestore_game_cover_field">';
    echo '<label for="_gamestore_game_cover">' . __('Game Cover', 'core-gamestore') . '</label>';
    echo '<span style="display:inline-block; width:100%;">';
    echo '<input type="text" class="short" name="_gamestore_game_cover" id="_gamestore_game_cover" value="' . esc_attr(get_post_meta($post->ID, '_gamestore_game_cover', true)) . '" style="width: 60%;" />';
    echo '<button type="button" class="button upload_game_cover_button" style="margin-left: 5px;">Upload</button>';
    echo '<button type="button" class="button remove_game_cover_button" style="display:none; margin-left: 5px;">Remove</button>';
    echo '</span>';
    
    $image_url = get_post_meta($post->ID, '_gamestore_game_cover', true);
    if (!empty($image_url)) {
        echo '<div class="game_cover_preview" style="margin-top:10px; margin-left:150px;">';
        echo '<img src="' . esc_url($image_url) . '" style="max-width:100px;max-height:100px;" />';
        echo '</div>';
    }
    echo '</p>';
    
    echo '</div></div>';
}

add_action('admin_footer', 'gamestore_image_upload_js');
function gamestore_image_upload_js() {
    ?>
    <script>
    jQuery(function($) {
        if (!$('#gamestore_product_data').length) return;
        
        var file_frame;
        
        $('.upload_game_cover_button').on('click', function(e) {
            e.preventDefault();
            var $btn = $(this);
            var $field = $btn.closest('.form-field').find('#_gamestore_game_cover');
            var $preview = $btn.closest('.form-field').find('.game_cover_preview');
            var $removeBtn = $btn.closest('.form-field').find('.remove_game_cover_button');
            
            if (file_frame) {
                file_frame.open();
                return;
            }
            
            file_frame = wp.media({
                title: 'Select Game Cover',
                button: { text: 'Set Image' },
                multiple: false
            });
            
            file_frame.on('select', function() {
                var url = file_frame.state().get('selection').first().toJSON().url;
                $field.val(url);
                
                if ($preview.length) {
                    $preview.html('<img src="'+url+'" style="max-width:100px;max-height:100px;" />');
                } else {
                    $btn.closest('.form-field').append('<div class="game_cover_preview" style="margin-top:10px; margin-left:150px;"><img src="'+url+'" style="max-width:100px;max-height:100px;" /></div>');
                }
                $removeBtn.show();
            });
            
            file_frame.open();
        });
        
        $('.remove_game_cover_button').on('click', function() {
            var $btn = $(this);
            $btn.closest('.form-field').find('#_gamestore_game_cover').val('');
            $btn.closest('.form-field').find('.game_cover_preview').remove();
            $btn.hide();
        });
        
        $('#_gamestore_game_cover').each(function() {
            if ($(this).val()) {
                $(this).closest('.form-field').find('.remove_game_cover_button').show();
            }
        });
    });
    </script>
    <?php
}

add_action('woocommerce_process_product_meta', 'save_gamestore_tab_fields');
function save_gamestore_tab_fields($post_id) {
    if (isset($_POST['_gamestore_publisher'])) {
        update_post_meta($post_id, '_gamestore_publisher', sanitize_text_field($_POST['_gamestore_publisher']));
    }

    if (isset($_POST['_gamestore_single_player'])) {
        update_post_meta($post_id, '_gamestore_single_player', sanitize_text_field($_POST['_gamestore_single_player']));
    }

    if (isset($_POST['_gamestore_release_date'])) {
        update_post_meta($post_id, '_gamestore_release_date', sanitize_text_field($_POST['_gamestore_release_date']));
    }

    foreach(array('Xbox', 'PC', 'PlayStation') as $platform) {
        $key = '_platform_'.strtolower($platform);
        update_post_meta($post_id, $key, isset($_POST[$key]) ? 'yes' : 'no');
    }

    if (isset($_POST['_gamestore_game_cover'])) {
        update_post_meta($post_id, '_gamestore_game_cover', esc_url_raw($_POST['_gamestore_game_cover']));
    }
}

function woo_custom_description_metabox() {
    add_meta_box(
        'woo_custom_description_metabox',
        __('Game Description', 'core-gamestore'),
        'woo_custom_description_metabox_content',
        'product',
        'normal',
        'high'
    );
}

function woo_custom_description_metabox_content($post) {
    $content = get_post_meta(
        $post->ID, 
        '_gamestore_full_description', 
        true
    );
    wp_editor(
        $content, 
        '_gamestore_full_description', 
        array('textarea_name' => '_gamestore_full_description')
    );
}
add_action('add_meta_boxes', 'woo_custom_description_metabox');

function save_cuctom_description($post_id) {
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) return;
    if (!isset($_POST['_gamestore_full_description'])) return;
    if (!current_user_can('edit_post', $post_id)) return;

    if (isset($_POST['_gamestore_full_description'])) {
        update_post_meta(
            $post_id, 
            '_gamestore_full_description', 
            wp_kses_post($_POST['_gamestore_full_description'])
        );
    }

}
add_action('save_post', 'save_cuctom_description');
