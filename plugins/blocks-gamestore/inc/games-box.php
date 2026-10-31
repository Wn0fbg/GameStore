<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function view_block_games_box($attributes) {
    $count = isset($attributes['count']) ? (int) $attributes['count'] : 8;
    $title = isset($attributes['title']) ? $attributes['title'] : '';

    // текущая страница пагинации (из URL ?paged=N)
    $paged = max( 1, (int) get_query_var( 'paged' ), (int) get_query_var( 'page' ) );

    $languages = get_terms( array( 'taxonomy' => 'product_language', 'hide_empty' => false ) );
    $genres    = get_terms( array( 'taxonomy' => 'product_genre',    'hide_empty' => false ) );
    $platforms = get_terms( array( 'taxonomy' => 'product_platform', 'hide_empty' => false ) );

    $years         = range( date( 'Y' ), date( 'Y' ) - 20 );
    $publishers    = [ 'Ubisoft', 'Rockstar Games' ];
    $singleplayers = [ 'Yes', 'No' ];

    $query = new WP_Query( array(
        'post_type'      => 'product',
        'post_status'    => 'publish',
        'posts_per_page' => $count,
        'paged'          => $paged,
        'orderby'        => 'date',
        'order'          => 'DESC',
        'tax_query'      => array(
            array(
                'taxonomy' => 'product_cat',
                'field'    => 'slug',
                'terms'    => 'games',
            ),
        ),
    ) );

    ob_start();
    echo '<div ' . get_block_wrapper_attributes() . '>';
        echo '<div class="wrapper">';
            if ( $title ) {
                echo '<div class="filter-title-top">';
                    echo '<h2 class="games-box-title">' . wp_kses_post( $title ) . '</h2>';
                    echo '<div class="custom-sort">';
                        echo '<span class="label">Sort by:</span>';
                        echo '<form action="" method="POST">';
                            echo '<select name="sorting" id="sorting">';
                                echo '<option value="">Default Sorting</option>';
                                echo '<option value="latest">Sort by latest</option>';
                                echo '<option value="price_low_high">Sort by (low to high)</option>';
                                echo '<option value="price_high_low">Sort by (high to low)</option>';
                                echo '<option value="popularity">Sort by Popularity</option>';
                            echo '</select>';
                        echo '</form>';
                    echo '</div>';
                echo '</div>';
            }

            echo '<div class="games-box-filter">';
                echo '<div class="games-filter">';
                    echo '<form method="POST" action="">';

                        if ( ! empty( $languages ) && ! is_wp_error( $languages ) ) {
                            echo '<div class="games-filter-item">';
                                echo '<h5>Languages</h5>';
                                foreach ( $languages as $language ) {
                                    echo '<div class="filter-item">';
                                        echo '<input type="checkbox" id="language-' . $language->term_id . '" name="language-' . $language->term_id . '">';
                                        echo '<label for="language-' . $language->term_id . '">' . esc_html( $language->name ) . '</label>';
                                    echo '</div>';
                                }
                            echo '</div>';
                        }

                        if ( ! empty( $genres ) && ! is_wp_error( $genres ) ) {
                            echo '<div class="games-filter-item">';
                                echo '<h5>Genre</h5>';
                                foreach ( $genres as $genre ) {
                                    echo '<div class="filter-item">';
                                        echo '<input type="checkbox" id="genre-' . $genre->term_id . '" name="genre-' . $genre->term_id . '">';
                                        echo '<label for="genre-' . $genre->term_id . '">' . esc_html( $genre->name ) . '</label>';
                                    echo '</div>';
                                }
                            echo '</div>';
                        }

                        if ( ! empty( $platforms ) && ! is_wp_error( $platforms ) ) {
                            echo '<div class="games-filter-item-select">';
                                echo '<select name="platforms" id="platforms">';
                                    echo '<option value="">Platform</option>';
                                    foreach ( $platforms as $platform ) {
                                        echo '<option value="' . $platform->term_id . '">' . esc_html( $platform->name ) . '</option>';
                                    }
                                echo '</select>';
                            echo '</div>';
                        }

                        if ( ! empty( $singleplayers ) && ! is_wp_error( $singleplayers ) ) {
                            echo '<div class="games-filter-item-select">';
                                echo '<select name="singleplayer" id="singleplayer">';
                                    echo '<option value="">Single player</option>';
                                    foreach ( $singleplayers as $singleplayer ) {
                                        echo '<option value="' . esc_attr( $singleplayer ) . '">' . esc_html( $singleplayer ) . '</option>';
                                    }
                                echo '</select>';
                            echo '</div>';
                        }

                        if ( ! empty( $publishers ) && ! is_wp_error( $publishers ) ) {
                            echo '<div class="games-filter-item-select">';
                                echo '<select name="publisher" id="publisher">';
                                    echo '<option value="">Publisher</option>';
                                    foreach ( $publishers as $publisher ) {
                                        echo '<option value="' . esc_attr( $publisher ) . '">' . esc_html( $publisher ) . '</option>';
                                    }
                                echo '</select>';
                            echo '</div>';
                        }

                        if ( ! empty( $years ) && ! is_wp_error( $years ) ) {
                            echo '<div class="games-filter-item-select">';
                                echo '<select name="released" id="released">';
                                    echo '<option value="">Released</option>';
                                    foreach ( $years as $year ) {
                                        echo '<option value="' . $year . '">' . $year . '</option>';
                                    }
                                echo '</select>';
                            echo '</div>';
                        }

                        echo '<div class="games-filter-item-select">
                            <button class="hero-button shadow select-button" type="reset">Reset filters</button>
                        </div>';
                        echo '<input type="hidden" name="posts_per_page" value="' . esc_attr( $count ) . '"/>';

                    echo '</form>';
                echo '</div>';

                echo '<div class="games-box-list">';

                    if ( $query->have_posts() ) {
                        echo '<div class="games-list">';

                        while ( $query->have_posts() ) {
                            $query->the_post();
                            $product = wc_get_product( get_the_ID() );

                            if ( ! $product ) {
                                continue;
                            }

                            $platforms_html = '';
                            $platforms_list = array( 'Xbox', 'PC', 'PlayStation' );
                            foreach ( $platforms_list as $platform ) {
                                $meta = get_post_meta( get_the_ID(), '_platform_' . strtolower( $platform ), true );
                                if ( $meta === 'yes' ) {
                                    $platforms_html .= '<div class="platform_' . strtolower( $platform ) . '"></div>';
                                }
                            }

                            echo '<div class="game-result">';
                                echo '<a href="' . esc_url( get_permalink() ) . '">';
                                    echo '<div class="game-featured-image">';
                                        echo $product->get_image( 'full' );
                                    echo '</div>';
                                    echo '<div class="game-meta">';
                                        echo '<div class="game-price">';
                                            echo $product->get_price_html();
                                        echo '</div>';
                                        echo '<h3>' . esc_html( $product->get_name() ) . '</h3>';
                                        if ( $platforms_html !== '' ) {
                                            echo '<div class="game-platforms">' . $platforms_html . '</div>';
                                        }
                                    echo '</div>';
                                echo '</a>';
                            echo '</div>';
                        }

                        echo '</div>';

                        // ===== ПАГИНАЦИЯ (как в news) =====
                        $pagination = paginate_links( array(
                            'total'     => $query->max_num_pages,
                            'current'   => $paged,
                            'base'      => get_pagenum_link( 1 ) . '%_%',
                            'format'    => '?paged=%#%',
                            'type'      => 'array',
                            'prev_text' => '',
                            'next_text' => '',
                        ) );

                        if ( ! empty( $pagination ) ) {
                            echo '<div class="wp-block-query-pagination">';
                            echo '<div class="games-pagination wp-block-query-pagination-numbers">';
                            foreach ( $pagination as $page_link ) {
                                if ( trim( wp_strip_all_tags( $page_link ) ) === '' ) {
                                    continue;
                                }
                                echo $page_link;
                            }
                            echo '</div>';
                            echo '</div>';
                        }
                        // ===== /ПАГИНАЦИЯ =====

                    } else {
                        echo '<p>No games found.</p>';
                    }

                echo '</div>';
            echo '</div>';
        echo '</div>';
    echo '</div>';

    wp_reset_postdata();

    return ob_get_clean();
}