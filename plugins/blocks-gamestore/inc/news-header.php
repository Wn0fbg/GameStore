<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function view_block_news_header($attributes) {
    $args = array(
        'post_type' => 'news',
        'posts_per_page' => $attributes['count'],
        'orderby' => 'date',
        'order' => 'DESC'
    );
    $image_bg = ($attributes['image']) ? 'style="background-image: url(' . $attributes['image'] . ')"' : '';

    ob_start();

    echo '<div ' . get_block_wrapper_attributes() . $image_bg . '>';
        echo '<div class="wrapper">';
            if ($attributes['title']) {
                echo '<h1 class="news-header-title">' . $attributes['title'] . '</h1>';
            }
            if ($attributes['description']) {
                echo '<p class="news-header-description">' . $attributes['description'] . '</p>';
            } 

            $terms_news = get_terms(array(
                'taxonomy' => 'news_category',
                'hide_empty' => false,
            ));

            if (!empty($terms_news) && !is_wp_error($terms_news)) {
                echo '<div class="news-categories">';
                    foreach($terms_news as $term) {
                        $icon_id = get_term_meta($term->term_id, 'icon', true);
                        $icon_url = $icon_id ? wp_get_attachment_url($icon_id) : '';
                        
                        echo '<div class="news-cat-item">';
                            echo '<a href="' . esc_url(get_term_link($term)) . '">';
                                echo esc_html($term->name);
                            echo '</a>';
                                if ($icon_url) {
                                echo '<img src="' . esc_url($icon_url) . '" alt="' . esc_attr($term->name) . '">';
                            }
                        echo '</div>';
                    }
                echo '</div>';
            }
        echo '</div>';
    echo '</div>';

    wp_reset_postdata();

    return ob_get_clean();
}
