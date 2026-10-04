<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function view_block_featured_products($attributes) {
    $featured_games = wc_get_products(array(
        'status' => 'publish',
        'limit' => $attributes['count'],
        'featured' => true
    ));

    ob_start();

    echo '<div '.get_block_wrapper_attributes(
        array('class' => ' wrapper')).'
    >';
    if ($attributes['title']) {
        echo '<h2>' . $attributes['title'] . '</h2>';
    }
    if ($attributes['description']) {
        echo '<p>' . $attributes['description'] . '</p>';
    }

    $platforms = array('Xbox', 'PC', 'PlayStation');

    if (!empty($featured_games)) {
        echo '<div class="games-list">';
            forEach($featured_games as $game) {
                $platforms_html = '';
                echo '<div class="game-result">';
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
    } else {
        echo '<p>No games found.</p>';
    }
    echo '</div>';

    return ob_get_clean();
}