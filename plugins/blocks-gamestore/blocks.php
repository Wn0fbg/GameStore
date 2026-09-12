<?php

function view_block_games_line($attributes) {
    $args = array(
        'post_type' => 'product',
        'posts_per_page' => $attributes['count'],
        'orderby' => 'date',
        'order' => 'DESC'
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

function view_block_resent_news($attributes) {
    $args = array(
        'post_type' => 'news',
        'post_per_page' => $attributes['count'],
        'orderby' => 'date',
        'order' => 'DESC'
    );
    $news_query = new WP_Query( $args );
    $image_bg = ($attributes['image']) ? 'style="background-image: url(' .$attributes['image']. ')"' : '';

    ob_start();

    echo '<div '. get_block_wrapper_attributes() . $image_bg . '>';
    if ($news_query -> have_posts()) {
        if ($attributes['title']) {
            echo '<h2>' . $attributes['title'] . '</h2>';
        }
        if ($attributes['description']) {
            echo '<p>' . $attributes['description'] . '</p>';
        }
        echo '<div class="recent-news wrapper">';
        while ($news_query -> have_posts()) {
            $news_query -> the_post();
            echo '<div class="news-item">';
                if (has_post_thumbnail()) {
                    echo '<h3>' . get_the_title() . '</h3>';
                    echo '<div class="news-thumbnail">';
                    echo '<img 
                            src="'.get_the_post_thumbnail_url().'" 
                            alt="'.get_the_title().'" 
                            class="blur-image"
                            />';
                    echo '<img 
                            src="'.get_the_post_thumbnail_url().'" 
                            alt="'.get_the_title().'" 
                            class="original-image"
                            />';
                    echo '</div>';
                }
                echo '<div class="news-excert">'.get_the_excerpt().'</div>';
                echo '<a href="'.get_the_permalink().'" 
                        class="read-more">
                            Open the post
                        </a>';
            echo '</div>';
        } 
        echo '</div>';
    } else {
            echo '<p>No recent news found.</p>';
    }
    echo '</div>';

    wp_reset_postdata();

    return ob_get_clean();
}

function view_block_subscribe($attributes) {
    $image_bg = ($attributes['image']) ? 'style="background-image: url(' .$attributes['image']. ')"' : '';

    ob_start();
        echo '<div '. get_block_wrapper_attributes(array(
            'class' => 'alignfull'
        )) . $image_bg . '>';
            echo '<div class="subscribe-inner wrapper">';
                echo '<h2 class="subscribe-title">'.
                    $attributes['title'].
                '</h2>';
                echo '<p class="subscribe-description">'
                    .$attributes['description'].
                '</p>';
                echo '<div class="subscribe-shortcode">'
                    .do_shortcode($attributes['shortcode']).
                '</div>';
            echo '</div>';
        echo '</div>';
    
    return ob_get_clean();
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

function view_block_single_news() {
    ob_start();
    $bg_image = get_the_post_thumbnail_url(get_the_ID(), 'full') ? 
        'style="background-image: url('.get_the_post_thumbnail_url(get_the_ID(), 'full').')"' : '';

    echo '<article '
        . get_block_wrapper_attributes(
            (array('class' => implode(
                '', 
                get_post_class('alignfull'))))) .
    '>';
        echo '<div class="featured-image-section" '.$bg_image.'>';
            echo '<div class="wrapper">';
                echo '<h1>
                    '.esc_html(get_the_title()).'
                </h1>';
                echo '<div class="news-meta">';
                    echo '<div class="news-date">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="23" height="23" stroke="transparent"/>
                            <path d="M8 2V5" stroke="var(--text-secondary)" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16 2V5" stroke="var(--text-secondary)" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.5 9.09009H20.5" stroke="var(--text-secondary)" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="var(--text-secondary)" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15.6947 13.7H15.7037" stroke="var(--text-secondary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15.6947 16.7H15.7037" stroke="var(--text-secondary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.9955 13.7H12.0045" stroke="var(--text-secondary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.9955 16.7H12.0045" stroke="var(--text-secondary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8.29431 13.7H8.30329" stroke="var(--text-secondary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8.29431 16.7H8.30329" stroke="var(--text-secondary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        '.esc_html(get_the_date()).'
                    </div>';
                    echo '<div class="news-authoe">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.1399 21.62C17.2599 21.88 16.2199 22 14.9999 22H8.99986C7.77986 22 6.73986 21.88 5.85986 21.62C6.07986 19.02 8.74986 16.97 11.9999 16.97C15.2499 16.97 17.9199 19.02 18.1399 21.62Z" stroke="var(--text-secondary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15 2H9C4 2 2 4 2 9V15C2 18.78 3.14 20.85 5.86 21.62C6.08 19.02 8.75 16.97 12 16.97C15.25 16.97 17.92 19.02 18.14 21.62C20.86 20.85 22 18.78 22 15V9C22 4 20 2 15 2ZM12 14.17C10.02 14.17 8.42 12.56 8.42 10.58C8.42 8.60002 10.02 7 12 7C13.98 7 15.58 8.60002 15.58 10.58C15.58 12.56 13.98 14.17 12 14.17Z" stroke="var(--text-secondary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15.5799 10.58C15.5799 12.56 13.9799 14.17 11.9999 14.17C10.0199 14.17 8.41992 12.56 8.41992 10.58C8.41992 8.60002 10.0199 7 11.9999 7C13.9799 7 15.5799 8.60002 15.5799 10.58Z" stroke="var(--text-secondary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        '.esc_html(get_the_author()).'
                    </div>';
                echo '</div>';
            echo '</div>';
        echo '</div>';

        echo '<div class="wrapper news-container">';
            echo '<div class="news-social-share">
                Share
                '.gamestore_social_share(
                    get_the_permalink(), 
                    get_the_title()
                ).'
            </div>';
            echo '<div class="news-content">
                '.get_the_content().'
            </div>';
        echo '</div>';
    echo '</article>';

    return ob_get_clean();
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

function view_block_news_box() {
    ob_start();

    echo '<div '. get_block_wrapper_attributes() . '>';
        if (has_post_thumbnail()) {
        echo '<h3>' . get_the_title() . '</h3>';
        echo '<div class="news-thumbnail">';
        echo '<img 
                src="'.get_the_post_thumbnail_url().'" 
                alt="'.get_the_title().'" 
                class="blur-image"
                />';
        echo '<img 
                src="'.get_the_post_thumbnail_url().'" 
                alt="'.get_the_title().'" 
                class="original-image"
                />';
        echo '</div>';
        }
        echo '<div class="news-excert">'.get_the_excerpt().'</div>';
        echo '<a href="'.get_the_permalink().'" 
            class="read-more">
                Open the post
            </a>';
    echo '</div>';

    return ob_get_clean();    
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
                            href="add-to-cart='.$game->get_id().'"
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
        echo '</div>';
    echo '</div>';

    wp_reset_postdata();

    return ob_get_clean();
}

function view_block_bestseller_products($attributes) {
    $bestseller_games = wc_get_products(array(
        'status' => 'publish',
        'limit' => $attributes['count'],
        'meta-key' => 'total_sales',
        'orderby' => 'meta-value_num',
        'order' => 'DESC'
    ));

    ob_start();

    echo '<div '.get_block_wrapper_attributes(
        array('class' => ' wrapper')).'
    >';
    echo '<div class="bestseller-top">';
        if ($attributes['title']) {
            echo '<h2>' . $attributes['title'] . '</h2>';
        }
        echo '<div class="right-bestseller-top">';
            if (count($bestseller_games) > 6) {
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

    if (!empty($bestseller_games)) {
        echo '<div class="games-list bestseller-games-list"><div class="swiper-wrapper">';
            forEach($bestseller_games as $game) {
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