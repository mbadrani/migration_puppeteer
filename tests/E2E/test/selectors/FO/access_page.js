module.exports = {
  AccessPageFO: {
    sign_in_button: '#_desktop_user_info a',
    login_input: '#login-form input[name="email"]',
    password_inputFO: '#login-form input[name="password"]',
    login_button: '#login-form footer button',
    sign_out_button: '#_desktop_user_info a:nth-of-type(1)',
    logo_home_page: '#_desktop_logo a',
    product_list_button: '#content section a',
    categories_list: '#left-column div:nth-child(1) ul li:nth-child(2) ul',
    category_name: '#left-column div.categories a [text()="%NAME"]',
    shopping_cart_button: '#_desktop_cart div',
    top_sellers_block: ' h1[contains(text(), "Best Sellers")]',
    new_products_block: ' h1[contains(text(), "New products")]',
    sitemap: '#link-static-page-sitemap-2 ',
    page_link: '#main a [title="%pageName"]',
    page_content: '#content p',
    address_information_link: '#addresses-link ',
    address_information: '#address-%ID address',
    addresses_warning: '#notifications li',
    identity_link: '#identity-link ',
    create_account_button: '#content div.no-account a',
    page_category: '#wrapper a span[contains(text(),"%CATEGORY")]',
    review_page_link: '#content a [contains(text(),"%PAGENAME")]',
    footer_block: '#footer p[contains(text(),"%FOOTERBLOCKNAME")]',
    second_footer_block: '#footer div.col-md-6 wrapper"]:nth-child(2) p',
    footer_block_link_widget: ' *.footer-container p[contains(text(),"%FOOTERBLOCKNAME")]',
    footer_block_second_link_widget: ' *.footer-container div.col-md-6 wrapper"]:nth-child(2) p',
    display_before_footer_linkwidget: '#footer div:nth-child(1) div div:nth-child(3) div p[contains(text(),"%NAME")]',
    display_before_footer_second_linkwidget: '#footer div:nth-child(1) div div:nth-child(3) div div:nth-child(2) p',
    home_link_widget: '#content div:nth-child(3) div p[contains(text(),"%HOMELINKWIDGET")]',
    second_home_link_widget: '#content div:nth-child(3) div:nth-child(2) p',
    display_nav1_link_widget: '#header nav div div div:nth-child(1) div:nth-child(1) div:nth-child(2) div p[contains(text(),"%NAVLINKWIDGET")]',
    second_display_nav1_link_widget: '#header nav div div div:nth-child(1) div:nth-child(1) div:nth-child(2) div div:nth-child(2) p',
    display_nav2_link_widget: '#header nav div div div:nth-child(1) div:nth-child(2) div:nth-child(4) div p[contains(text(),"%NAVLINKWIDGET")]',
    second_display_nav2_link_widget: '#header nav div div div:nth-child(1) div:nth-child(2) div:nth-child(4) div div:nth-child(2) p',
    nav_full_width_link_widget: '#header div:nth-child(3) div p[contains(text(),"%NAVFULLWIDTHLINKWIDGET")]',
    terms_and_conditions_input: '#customer-form input[contains(name,"psgdpr")]',
    second_nav_full_width_link_widget: '#header div:nth-child(3) div div:nth-child(2) p',
    nav_left_column_link_widget: '#left-column div.links p[contains(text(),"%NAVLEFTCOLUMNLINKWIDGET")]',
    second_nav_left_column_link_widget: '#left-column div.links p:nth-child(2)',
    nav_shopping_cart_link_widget: ' *.card cart-summary div.links p[contains(text(),"%NAVSHOPPINGCARTLINKWIDGET")]',
    second_shopping_cart_link_widget: '( *.card cart-summary div.links p):nth-child(2)',
    nav_shopping_cart_footer_link_widget: ' div.cart-grid-body p[contains(text(),"%NAVSHOPPINGCARTFOOTERLINKWIDGET")]',
    second_nav_shopping_cart_footer_link_widget: ' div.cart-grid-body div:nth-child(2) p',
    display_top_link_widget: '#header div:nth-child(2) div div:nth-child(1) div:nth-child(2) div:nth-child(3) div p[contains(text(),"%DISPLAYTOP")]',
    second_display_top_link_widget: '#header div:nth-child(2) div div:nth-child(1) div:nth-child(2) div:nth-child(3) div div:nth-child(2) p',
    not_found_error_message: '#main h1',
    product_name: '#js-product-list h2 a [contains(text(),"%PAGENAME")]',
    personal_info: '#footer_account_list a [title="Personal info"]',
    currency_list_select: '#_desktop_currency_selector button',
    currency_list_element: '#_desktop_currency_selector li a [contains(text(),"%NAME")]',
    selected_currency_option: '#_desktop_currency_selector select option[selected="selected" and (text()="%D")]',
    selected_language_option: '#_desktop_language_selector select option[selected="selected" and (text()="%D")]',
    account: '#_desktop_user_info > div.user-info > a.account > span',
    selected_language_by_isocode_option: '#_desktop_language_selector select option[selected="selected" and data-iso-code="%ID"]',
    language_bloc: '#_desktop_language_selector',
    popular_products_block: '#content-hook-order-confirmation-footer > section',
    category_title: '#js-product-list-header h1',
    product_name_title: '#main > h1',
  }
};
