<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function view_block_subscribe($attributes) {
    $image_bg = ($attributes['image']) ? 'style="background-image: url(' .$attributes['image']. ')"' : '';

    ob_start();
        echo '<div '. get_block_wrapper_attributes(array(
            'class' => 'alignfull'
        )) . $image_bg . '>';
            echo '<div class="subscribe-inner wrapper">';
                echo '<h2 class="subscribe-title">'.
                    $attributes['title'].
                '</h2>';
                echo '<p class="subscribe-description">'
                    .$attributes['description'].
                '</p>';
                echo '<div class="subscribe-shortcode">'
                    .do_shortcode($attributes['shortcode']).
                '</div>';
            echo '</div>';
        echo '</div>';
    
    return ob_get_clean();
}