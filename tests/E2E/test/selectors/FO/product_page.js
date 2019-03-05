module.exports = {
  productPage: {
    first_product: '#content article:nth-child(1) h3',
    first_product_size: '#group_1',
    first_product_quantity: '#quantity_wanted',
    first_product_color: '#group_2 li:nth-child(2) input',
    product_name: '#main h1[itemprop=name]:nth-child(1)',
    product_price: '#main span[itemprop=price]:nth-child(1)',
    product_reference: '#main span[itemprop=sku]:nth-of-type(1)',
    product_manufacturer: '//*[@id="product-details"]//div[@class="product-manufacturer"]/a',
    product_quantity: '#product-details > div.product-quantities > span',
    pack_product_name: '//*[@id="add-to-cart-or-refresh"]//article[%P]//div[@class="pack-product-name"]/a',
    pack_product_price: '//*[@id="add-to-cart-or-refresh"]//article[%P]//div[@class="pack-product-price"]',
    pack_product_quantity: '//*[@id="add-to-cart-or-refresh"]//article[%P]//div[@class="pack-product-quantity"]',
    product_size: '//*[@id="group_1"]',
    product_color: '(//*[@id="group_3"]//span)[2] | (//*[@id="group_2"]//span)[2]',
    see_all_products: '//*[@id="content"]//a[contains(@class, "all-product-link")]',
    first_product_all: '(//*[@id="js-product-list"]//article//a)[1]',
    pagination_next: '//*[@id="js-product-list"]//a[contains(@class, "next")]',
    pagination_previous: '//*[@id="js-product-list"]//a[contains(@class, "previous")]',
    current_page: '//*[@id="js-product-list"]//ul[contains(@class, "page-list")]/li[@class="current"]/a',
    product_discount_details: '//*[@id="main"]//span[contains(@class, "discount")]',
    quick_view_add_to_cart: '#add-to-cart-or-refresh button[data-button-action*=add-to-cart]',
    products_number: '//*[@id="js-product-list-top"]//p',
    offline_warning_message: '//div[contains(@class, "alert-warning")]//p',
    product_discounts_table: '//*[@id="add-to-cart-or-refresh"]//tbody/tr[%R]/td[%D]',
    second_product: '(//*[@id="content"]//h3[@itemprop="name"])[2]',
    product_availability_message: '//*[@id="product-availability"]',
    product_summary: '(//*[@itemprop="description"]//p)[1]',
    product_description: '//*[@id="description"]',
    product_detail_tab: '//*[@role="tablist"]//li[2]',
    attachments_tab: '//*[@id="main"]//div[@class="product-information"]//a[@aria-controls="attachments"]',
    cloths_category: '//*[@id="category-3"]',
    second_product_clothes_category: '//*[@id="js-product-list"]//article[2]',
    product_footer_linkwidget: '//*[@id="main"]/div[2]//p[contains(text(),"%DISPLAYFOOTERPRODUCT")]',
    filename_link: '(//*[@id="attachments"]//a)[%N]',
    product_tab_list: '//*[@role="tablist"]//li[%I]',
    second_product_footer_linkwidget: '//*[@id="main"]/div[2]/div/div[2]/p',
    widget_after_product_thumbs: '//*[@id="content"]//div[contains(@class,"links")]//p[contains(text(),"%NAME")]',
    second_widget_after_product_thumbs: '//*[@id="content"]//div[contains(@class,"links")]//div[2]/p',
    display_footer_product_linkwidget: '//*[@id="main"]/div[2]/div//p[contains(text(),"%DISPLAYFOOTERPRODUCT")]',
    display_second_footer_product_linkwidget: '//*[@id="main"]/div[2]/div/div[2]/p',
    product_page: '//*[@id="product"]',
    breadcrumb_nav: '//*[contains(@class, "breadcrumb")]',
    product_section: '//*[@id="main"]/div[1]/div[%I]',
    category_page: '//*[@id="category"]',
    left_column_block: '//*[@id="left-column"]',
    pagination_block: '//*[@id="js-product-list"]/nav',
    productLink: '//*[@id="js-product-list"]//a[contains(text(), "%PRODUCTNAME")]',
    product_feature_block: '#product-details > section > dl',
    value_feature_text: '//*[@id="product-details"]/section//dd/br',
    product_value_text: '#product-details > section dd:%B-of-type',
    product_feature_text: '#product-details > section dt:%B-of-type',
    product_tax_label: '//*[@id="main"]//div[@class="tax-shipping-delivery-label" and (contains(text(),"Tax excluded") or contains(text(),"Tax included") )] ',
    file_description: '//*[@id="attachments"]/section/div/p',
    pagination_number_link: '//*[@id="js-product-list"]//nav//a[contains(text(), "%NUM")]',
    product_pictures: '//*[@id="content"]//ul[contains(@class,"product-images")]/li[%ID]/img[@title="%LEGEND"]',
    unit_price_text: '//*[@id="main"]//p[contains(@class,"product-unit-price")]',
    product_on_sale_flag: '//li[contains(@class, "on-sale")]',
    quick_view_product_price: '//div[@class="current-price"]//span[@itemprop="price"]',
    quick_view_product_discount: '//div[@class="current-price"]//span[contains(@class,"discount")]',
    page_meta_title: 'head > title',
    page_meta_description: '//meta[@name="description"]',
    page_link: '/html/head/link[1]',
    alert_bloc: '//*[@id="notifications"]//article',
    product_online_only_flag: '//*[@id="content"]//li[contains(@class, "online-only")]',
    product_name_link: '//*[@id="js-product-list"]//a[contains(text(),"%S")]',
    product_condition: '//*[@id="product-details"]/div[@class="product-condition"]/span',
    product_customization_message: '#main li:nth-of-type(%I) textarea.product-message',
    save_customization_button: '//*[@id="main"]//button[@name="submitCustomizedData"]',
    product_customization_file: '(//*[contains(@class, "file-input")])[%I]',
    attachment_title: '//*[@id="attachments"]//div[@class="attachment"]//a',
    attachment_description: '//*[@id="attachments"]//div[@class="attachment"]//p',
    delete_shopping_cart_item: '//*[@id="main"]//a[@class="remove-from-cart"]'
  }
};
