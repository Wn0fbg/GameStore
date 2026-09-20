<?php

function gamestore_woocommerce_blocks_do_action($block_content, $block) {
    $blocks = array(
        'woocommerce/cart',
        'woocommerce/failed-cart-block',
        'woocommerce/cart-totals-block',
        'woocommerce/cart-order-summary-block',
        'woocommerce/cart-order-summart-heading-block',
        'woocommerce/cart-order-summary-coupon-form-block',
        'woocommerce/cart-order-subtotal-block',
        'woocommerce/cart-order-summary-fee-block',
        'woocommerce/cart-order-summary-discount-block',
        'woocommerce/cart-order-summary-shipping-block',
        'woocommerce/cart-order-summary-taxes-block',
        'woocommerce/cart-items-block',
        'woocommerce/cart-line-items-block',
        'woocommerce/cart-cross-sells-block',
        'woocommerce/cart-cross-sells-products-block',
        'woocommerce/cart-express-payment-block',
        'woocommerce/proceed-to-checkout-block',
        'woocommerce/cart-accepted-payment-methods-block'
    );

    if (in_array($block['blockName'], $blocks)) {
        ob_start();
        do_action('gamestore_before_'.$block['blockName']);
        echo $block_content;
        do_action('gamestore_after_'.$block['blockName']);
        $block_content = ob_get_contents();
        ob_end_clean();
    }

    return $block_content;
}
add_filter('render_block', 'gamestore_woocommerce_blocks_do_action', 9999, 2);

// add_action('gamestore_before_woocommerce/cart', 
//     function() 
//         {echo 'hello';}
// );