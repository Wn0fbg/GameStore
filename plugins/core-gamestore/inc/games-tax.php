<?php

function register_product_custom_taxonomies() {
    // Languages
    register_taxonomy('product_language', 'product', [
        'labels' => [
            'name'              => 'Languages',
            'singular_name'     => 'Language',
            'add_new_item'      => 'Add New Language',
            'edit_item'         => 'Edit Language',
            'all_items'         => 'All Languages',
            'search_items'      => 'Search Languages'
        ],
        'hierarchical'      => true,
        'public'            => true,
        'show_ui'           => true,
        'show_in_rest'      => true,
        'show_admin_column' => false,
        'rewrite'           => ['slug' => 'language']
    ]);
    
    // Genres
    register_taxonomy('product_genre', 'product', [
        'labels' => [
            'name'              => 'Genres',
            'singular_name'     => 'Genre',
            'add_new_item'      => 'Add New Genre',
            'edit_item'         => 'Edit Genre',
            'all_items'         => 'All Genres',
            'search_items'      => 'Search Genres'
        ],
        'hierarchical'      => true,
        'public'            => true,
        'show_ui'           => true,
        'show_in_rest'      => true,
        'show_admin_column' => false,
        'rewrite'           => ['slug' => 'genre']
    ]);
    
    // Platform
    register_taxonomy('product_platform', 'product', [
        'labels' => [
            'name'              => 'Platforms',
            'singular_name'     => 'Platform',
            'add_new_item'      => 'Add New Platform',
            'edit_item'         => 'Edit Platform',
            'all_items'         => 'All Platforms',
            'search_items'      => 'Search Platforms'
        ],
        'hierarchical'      => true,
        'public'            => true,
        'show_ui'           => true,
        'show_in_rest'      => true,
        'show_admin_column' => false,
        'rewrite'           => ['slug' => 'platform']
    ]);
}
add_action('init', 'register_product_custom_taxonomies');

// Flush rewrite rules on activation
add_action('after_switch_theme', 'flush_rewrite_rules');