module.exports = {
  Stock: {
    edit_quantity_input:'#app tr:nth-of-type(1) div[name="qty"] input',
    product_quantity_input: '(//*[@id="app"]//div[contains(@class,"edit-qty")])[%O]/input',
    product_quantity: '#app tr:nth-of-type(%O) > td:nth-of-type(7)',
    product_quantity_modified: '(//*[@id="app"]//tr[%O]//span[contains(@class,"qty-update")])[1]',
    available_quantity_modified: '(//*[@id="app"]//tr[%O]//span[contains(@class,"qty-update")])[2]',
    save_product_quantity_button: '(//*[@id="app"]//button[contains(@class,"check-button")])[%I]',
    group_apply_button: '//*[@id="app"]//button[contains(@class,"update-qty")]',
    add_quantity_button: '(//*[@id="app"]//span[contains(@class,"ps-number-up")])[%ITEM]',
    remove_quantity_button: '(//*[@id="app"]//span[contains(@class,"ps-number-down")])[%ITEM]',
    success_panel: '//*[@id="growls"]',
    search_input: '#search form div.search-input.search input',
    search_button: '#search button[class*=search-button]',
    sort_product_icon: '//*[@id="app"]//table//div[contains(@data-sort-direction,"asc")]',
    check_sign: '//*[@id="app"]//button[@class="check-button"]',
    physical_column: '#app div > table.table tr:nth-of-type(%ID) > td:nth-of-type(5)',
    green_validation: '//*[@id="search"]/div[2]/div/button',
    product_column: '#app div > table.table tr:nth-of-type(%O) > td:nth-of-type(1)',
    available_column: '#app div table.table tr:nth-of-type(%ID) > td:nth-of-type(7)',
    reference_product_column: '#app div > table.table tr:nth-of-type(%O) > td:nth-of-type(2)',
    employee_column: '#app div > table.table tr:nth-of-type(%O) > td:nth-of-type(6)',
    product_selector: '//*[@id="app"]//table//tr//p[contains(text(),"%ProductName")]',
    success_hidden_panel: '//*[@id="search"]//div[contains(@class,"alert-box")]//div[contains(@class,"alert-success")]/p/span'
  }
};
