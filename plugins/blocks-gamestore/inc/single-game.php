<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function view_block_single_game() {
    $game = wc_get_product(get_the_ID());
    if (!$game) return '';

    $game_id = $game->get_id();
    
    $game_badge = get_post_meta($game_id, '_gamestore_game_cover', true);
    $game_badge_html = $game_badge ? '<img src="'.esc_url($game_badge).'" alt=""/>' : null;

    $publisher = get_post_meta($game_id, '_gamestore_publisher', true);
    $publisher_html = $publisher ? '
            <div class="game-publisher">   
                <div class="label-text">Publisher</div> 
                <div class="item-text">
                    '.esc_html($publisher).'
                </div>
            </div>' 
    : null;

    $single_player = get_post_meta($game_id, '_gamestore_single_player', true);
    $single_player_html = $single_player ? '
            <div class="game-single-player">   
                <div class="label-text">Single Player</div> 
                <div class="item-text">
                    '.esc_html($single_player).'
                </div>
            </div>' 
    : null;

    $release_date = get_post_meta($game_id, '_gamestore_release_date', true);
    $release_date_html = $release_date ? '
            <div class="game-release-date">   
                <div class="label-text">Release Date</div> 
                <div class="item-text">
                    '.esc_html(
                        date('j F Y', strtotime($release_date))
                    ).'
                </div>
            </div>' 
    : null;

    $game_full_description = get_post_meta($game_id, '_gamestore_full_description', true);
    $game_full_description_html = $game_full_description ? '
            <div class="game-release-date">   
                <h4>Game Description:</h4> 
                '.wp_kses_post($game_full_description).'
            </div>' 
    : null;

    $languages = wp_get_post_terms($game->get_ID(), 'product_language');
    $languages_html = '';
    if (!empty($languages) && !is_wp_error($languages)) {
        foreach ($languages as $language) {
            $languages_html .= '<div class="language-item">'.
                esc_html($language->name).
            '</div>';
        }
    }

    $platforms = wp_get_post_terms($game->get_ID(), 'product_platform');
    $platforms_terms_html = '';
    if (!empty($platforms) && !is_wp_error($platforms)) {
        $platforms_terms_html .= '
            <div class="game-platforms-list">
                <div class="label-text">
                    Platforms
                </div>';

        foreach ($platforms as $platform) {
            $platforms_terms_html .= '<div class="item-text">
                <a href="'.get_term_link($platform).'">
                    '.esc_html($platform->name).'
                </a>
            </div>';
        }
        $platforms_terms_html .= '</div>';
    }

    $genres = wp_get_post_terms($game->get_ID(), 'product_genre');
    $genres_html = '';
    if (!empty($genres) && !is_wp_error($genres)) {
        $genres_html .= '
            <div class="game-genres-list">
                <div class="label-text">
                    Genres
                </div>';
        
        foreach ($genres as $genre) {
            $genres_html .= '<div class="item-text">
                <a href="'.get_term_link($genre).'">
                    '.esc_html($genre->name).'
                </a>
                </div>';
        }
        $genres_html .= '</div>';
    }

    $game_screens_images = $game->get_gallery_image_ids();
    $game_screens_html = '';

    if (!empty($game_screens_images)) {
    $game_screens_html .= '<div class="game-screens">
        <h4>Videos & Game Play:</h4>
            <div class="game-single-slider">
                <div class="swiper-wrapper">';
    foreach($game_screens_images as $image_id) {
        $image_url = wp_get_attachment_image_url($image_id, 'full');
        if ($image_url) {
            $game_screens_html .= 
                '<div class="game-screen swiper-slide">
                    <img 
                        class="swiper-image" 
                        src="'.esc_url($image_url).'"
                        alt="Game screenshot"
                    />
                </div>';
        }
    }
    $game_screens_html .= '
                </div>
            <div class="swiper-game-next"></div>
            <div class="swiper-game-prev"></div>
        </div></div>';
}

    ob_start();
    echo '<div '.get_block_wrapper_attributes().'>';
        echo '<div class="wrapper">';
            echo '<aside class="game-image">';
                echo '<div class="game-image-container">';
                    echo $game->get_image('large');
                echo '</div>';                
                echo '<div class="game-platforms">';
                    $platforms_icons_html = '';
                    foreach (['Xbox', 'PC', 'PlayStation'] as $platform) {
                        if (get_post_meta($game_id, '_platform_'.strtolower($platform), true) == 'yes') {
                            $platforms_icons_html .= '<div class="platform_'.strtolower($platform).'"></div>';
                        }
                    }
                    echo $platforms_icons_html;
                echo '</div>';
            echo '</aside>';
            echo '<div class="game-content">';
                echo '<div class="game-description-top">';
                    echo '<h1>'.$game->get_name().'</h1>';
                    echo $game_badge_html;
                echo '</div>';                
                echo '<div class="game-languages">';
                    echo $languages_html;
                echo '</div>';
                echo '<div class="game-description">';
                    echo $game->get_short_description();
                echo '</div>';    
                echo '<div class="game-meta-data">';
                    echo $platforms_terms_html;
                    echo $genres_html;
                    echo $publisher_html;
                    echo $single_player_html;
                    echo $release_date_html;
                echo '</div>'; 
                echo '<div class="game-price-button">';
                    echo '<div class="game-price">
                        '.$game->get_price_html().'
                    </div>';
                    echo '<div class="game-add-to-cart">
                        <a 
                            class="hero-button shadow"
                            href="' . esc_url( $game->add_to_cart_url() ) . '"
                        >
                            Purchase the Game
                        </a>
                    </div>';
                echo '</div>';           
                echo $game_screens_html;
                echo $game_full_description_html;
            echo '</div>';
        echo '</div>';
    echo '</div>';

    return ob_get_clean();
}