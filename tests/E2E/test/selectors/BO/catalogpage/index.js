module.exports = Object.assign(
  {
    CatalogPage: {
      success_panel: '#content > div.bootstrap > div[class*=success]',
      danger_panel: '//*[@id="content"]/div[@class="bootstrap"]/div[contains(@class, "danger")]',
      select_all_product_button: '//*[@id="bulk_action_select_all"]/..',
      action_group_button: '//*[@id="product_bulk_menu"]',
      action_button: '(//*[@id="main-div"]//div[contains(@class, "bulk-catalog")]//a)[%ID]',
      green_validation: '#main-div .alert-success .alert-text p',
      product_status_icon: '(//*[@id="product_catalog_list"]//tbody/tr[%S]//i[contains(@class, "material-icons")])[1]',
      name_search_input: '#product_catalog_list input[name="filter_column_name"]',
      search_button: '#product_catalog_list button[name="products_filter_submit"]',
      dropdown_toggle: '#product_catalog_list button.dropdown-toggle',
      delete_button: '#product_catalog_list a[onclick*="delete"]',
      delete_confirmation: '#catalog_deletion_modal [type="button"][value="confirm"]',
      close_delete_modal: '(//*[@id="catalog_deletion_modal"]//button[1])[2]',
      reset_button: '#product_catalog_list button[name*=products_filter_reset]',
      search_result_message: '#product_catalog_list td',
      //search_result_message: '//*[@id="product_catalog_list"]//td[contains(text(), "There is no result for this search")]',
      deactivate_modal: '//*[@id="catalog_deactivate_all_modal"]',
      activate_modal: '//*[@id="catalog_activate_all_progression"]//div[contains(text(), "Activating")]',
      duplicate_modal: '//*[@id="catalog_duplicate_all_modal"]',
      delete_modal: '//*[@id="catalog_deletion_modal"]'
    }
  },
  require('./feature_submenu'),
  require('./category_submenu'),
  require('./attribute_submenu'),
  require('./Manufacturers'),
  require('./stocksubmenu'),
  require('./discount_submenu'),
  require('./files')
);
