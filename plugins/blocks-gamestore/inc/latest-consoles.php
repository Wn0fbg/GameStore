<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function view_block_latest_consoles( $attributes ) {
	$count = ! empty( $attributes['count'] ) ? (int) $attributes['count'] : 8;

	$query = new WP_Query( array(
		'post_type'      => 'product',
		'post_status'    => 'publish',
		'posts_per_page' => $count,
		'orderby'        => 'date',
		'order'          => 'DESC',
		'tax_query'      => array(
			array(
				'taxonomy' => 'product_cat',
				'field'    => 'slug',
				'terms'    => 'consoles', //  слаг категории
			),
		),
	) );

	$image_bg = ! empty( $attributes['image'] )
		? 'style="background-image: url(' . esc_url( $attributes['image'] ) . ')"'
		: '';

	ob_start();
	echo '<div ' . get_block_wrapper_attributes() . ' ' . $image_bg . '>';

	if ( ! empty( $attributes['title'] ) ) {
		echo '<h2>' . esc_html( $attributes['title'] ) . '</h2>';
	}
	if ( ! empty( $attributes['description'] ) ) {
		echo '<p>' . esc_html( $attributes['description'] ) . '</p>';
	}

	if ( $query->have_posts() ) {
		echo '<div class="consoles-list">';

		while ( $query->have_posts() ) {
			$query->the_post();
			$product = wc_get_product( get_the_ID() );

			if ( ! $product ) {
				continue;
			}

			$image_url = get_the_post_thumbnail_url( get_the_ID(), 'medium' );
			$price     = $product->get_price_html();
			$stock     = $product->is_in_stock();

			echo '<div class="console-item">';
				echo '<a href="' . esc_url( get_permalink() ) . '">';

					if ( $image_url ) {
						echo '<div class="console-image">';
							echo '<img src="' . esc_url( $image_url ) . '" alt="' . esc_attr( get_the_title() ) . '" class="console-image">';
						echo '</div>';
					}

					echo '<a 
							href="' . esc_url( get_permalink() ) . '" 
							class="console-title"
						>
							'. esc_html( get_the_title() ) . '
						</a>';
				echo '</a>';
			echo '</div>';
		}

		echo '</div>';
		wp_reset_postdata();
	} else {
		echo '<p>' . esc_html__( 'No consoles found.', 'blocks-gamestore' ) . '</p>';
	}

	echo '</div>';

	return ob_get_clean();
}