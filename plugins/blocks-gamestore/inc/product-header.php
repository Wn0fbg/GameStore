<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function view_block_product_header($attributes) {
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
                echo '<h1 class="games-header-title">' . $attributes['title'] . '</h1>';
            }

            if ($attributes['styleType'] == 'archive') {
                $terms_news = get_terms(array(
                    'taxonomy' => 'product_genre',
                    // Если в жанре нету продуктов,то жанр не будет отображаться
                    // false (все жанры показываются,даже те где нету продуктов)
                    'hide_empty' => false,
                ));

                if (!empty($terms_news) && !is_wp_error($terms_news)) {
                    echo '<div class="games-categories">';
                        foreach($terms_news as $term) {                        
                            echo '<div class="games-cat-item">';
                                echo '<a href="' . esc_url(get_term_link($term)) . '">';
                                    echo esc_html($term->name);
                                echo '</a>';
                            echo '</div>';
                        }
                    echo '</div>';
                }
            } else {
               if(!empty($attributes['links'])) {
                echo '<div class="cart-link">';
                    foreach($attributes['links'] as $link) {
                        echo '<div class="cart-link-item">';
                            echo '<a href="'.$link['url'].'">';
                                echo $link['anchor'];
                            echo '</a>';
                        echo '</div>';
                    }
                echo '</div>';
               }
            }
        echo '</div>';
    echo '</div>';

    wp_reset_postdata();

    return ob_get_clean();
}