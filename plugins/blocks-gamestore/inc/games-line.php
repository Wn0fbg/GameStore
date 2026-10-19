<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function view_block_games_line($attributes) {
	$count = ! empty( $attributes['count'] ) ? (int) $attributes['count'] : 8;


    $args = array(
        'post_type'      => 'product',
		'post_status'    => 'publish',
		'posts_per_page' => $count,
		'orderby'        => 'date',
		'order'          => 'DESC',
		'tax_query'      => array(
			array(
				'taxonomy' => 'product_cat',
				'field'    => 'slug',
				'terms'    => 'games', //  слаг категории
			),
		),
    );
    $games_query = new WP_Query($args);

    ob_start();

    echo '<div ' . get_block_wrapper_attributes() . '>';
    if ($games_query->have_posts()) {
        echo '<div class="swiper-container gamestore-line-container"><div class="swiper-wrapper">';
        while ($games_query->have_posts()) {
            $games_query->the_post();
            $product = wc_get_product(get_the_ID());
            echo '<div class="swiper-slide game-item">';
            echo '<a href="' . get_the_permalink() . '">';
            echo $product->get_image('full');
            echo '</a>';
            echo '</div>';
        }
        echo '</div></div>';
    }
    echo '</div>';

    wp_reset_postdata();

    return ob_get_clean();
}