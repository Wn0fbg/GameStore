<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function view_block_latest_consoles( $attributes ) {
	$terms = get_terms( array(
		'taxonomy'   => 'product_console',
		'hide_empty' => false, 
		'number'     => ! empty( $attributes['count'] ) ? (int) $attributes['count'] : 8,
		'orderby'    => 'name',
		'order'      => 'ASC',
	) );

	$image_bg = ! empty( $attributes['image'] )
		? 'style="background-image: url(' . esc_url( $attributes['image'] ) . ')"'
		: '';

	ob_start();
	echo '<div ' . get_block_wrapper_attributes() . ' ' . $image_bg . '>';

	if ( $attributes['title'] ) {
		echo '<h2>' . esc_html( $attributes['title'] ) . '</h2>';
	}
	if ( $attributes['description'] ) {
		echo '<p>' . esc_html( $attributes['description'] ) . '</p>';
	}

	if ( ! is_wp_error( $terms ) && ! empty( $terms ) ) {
		echo '<div class="consoles-list">';

		foreach ( $terms as $term ) {
			$cover_id  = get_term_meta( $term->term_id, 'console_cover', true );
			$cover_url = $cover_id ? wp_get_attachment_url( $cover_id ) : '';
			$stock     = get_term_meta( $term->term_id, 'console_stock', true );

			echo '<div class="console-item">';
				echo '<a href="' . esc_url( get_term_link( $term ) ) . '">';

					if ( $cover_url ) {
						echo '<div class="console-image">';
							echo '<img src="' . esc_url( $cover_url ) . '" alt="' . esc_attr( $term->name ) . '">';
						echo '</div>';
					}

					echo '<h3 class="console-title">' . esc_html( $term->name ) . '</h3>';

					if ( $stock ) {
						$labels = array(
							'instock'    => 'In stock',
							'outofstock' => 'Out of stock',
							'preorder'   => 'Pre-order',
						);
						$label = $labels[ $stock ] ?? $stock;
						echo '<span class="console-stock stock-' . esc_attr( $stock ) . '">'
							. esc_html( $label ) .
						'</span>';
					}

				echo '</a>';
			echo '</div>';
		}

		echo '</div>';
	} else {
		echo '<p>' . esc_html__( 'No consoles found.', 'blocks-gamestore' ) . '</p>';
	}

	echo '</div>';

	return ob_get_clean();
}