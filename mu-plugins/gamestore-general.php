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

// Allow SVG uploads
function gamestore_mime_types($mimes) {
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
}
add_filter('upload_mimes', 'gamestore_mime_types');

// Fix SVG display in media library
function gamestore_fix_svg() {
    echo `<style>
        .attachment-266x266, .thumbnail img {
            width: 100% !important;
            height: auto !important;
        }
    <styles>`;
}
add_action('admin_head', 'gamestore_fix_svg');
function register_news_post_type() {
    $labels = array(
        'name'               => _x( 'News', 'post type general name', 'textdomain' ),
        'singular_name'      => _x( 'News', 'post type singular name', 'textdomain' ),
        'menu_name'          => _x( 'News', 'admin menu', 'textdomain' ),
        'name_admin_bar'     => _x( 'News', 'add new on admin bar', 'textdomain' ),
        'add_new'            => _x( 'Add New', 'news', 'textdomain' ),
        'add_new_item'       => __( 'Add New News', 'textdomain' ),
        'new_item'           => __( 'New News', 'textdomain' ),
        'edit_item'          => __( 'Edit News', 'textdomain' ),
        'view_item'          => __( 'View News', 'textdomain' ),
        'all_items'          => __( 'All News', 'textdomain' ),
        'search_items'       => __( 'Search News', 'textdomain' ),
        'parent_item_colon'  => __( 'Parent News:', 'textdomain' ),
        'not_found'          => __( 'No news found.', 'textdomain' ),
        'not_found_in_trash' => __( 'No news found in Trash.', 'textdomain' )
    );

    $args = array(
        'labels'             => $labels,
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'show_in_rest'       => true,
        'query_var'          => true,
        'rewrite'            => array( 'slug' => 'news' ),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => 5,
        'menu_icon'          => 'dashicons-format-aside',
        'supports'           => array( 
            'title', 
            'editor', 
            'author', 
            'thumbnail', 
            'excerpt', 
            'comments' 
        ),
        'taxonomies'         => array( 'news_category' ),
        'show_in_rest'       => true,
    );

    register_post_type( 'news', $args );
}
add_action( 'init', 'register_news_post_type' );

function register_news_category_taxonomy() {
    $labels = array(
        'name'              => _x( 'News Categories', 'taxonomy general name', 'textdomain' ),
        'singular_name'     => _x( 'News Category', 'taxonomy singular name', 'textdomain' ),
        'search_items'      => __( 'Search News Categories', 'textdomain' ),
        'all_items'         => __( 'All News Categories', 'textdomain' ),
        'parent_item'       => __( 'Parent News Category', 'textdomain' ),
        'parent_item_colon' => __( 'Parent News Category:', 'textdomain' ),
        'edit_item'         => __( 'Edit News Category', 'textdomain' ),
        'update_item'       => __( 'Update News Category', 'textdomain' ),
        'add_new_item'      => __( 'Add New News Category', 'textdomain' ),
        'new_item_name'     => __( 'New News Category Name', 'textdomain' ),
        'menu_name'         => __( 'News Categories', 'textdomain' ),
    );

    $args = array(
        'hierarchical'      => true,
        'labels'            => $labels,
        'show_ui'           => true,
        'show_admin_column' => true,
        'query_var'         => true,
        'rewrite'           => array( 'slug' => 'news-category' ),
        'show_in_rest'      => true,
    );

    register_taxonomy( 'news_category', array( 'news' ), $args );
}
add_action( 'init', 'register_news_category_taxonomy' );
