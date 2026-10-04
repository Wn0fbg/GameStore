<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function view_block_news_box() {
    ob_start();

    echo '<div '. get_block_wrapper_attributes() . '>';
        if (has_post_thumbnail()) {
        echo '<h3>' . get_the_title() . '</h3>';
        echo '<div class="news-thumbnail">';
        echo '<img 
                src="'.get_the_post_thumbnail_url().'" 
                alt="'.get_the_title().'" 
                class="blur-image"
                />';
        echo '<img 
                src="'.get_the_post_thumbnail_url().'" 
                alt="'.get_the_title().'" 
                class="original-image"
                />';
        echo '</div>';
        }
        echo '<div class="news-excert">'.get_the_excerpt().'</div>';
        echo '<a href="'.get_the_permalink().'" 
            class="read-more">
                Open the post
            </a>';
    echo '</div>';

    return ob_get_clean();    
}
