<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
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