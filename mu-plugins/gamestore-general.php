<?php
/**
 * Plugin Name: Gamestore General
 * Description: Core Code for GameStore
 * Version: 1.0
 * Author: Genius.Courses
 * Author URI: https://genius.courses
 * License: GPL2
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 */

function gamestore_remove_dashboard_widgets() {
    global $wp_meta_boxes;
    
    // Удаляем из нормальной колонки
    unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_activity']);
    unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_right_now']);
    unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_recent_comments']);
    unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_incoming_links']);
    unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_plugins']);
    unset($wp_meta_boxes['dashboard']['normal']['core']['rank_math_dashboard_widget']);
    
    // Удаляем из боковой колонки (side) — вот это было пропущено!
    unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_quick_press']);
    unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_recent_drafts']);
    unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_primary']);
    unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_secondary']);
    unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_site_health']);
}
add_action('wp_dashboard_setup', 'gamestore_remove_dashboard_widgets');

function enable_svg_upload($mimes) {
    $mimes['svg'] = 'image/svg+xml';
    $mimes['svgz'] = 'image/svg+xml';
    return $mimes;
}
add_filter('upload_mimes', 'enable_svg_upload');

function fix_svg_admin_display() {
    echo '<style>
            .attachment-266x266 .thumbnail img {
                width: 100% !important;
                height: auto !important
            }
    </style>';
}
add_action('admin_head', 'fix_svg_admin_display');

function register_news_post_type() {
    register_post_type('news', [
        'labels' => [
            'name'               => 'News',
            'singular_name'      => 'News',
            'add_new'            => 'Add News',
            'add_new_item'       => 'Add New News',
            'edit_item'          => 'Edit News',
            'all_items'          => 'All News',
        ],
        'public'             => true,
        'menu_icon'          => 'dashicons-megaphone',
        'menu_position'      => 5,
        'supports'           => ['title', 'editor', 'thumbnail', 'excerpt'],
        'has_archive'        => true,
        'rewrite'            => ['slug' => 'news'],
        'show_in_rest'       => true,
        'show_ui'            => true,
    ]);
}
add_action('init', 'register_news_post_type');

function register_news_category_taxonomy() {
    register_taxonomy('news_category', 'news', [
        'labels' => [
            'name'              => 'News Categories',
            'singular_name'     => 'News Category',
            'add_new_item'      => 'Add New Category',
            'edit_item'         => 'Edit Category',
            'all_items'         => 'All Categories',
        ],
        'hierarchical'       => true,
        'public'             => true,
        'show_admin_column'  => true,
        'rewrite'            => ['slug' => 'news-category'],
        'show_in_rest'       => true,
    ]);
}
add_action('init', 'register_news_category_taxonomy');
