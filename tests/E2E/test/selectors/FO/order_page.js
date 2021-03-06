module.exports = {
  CheckoutOrderPage: {
    add_to_cart_button: '#add-to-cart-or-refresh button.add-to-cart',
    proceed_to_checkout_modal_button: '#blockcart-modal div.cart-content-btn a',
    blockcart_modal: '#blockcart-modal',
    continue_shopping_button: '#blockcart-modal div.cart-content-btn button',
    proceed_to_checkout_button: '#main div.checkout a',
    promo_code_link: '#main a .promo-code',
    promo_code_input: '#promo-code input.promo-input',
    promo_code_add_button: '#promo-code button[type="submit span[text()="Add"]',
    remove_voucher_button: '#main a [data-link-action="remove-voucher"]):nth-child(2)',
    cart_subtotal_products: '#cart-subtotal-products span:nth-child(2)',
    cart_subtotal_discount: '#cart-subtotal-discount span:nth-child(2)',
    cart_total: '#main div[class*=cart-total] > span:nth-of-type(2)',
    checkout_step2_continue_button: '#checkout-addresses-step button[name*=confirm-addresses]',
    checkout_step3_continue_button: '#js-delivery button[name=confirmDeliveryOption]',
    checkout_step4_payment_radio: '#payment-option-2',
    shipping_method_option: '#delivery_option_2',
    message_textarea: '#delivery_message',
    condition_check_box: '#conditions_to_approve\\5b terms-and-conditions\\5d',
    confirmation_order_button: '#payment-confirmation button[type=submit]',
    confirmation_order_message: '#content-hook_order_confirmation h3.card-title',
    order_product: '#order-items div.details span',
    order_reference: '#order-details li:nth-of-type(1)',
    order_basic_price: '#order-items div.qty > div > div:nth-of-type(1)',
    order_total_price: '#order-items > div.order-confirmation-table tr:nth-of-type(1) > td:nth-of-type(2)',
    order_shipping_prince_value: '#order-items > div.order-confirmation-table tr:nth-of-type(2) > td:nth-of-type(2)',
    customer_name: '#_desktop_user_info a.account > span',
    shipping_method: '#order-details li:nth-of-type(3)',
    quantity_input: '#main li:nth-of-type(%NUMBER) div.input-group input.js-cart-line-product-quantity',
    success_product_add_to_cart_modal: '#myModalLabel',
    product_discount_details: '#main span.discount',
    alert: '#notifications article.alert-danger',
    product_cart_link: 'div.product-line-info > a',
    cart_product_discount: '#main span.discount-percentage',
    total_cart: '#main div.cart-total span.value ',
    product_name: '#main li:nth-of-type(%NUMBER) div.product-line-info > a',
    product_unit_price: '#main li:nth-of-type(%NUMBER) div.current-price > span',
    arrow_button_up: '#main li:nth-child(%NUMBER) button.touchspin-up',
    add_new_address: '#checkout-addresses-step p.add-address',
    company_input: '#delivery-address input[name="company"]',
    vat_number_input: '#delivery-address input[name="vat_number"]',
    address_input: '#delivery-address input[name="address1"]',
    address_second_input: '#delivery-address input[name="address2"]',
    zip_code_input: '#delivery-address input[name="postcode"]',
    city_input: '#delivery-address input[name="city"]',
    country_input: '#delivery-address select[name="id_country"]',
    phone_input: '#delivery-address input[name="phone"]',
    invoice_company_input: '#invoice-address input[name="company"]',
    invoice_vat_number_input: '#invoice-address input[name="vat_number"]',
    invoice_address_input: '#invoice-address input[name="address1"]',
    invoice_address_second_input: '#invoice-address input[name="address2"]',
    invoice_zip_code_input: '#invoice-address input[name="postcode"]',
    invoice_city_input: '#invoice-address input[name="city"]',
    invoice_country_input: '#invoice-address select[name="id_country"]',
    invoice_phone_input: '#invoice-address input[name="phone"]',
    use_address_for_facturation_input: '#use_same_address ',
    product_current_price: '.current-price > span[itemprop="price"]',
    display_after_carrier_link_widget: '#hook-display-after-carrier p[contains(text(),"%NAME")]',
    display_after_carrier_second_link_widget: '#hook-display-after-carrier div:nth-child(2) p',
    modal_content: '#blockcart-modal div.modal-content ',
    cart_page: '#cart ',
    cart_body: '#main div.body:nth-child(1)',
    country_list: '#delivery-address select[name="id_country"]',
    modal_product_picture: '#blockcart-modal img.product-image',
    modal_product_name: '#blockcart-modal h6.product-name',
    modal_product_unit_price: '#blockcart-modal  div:nth-child(2) > p:nth-child(2)',
    modal_product_quantity: '#blockcart-modal  div:nth-child(2) > p:nth-child(3)',
    modal_cart_product_count: '#blockcart-modal  p.cart-products-count',
    modal_total_products: '#blockcart-modal div.cart-content p:nth-child(2)',
    modal_total_shipping: '#blockcart-modal p:nth-of-type(3)',
    modal_total: '#blockcart-modal p:nth-of-type(4)',
    product_picture: '#main img[alt="%PRODUCT"]',
    shipping_value: '#cart-subtotal-shipping > span.value',
    product_total_price: '#main li:nth-of-type(%NUMBER) span.product-price > strong',
    checkout_total_price: '#js-checkout-summary div.cart-summary-totals div.cart-total span:nth-of-type(2)',
    confirmation_product_picture: '#order-items img[src*="%PRODUCT"]',
    confirmation_product_name: '#order-items > div > div:nth-child(%ID) div.details > span',
    confirmation_product_unit_price: '#order-items > div > div:nth-child(%ID) > div.qty div.text-xs-left',
    confirmation_product_quantity: '#order-items  div:nth-child(%ID) div:nth-of-type(3)  div:nth-of-type(2)',
    confirmation_product_total_price: '#order-items > div >  div:nth-child(%ID)  div.qty  div:nth-child(3)',
    confirmation_shipping_price: '#order-items table > tbody > tr:nth-child(2) > td:nth-child(2)',
    confirmation_total_price: '#order-items  table > tbody > tr.font-weight-bold  td:nth-child(2)',
    confirmation_sub_total_price: '#order-items table > tbody > tr:nth-child(1) > td:nth-child(2)',
    basic_price_product: '#order-items div:nth-child(%I) div.qty div div:nth-child(1)',
    product_combination: '#order-items div:nth-child(%I) div.details span',
    quantity_product: '#order-items div:nth-child(%I) div.qty div:nth-child(2)',
    total_product: '#order-items div:nth-child(%I) div.qty div:nth-child(3)',
    order_total_tax: '#order-items div.order-confirmation-table tr:nth-child(4) td:nth-child(2)',
    order_total_tax_excl_value: '#order-items div.order-confirmation-table tr:nth-child(4) td:nth-child(2)',
    order_amount: '#content-hook_payment_return dd:nth-child(1)',
    payment_method: '#order-details li:nth-child(2)',
    product_details_tab: '#main a [href="#product-details"]',
    product_available_quantity_span: '#main div[class*=product-quantities] span',
    product_name_link: '#main li.cart-item a .label ',
    product_customization_link: '#main a [text()="Product customization"]):nth-child(%I)',
    product_customization_modal: 'div.product-customization-line div:nth-child(%R)):nth-child(%I)',
    product_customization_modal_image: ' div.product-customization-line img',
    product_customization_close_modal_button: 'button.close:nth-child(%I)',
    customization_error_message: '#notifications article.alert-danger ul li',
  },
  CustomerAccount: {
    order_history_button: '#history-link',
    details_buttons: 'a [data-link-action="view-order-details"]',
    details_button: '#content tr:nth-of-type(1) > td:nth-of-type(6) > a [data-link-action*=details]',
    order_details_words: '#main h1',
    order_infos_block: '#order-infos ',
    order_status_block: '#order-history ',
    invoice_address_block: '#invoice-address ',
    order_products_block: '#order-products ',
    request_return_button: '#order-return-form button',
    add_message_block: '#content section.order-message-form box ',
    message_input: '#content textarea [name="msgText"]',
    send_button: '#content button[name="submitMessage"]',
    success_panel: '#notifications article.alert alert-success ',
    product_name: '#order-products td:nth-child(1) a [contains(text(),"%PRODUCTNAME")]'
  }
};
