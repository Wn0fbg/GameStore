<?php

function gamestore_social_share($url, $title) {
    $encoded_url = urlencode($url);
    $encoded_title = urlencode($title);

    $twiter_url = "https://twiter.com/intent/tweet?url={$encoded_url}&text={$encoded_title}";
    $facebook_url = "https://www.facebook.com/sharer/sharer.php?u={$encoded_url}";
    $pinterest_url = "https://pinterest.com/pin/create/button/?url={$encoded_url}&description={$encoded_title}";

    return "
        <div class='social-share-buttons'>
            <a 
                href={$twiter_url} 
                class='twiter-icon' 
                target='_blank'
            >
                Share on Twiter
            </a>
            <a 
                href={$facebook_url} 
                target='_blank'
                class='facebook-icon'
            >
            Share on Facebook
            </a>
            <a 
                href={$pinterest_url} 
                target='_blank'
                class='pinterest-icon'
            >
                Share on Pinterest
            </a>
        </div>
    ";
}