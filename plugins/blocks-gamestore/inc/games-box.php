<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function view_block_games_box($attributes) {
    $count = isset($attributes['count']) ? (int) $attributes['count'] : 8;
    $title = isset($attributes['title']) ? $attributes['title'] : '';
    $languages = get_terms(
        array(
            'taxonomy' => 'product_language',
            'hide_empty' => false
        )
    );
    $genres = get_terms(
        array(
            'taxonomy' => 'product_genre',
            'hide_empty' => false
        )
    );
    $platforms = get_terms(
        array(
            'taxonomy' => 'product_platform',
            'hide_empty' => false
        )
    );
    $years = range(date('Y'), date('Y') - 20);
    $publishers = ['Ubisoft', 'Rockstar Games'];
    $singleplayers = ['Yes', 'No'];
    $html  = '';

    $games_posts = wc_get_products(array(
        'status' => 'publish',
        'limit'  => $count,
    ));

    $html .= '<div ' . get_block_wrapper_attributes() . '>';
        $html .= '<div class="wrapper">';
            if ($title) {
                $html .= '<div class="filter-title-top">';
                    $html .= '<h2 class="games-box-title">'.$title.'</h2>';
                    $html .= '<div class="custom-sort">';
                        $html .= '<span class="label">Sort by:</span>';
                        $html .= '<form action="" method="POST">';
                            $html .= '<select name="sorting" id="sorting">';
                                $html .= '<option value="">Default Sorting</option>';
                                $html .= '<option value="latest">Sort by latest</option>';
                                $html .= '<option value="price_low_high">Sort by (low to high)</option>';
                                $html .= '<option value="price_high_low">Sort by (high to low)</option>';
                                $html .= '<option value="popularity">Sort by Popularity</option>';
                            $html .= '</select>';
                        $html .= '</form>';
                    $html .= '</div>';
                $html .= '</div>';
            }

            $html .= '<div class="games-box-filter">';  
                $html .= '<div class="games-filter">';
                    $html .= '<form method="POST" action="">';
                        if (!empty($languages) && !is_wp_error($languages)) {
                            $html .= '<div class="games-filter-item">';
                                $html .= '<h5>Languages</h5>';
                                foreach($languages as $language) {
                                    $html .= '<div class="filter-item">';
                                        $html .= '<input 
                                            type="checkbox" 
                                            id="language-'.$language->term_id.'"
                                            name="language-'.$language->term_id.'"
                                        >
                                            <label for="language-'.$language->term_id.'">
                                                '.$language->name.'
                                            </label>
                                        </input>';
                                    $html .= '</div>';
                                }
                            $html .= '</div>';
                        }

                        if (!empty($genres) && !is_wp_error($genres)) {
                            $html .= '<div class="games-filter-item">';
                                $html .= '<h5>Genre</h5>';
                                foreach($genres as $genre) {
                                    $html .= '<div class="filter-item">';
                                        $html .= '<input 
                                            type="checkbox" 
                                            id="genre-'.$genre->term_id.'"
                                            name="genre-'.$genre->term_id.'"
                                        >
                                            <label for="genre-'.$genre->term_id.'">
                                                '.$genre->name.'
                                            </label>
                                        </input>';
                                    $html .= '</div>';
                                }
                            $html .= '</div>';
                        }

                        if (!empty($platforms) && !is_wp_error($platforms)) {
                            $html .= '<div class="games-filter-item-select">';
                                $html .= '<select name="platforms" id="platforms">';
                                    $html .= '<option value="">Platform</option>';
                                    foreach($platforms as $platform) {
                                        $html .= '<option 
                                            value="'.$platform->term_id.'"
                                        >
                                            '.$platform->name.'
                                        </option>';
                                    }
                                $html .= '</select>';
                            $html .= '</div>';
                        }

                        if (!empty($singleplayers) && !is_wp_error($singleplayers)) {
                            $html .= '<div class="games-filter-item-select">';
                                $html .= '<select name="singleplayer" id="singleplayer">';
                                    $html .= '<option value="">Single player</option>';
                                    foreach($singleplayers as $singleplayer) {
                                        $html .= '<option value="'.$singleplayer.'">'.$singleplayer.'</option>';
                                    }
                                $html .= '</select>';
                            $html .= '</div>';
                        }

                        if (!empty($publishers) && !is_wp_error($publishers)) {
                            $html .= '<div class="games-filter-item-select">';
                                $html .= '<select name="publisher" id="publisher">';
                                    $html .= '<option value="">Publisher</option>';
                                    foreach($publishers as $publisher) {
                                        $html .= '<option value="'.$publisher.'">'.$publisher.'</option>';
                                    }
                                $html .= '</select>';
                            $html .= '</div>';
                        }

                        if (!empty($years) && !is_wp_error($years)) {
                            $html .= '<div class="games-filter-item-select">';
                                $html .= '<select name="released" id="released">';
                                    $html .= '<option value="">Released</option>';
                                    foreach($years as $year) {
                                        $html .= '<option value="'.$year.'">'.$year.'</option>';
                                    }
                                $html .= '</select>';
                            $html .= '</div>';
                        }

                        $html .= '<div class="games-filter-item-select">
                            <button class="hero-button shadow select-button" type="reset">
                                Reset filters
                            </button>
                        </div>';
                        $html .= '<input type="hidden" name="posts_per_page" value="'.esc_attr($count).'"/>';

                    $html .= '</form>';
                $html .= '</div>';
            
                $html .= '<div class="games-box-list">';
                    if (!empty($games_posts)) {
                            $html .= '<div class="games-list">';
                            foreach ($games_posts as $game) {
                                $platforms_html = ''; 
                                $html .= '<div class="game-result">';
                                    $html .= '<a href="' . esc_url($game->get_permalink()) . '">';
                                        $html .= '<div class="game-featured-image">';
                                            $html .= $game->get_image('full');
                                        $html .= '</div>';
                                        $html .= '<div class="game-meta">';
                                            $html .= '<div class="game-price">';
                                                $html .= $game->get_price_html();
                                            $html .= '</div>';
                                            $html .= '<h3>' . $game->get_name() . '</h3>';
                                            $platforms = array('Xbox', 'PC', 'PlayStation');
                                            foreach ($platforms as $platform) {
                                                $meta = get_post_meta(
                                                    $game->get_ID(),
                                                    '_platform_' . strtolower($platform),
                                                    true
                                                );
                                                if ($meta === 'yes') {
                                                    $platforms_html .= '<div class="platform_' . strtolower($platform) . '"></div>';
                                                }
                                            }
                                            if ($platforms_html !== '') {
                                                $html .= '<div class="game-platforms">' . $platforms_html . '</div>';
                                            }
                                        $html .= '</div>';
                                    $html .= '</a>';
                                $html .= '</div>';
                            }
                        $html .= '</div>';
                        $html .= '<div class="load-more-container">';
                            $html .= '<a
                                class="load-more-button hero-button shadow"   
                            >
                                Load More
                            </a>';
                        $html .= '</div>';
                    } else {
                        $html .= '<p>No games found.</p>';
                    }
                $html .= '</div>';
            $html .= '</div>';
        $html .= '</div>';
    $html .= '</div>';

    return $html;
}