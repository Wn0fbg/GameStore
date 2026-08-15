<?php 

function gamestore_footer_search_popup() {
    ?>
    <div class="popup-games-search-container">
        <span id="close-search"></span>
        <div class="search-container">
            <div class="search-bar wrapper">
                <h3 class="search-label">Search</h3>
                <input 
                    type="text" 
                    name="game-title" 
                    id="popup-search-input" 
                    placeholder="Search for Games"
                />
            </div>
        </div>
    </div>
    <?php
}
add_action('wp_footer', 'gamestore_footer_search_popup');