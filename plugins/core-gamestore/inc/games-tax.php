<?php

function register_product_custom_taxonomies() {
    // Проверяем все возможные варианты
    $product_types = ['product', 'product', 'wc_product'];
    $product_type = null;
    
    foreach ($product_types as $type) {
        if (post_type_exists($type)) {
            $product_type = $type;
            break;
        }
    }
    
    // Если ни один тип не найден, выходим
    if (null === $product_type) {
        return;
    }
    
    // Регистрируем таксономии для найденного типа
    $taxonomies = [
        'product_language' => ['Languages', 'Language', 'language'],
        'product_genre' => ['Genres', 'Genre', 'genre'],
        'product_platform' => ['Platforms', 'Platform', 'platform']
    ];
    
    foreach ($taxonomies as $taxonomy_id => $data) {
        if (!taxonomy_exists($taxonomy_id)) {
            register_taxonomy($taxonomy_id, $product_type, [
                'labels' => [
                    'name' => $data[0],
                    'singular_name' => $data[1],
                    'add_new_item' => 'Add New ' . $data[1],
                    'edit_item' => 'Edit ' . $data[1],
                    'all_items' => 'All ' . $data[0],
                    'search_items' => 'Search ' . $data[0]
                ],
                'hierarchical' => true,
                'public' => true,
                'show_ui' => true,
                'show_in_rest' => true,
                'show_admin_column' => false,
                'rewrite' => ['slug' => $data[2]]
            ]);
        }
    }
}
add_action('init', 'register_product_custom_taxonomies', 20);