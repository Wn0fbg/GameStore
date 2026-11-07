<?php

function filter_games_ajax_handler() {
    $posts_per_page = isset( $_POST['post_per_page'] ) ? intval( $_POST['post_per_page'] ) : 8;
    if ( $posts_per_page < 1 ) {
        $posts_per_page = 8;
    }

    $paged       = isset( $_POST['page'] )        ? max( 1, intval( $_POST['page'] ) ) : 1;
    $current_cat = isset( $_POST['current_cat'] ) ? sanitize_title( $_POST['current_cat'] ) : 'games';
    if ( $current_cat === '' ) {
        $current_cat = 'games';
    }

    $platforms    = isset( $_POST['platforms'] )    ? sanitize_text_field( $_POST['platforms'] )    : '';
    $publisher    = isset( $_POST['publisher'] )    ? sanitize_text_field( $_POST['publisher'] )    : '';
    $singleplayer = isset( $_POST['singleplayer'] ) ? sanitize_text_field( $_POST['singleplayer'] ) : '';
    $released     = isset( $_POST['released'] )     ? sanitize_text_field( $_POST['released'] )     : '';
    $languages    = isset( $_POST['languages'] )    ? sanitize_text_field( $_POST['languages'] )    : '';
    $genres       = isset( $_POST['genres'] )       ? sanitize_text_field( $_POST['genres'] )       : '';
    $sort         = isset( $_POST['sort'] )         ? sanitize_text_field( $_POST['sort'] )         : '';

    // ===== БАЗОВЫЙ tax_query — ВСЕГДА, с динамической категорией =====
    $args = array(
        'post_type'      => 'product',
        'posts_per_page' => $posts_per_page,
        'post_status'    => 'publish',
        'paged'          => $paged,
        'tax_query'      => array(
            array(
                'taxonomy' => 'product_cat',
                'field'    => 'slug',
                'terms'    => $current_cat,
            ),
        ),
    );

    // ===== Дополнительные условия =====
    if ( $platforms !== '' ) {
        $args['tax_query'][] = array(
            'taxonomy' => 'product_platform',
            'field'    => 'term_id',
            'terms'    => absint( $platforms ),
        );
    }

    if ( $languages !== '' ) {
        $lang_ids = array_filter( array_map( 'absint', explode( ',', $languages ) ) );
        if ( ! empty( $lang_ids ) ) {
            $args['tax_query'][] = array(
                'taxonomy' => 'product_language',
                'field'    => 'term_id',
                'terms'    => $lang_ids,
            );
        }
    }

    if ( $genres !== '' ) {
        $genre_ids = array_filter( array_map( 'absint', explode( ',', $genres ) ) );
        if ( ! empty( $genre_ids ) ) {
            $args['tax_query'][] = array(
                'taxonomy' => 'product_genre',
                'field'    => 'term_id',
                'terms'    => $genre_ids,
            );
        }
    }

    if ( $publisher !== '' ) {
        $args['meta_query'][] = array(
            'key'     => '_gamestore_publisher',
            'value'   => $publisher,
            'compare' => '=',
        );
    }

    if ( $singleplayer !== '' ) {
        $args['meta_query'][] = array(
            'key'     => '_gamestore_single_player',
            'value'   => $singleplayer,
            'compare' => '=',
        );
    }

    if ( $released !== '' ) {
        $args['meta_query'][] = array(
            'key'     => '_gamestore_release_date',
            'value'   => array( "{$released}-01-01", "{$released}-12-31" ),
            'compare' => 'BETWEEN',
            'type'    => 'DATE',
        );
    }

    if ( count( $args['tax_query'] ) > 1 ) {
        $args['tax_query']['relation'] = 'AND';
    }
    if ( ! empty( $args['meta_query'] ) && count( $args['meta_query'] ) > 1 ) {
        $args['meta_query']['relation'] = 'AND';
    }

    // ===== Сортировка =====
    switch ( $sort ) {
        case 'latest':
            $args['orderby'] = 'date';
            $args['order']   = 'DESC';
            break;
        case 'price_low_high':
            $args['meta_key'] = '_price';
            $args['orderby']  = 'meta_value_num';
            $args['order']    = 'ASC';
            break;
        case 'price_high_low':
            $args['meta_key'] = '_price';
            $args['orderby']  = 'meta_value_num';
            $args['order']    = 'DESC';
            break;
        case 'popularity':
            $args['meta_key'] = 'total_sales';
            $args['orderby']  = 'meta_value_num';
            $args['order']    = 'DESC';
            break;
        default:
            $args['orderby'] = 'date';
            $args['order']   = 'DESC';
    }

    $filtered_games = get_posts( $args );

    // ===== Вывод: ТОЛЬКО карточки или "No games found" =====
    if ( ! empty( $filtered_games ) ) {
        foreach ( $filtered_games as $post ) {
            $game = wc_get_product( $post->ID );
            if ( ! $game ) {
                continue;
            }

            $platforms_html = '';
            foreach ( array( 'Xbox', 'PC', 'PlayStation' ) as $platform ) {
                $meta = get_post_meta( $game->get_ID(), '_platform_' . strtolower( $platform ), true );
                if ( $meta === 'yes' ) {
                    $platforms_html .= '<div class="platform_' . strtolower( $platform ) . '"></div>';
                }
            }

            echo '<div class="game-result">';
                echo '<a href="' . esc_url( $game->get_permalink() ) . '">';
                    echo '<div class="game-featured-image">' . $game->get_image( 'full' ) . '</div>';
                    echo '<div class="game-meta">';
                        echo '<div class="game-price">' . $game->get_price_html() . '</div>';
                        echo '<h3>' . esc_html( $game->get_name() ) . '</h3>';
                        if ( $platforms_html !== '' ) {
                            echo '<div class="game-platforms">' . $platforms_html . '</div>';
                        }
                    echo '</div>';
                echo '</a>';
            echo '</div>';
        }
    } else {
        echo '<p class="no-games-found">No games found.</p>';
    }

    wp_die();
}
add_action( 'wp_ajax_filter_games',        'filter_games_ajax_handler' );
add_action( 'wp_ajax_nopriv_filter_games', 'filter_games_ajax_handler' );