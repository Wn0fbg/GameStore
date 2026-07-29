<?php
function gamestore_footer_search_popup() {
    ?>
    <div class="popup-games-search-container" style="display:none;">
        <span id="close-search"></span>
        <div class="search-container">
            <div class="searc-bar wrapper">
                <h2 class="search-label">Search</h2>
                <input 
                  type="text" 
                  name="game-title" 
                  id="popup-search-input" 
                  placeholder="Search for Games"
                />
                <p class="search-popup-title">You might be interested</p>
            </div>
            <div class="search-results-wrapper">
                <div class="popup-search-results wrapper"></div>
            </div>
        </div>
    </div>
    <?php
}
add_action("wp_footer", "gamestore_footer_search_popup");

// Load latest 12 games
function load_latest_games() {
    $args = array(
        'post_type' => 'product',
        'posts_per_page' => 12,
        'post_status' => 'publish', 
        'orderby' => 'rand', 
    );
    $games_query = new WP_Query($args);

    $result = array();
    if ($games_query->have_posts()) {
        while ($games_query->have_posts()) {
            $games_query->the_post();
            $product = wc_get_product(get_the_ID());

            $result[] = array(
                'link' => get_the_permalink(),
                'thumbnail' => $product->get_image('full'),
                'price' => $product -> get_price(),
                'title' => get_the_title(),
            );
        }
    }
    wp_reset_postdata();

    wp_send_json_success($result);
}
add_action("wp_ajax_load_latest_games","load_latest_games");
add_action("wp_ajax_nopriv_load_latest_games","load_latest_games");
