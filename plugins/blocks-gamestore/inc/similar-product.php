<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function view_block_similar_products($attributes) {
    global $post;

    $link_html = ($attributes['link']) ? 
        '<a 
            href="'.esc_html($attributes['link']).'" 
            class="view-all-link">
                '.$attributes['linkAnchor'].'
        </a>' 
        : null;

    if (!$post || !is_singular('product')) return '';

    $product_id = $post->ID;
    $product = wc_get_product($product_id);
    if (!$product) return '';

    $genres = wp_get_post_terms(
        $product_id, 
        "product_genre", 
        array("fields" => "ids")
    );
    $platforms = wp_get_post_terms(
        $product_id, 
        "product_platform", 
        array("fields" => "ids")
    );

    $tax_query = array('relation' => 'AND');
    if(!empty($genres)) {
        $tax_query[] = array(
            'taxonomy' => 'product_genre',
            'field' => 'term_id',
            'terms' => $genres
        );
    };

    if (!empty($platforms)) {
        $tax_query[] = array(
            'taxonomy' => 'product_platform',
            'field' => 'term_id',
            'terms' => $platforms
        );
    }

    $similar_games = wc_get_products(array(
        'status' => 'publish',
        'limit' => $attributes['count'],
        'exclude' => array($product_id),
        'tax_query' => $tax_query
    ));

    ob_start();

    echo '<div '.get_block_wrapper_attributes(
        array('class' => ' wrapper')).'
    >';
    echo '<div class="similar-top">';
        if ($attributes['title']) {
            echo '<h2>' . $attributes['title'] . '</h2>';
        }
        echo '<div class="right-similar-top">';
            echo $link_html;
            if (count($similar_games) > 6) {
                echo '<div class="similar-navigation">';
                    echo '<div class="similar-left">';
                    echo '</div>';
                    echo '<div class="similar-right">';
                    echo '</div>';
                echo '</div>';
            }
        echo '</div>';
    echo '</div>';

    $platforms = array('Xbox', 'PC', 'PlayStation');

    if (!empty($similar_games)) {
        echo '<div class="games-list similar-games-list"><div class="swiper-wrapper">';
            forEach($similar_games as $game) {
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
        echo '</div></div>';
    } else {
        echo '<p>No games found.</p>';
    }
    echo '</div>';

    return ob_get_clean();
}