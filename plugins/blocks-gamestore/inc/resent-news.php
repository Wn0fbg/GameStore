<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function view_block_resent_news($attributes) {
    $args = array(
        'post_type' => 'news',
        'post_per_page' => $attributes['count'],
        'orderby' => 'date',
        'order' => 'DESC'
    );
    $news_query = new WP_Query( $args );
    $image_bg = ($attributes['image']) ? 'style="background-image: url(' .$attributes['image']. ')"' : '';

    ob_start();

    echo '<div '. get_block_wrapper_attributes() . $image_bg . '>';
    if ($news_query -> have_posts()) {
        if ($attributes['title']) {
            echo '<h2>' . $attributes['title'] . '</h2>';
        }
        if ($attributes['description']) {
            echo '<p>' . $attributes['description'] . '</p>';
        }
        echo '<div class="recent-news wrapper">';
        while ($news_query -> have_posts()) {
            $news_query -> the_post();
            echo '<div class="news-item">';
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
        } 
        echo '</div>';
    } else {
            echo '<p>No recent news found.</p>';
    }
    echo '</div>';

    wp_reset_postdata();

    return ob_get_clean();
}