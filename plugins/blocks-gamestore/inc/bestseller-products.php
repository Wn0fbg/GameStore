<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function view_block_bestseller_products($attributes) {
    if (isset($attributes['productType'])) {
        $product_type = $attributes['productType'] ?? '';
    }
    $count        = $attributes['count'] ?? 10;
    $slider_games = [];

    if ($product_type === 'crosseller') {
        $cross_sell_ids = [];
        $cart = (function_exists('WC') && WC()->cart) ? WC()->cart->get_cart() : [];

        foreach ($cart as $cart_item) {
            $product_id = $cart_item['product_id'] ?? 0;
            if (!$product_id) continue;

            $ids = get_post_meta($product_id, '_crosssell_ids', true);
            if (empty($ids)) continue;

            if (is_string($ids)) {
                $ids = array_filter(array_map('intval', explode(',', $ids)));
            }
            if (!is_array($ids)) continue;

            $cross_sell_ids = array_merge($cross_sell_ids, array_map('intval', $ids));
        }

        $cross_sell_ids = array_values(array_unique(array_filter($cross_sell_ids)));

        if (empty($cross_sell_ids)) {
            $slider_games = [];
        }

        if (!empty($cross_sell_ids)) {
            $slider_games = wc_get_products(array(
                'status'  => 'publish',
                'limit'   => -1,
                'include' => $cross_sell_ids,
                'orderby' => 'post__in',
            ));
        }
    } else {
        $slider_games = wc_get_products(array(
            'status'   => 'publish',
            'limit'    => $count,
            'meta_key' => 'total_sales',
            'orderby'  => 'meta_value_num',
            'order'    => 'DESC',
        ));
    }

    ob_start();

    if (!empty($slider_games)) {
            echo '<div '.get_block_wrapper_attributes(
        array('class' => ' wrapper')).'
    >';
    echo '<div class="bestseller-top">';
        if ($attributes['title']) {
            echo '<h2>' . $attributes['title'] . '</h2>';
        }
        echo '<div class="right-bestseller-top">';
            if (count($slider_games) > 6) {
                echo '<div class="bestseller-navigation">';
                    echo '<div class="bestseller-left">';
                    echo '</div>';
                    echo '<div class="bestseller-right">';
                    echo '</div>';
                echo '</div>';
            }
        echo '</div>';
    echo '</div>';

    $platforms = array('Xbox', 'PC', 'PlayStation');

        echo '<div class="games-list bestseller-games-list"><div class="swiper-wrapper">';
            forEach($slider_games as $game) {
                $platforms_html = '';
                echo '<div class="game-result swiper-slide">';
                    echo '<a href="'
                        .esc_url($game->get_permalink()).
                    '">';
                        echo '<div class="game-featured-image">
                            '.$game->get_image('full').
                        '</div>';
                        echo '<div class="game-meta">';
                            echo '<div class="game-price">
                                '.$game->get_price_html().'
                            </div>';
                            echo '<h3>'.$game->get_name().'</h3>';
                            echo '<div class="game-platforms">';
                                foreach ($platforms as $platform) {
                                    $platforms_html .= (get_post_meta(
                                        $game->get_ID(), 
                                        '_platform_'.strtolower($platform), 
                                        true) == 'yes') ? 
                                            '<div class="platform_'.strtolower($platform).'"></div>' 
                                            : null;
                                }
                                echo $platforms_html;
                            echo '</div>';
                        echo '</div>';
                    echo '</a>';
                echo '</div>';
            }
        echo '</div>';
        echo '</div>';
    } 
    echo '</div>';

    return ob_get_clean();
}