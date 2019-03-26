const {languageFO} = require('../selectors/FO/index');
const exec = require('child_process').exec;
const puppeteer = require('puppeteer');
let path = require('path');
let fs = require('fs');
let pdfUtil = require('pdf-to-text');
const {AccessPageBO} = require('../selectors/BO/access_page');
require('../globals');

let options = {
  timeout: 30000,
  headless: global.headless,
  defaultViewport: {
    width: 0,
    height: 0
  },
  args: [`--window-size=${1280},${1024}`]
};

global.tab = [];
global.isOpen = false;
global.param = [];
global.selectValue = '';

class CommonClient {

  async open() {
    global.browser = await puppeteer.launch(options);
    global.page = await this.getPage(0);
    //Set the user agent and the accept language for headless mode => Chrome Headless will closely emulate Chrome
    if (global.headless) {
      const headlessUserAgent = await page.evaluate(() => navigator.userAgent);
      const chromeUserAgent = headlessUserAgent.replace('HeadlessChrome', 'Chrome');
      await page.setUserAgent(chromeUserAgent);
      await page.setExtraHTTPHeaders({
        'accept-language': 'en-US,en;q=0.8'
      });
    }
  }

  async getPage(id) {
    const pages = await browser.pages();
    return await pages[id];
  }

  async stopTracing() {
    await page.tracing.stop();
  }

  async close() {
    await browser.close();
  }

  async startTracing(testName = 'test') {
    await page.tracing.start({
      path: 'test/tracing/' + testName + '.json',
      categories: ['devtools.timeline']
    });
  }

  async signInBO(selector, link = global.URL, login = global.adminEmail, password = global.adminPassword) {
    await page.goto(link + '/admin-dev');
    await this.waitAndSetValue(selector.login_input, login);
    await this.waitAndSetValue(selector.password_inputBO, password);
    await this.waitForExistAndClick(selector.login_buttonBO);
    await page.waitFor(selector.menuBO, {timeout: 120000});
  }

  async waitAndSetValue(selector, value, wait = 0, options = {}, isFrame = false) {
    await page.waitFor(wait);
    if (isFrame) {
      await frame.waitFor(selector, options);
      await frame.click(selector);
    } else {
      await page.waitFor(selector, options);
      await page.click(selector);
    }
    await page.keyboard.down('Control');
    await page.keyboard.down('A');
    await page.keyboard.up('A');
    await page.keyboard.up('Control');
    await page.keyboard.press('Backspace');
    if (isFrame) {
      await frame.type(selector, value);
    } else {
      await page.type(selector, value);
    }
  }

  async pause(timeoutOrSelectorOrFunction, options = {}) {
    await page.waitFor(timeoutOrSelectorOrFunction, options);
  }

  async waitForExistAndClick(selector, wait = 0, options = {}, isFrame = false) {
    await page.waitFor(wait);
    if (isFrame) {
      await frame.waitFor(selector);
      await frame.click(selector, options);
    } else {
      await page.waitFor(selector);
      await page.click(selector, options);
    }
  }

  async isVisible(selector, wait = 0) {
    await page.waitFor(wait);
    const exists = await page.$(selector) !== null;
    if (exists) {
      global.isVisible = await page.evaluate((selector) => {
        const e = document.querySelector(selector);
        const style = window.getComputedStyle(e);
        return style && style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0';
      }, selector);
    } else {
      global.isVisible = exists;
    }
  }

  async closeBoarding(selector) {
    if (global.isVisible) {
      await page.click(selector);
      await page.waitFor(2000);
    } else {
      await page.waitFor(1000);
    }
  }

  async screenshot(fileName = 'screenshot') {
    await page.screenshot({path: 'test/screenshots/' + fileName + global.dateTime + '.png'});
  }

  async goToSubtabMenuPage(menuSelector, selector) {
    let isOpen = false;
    let result = await page.evaluate((menuSelector) => {
      isOpen = document.querySelector(menuSelector).matches('open');
      return isOpen;
    }, menuSelector);
    if (result === false) {
      await this.waitForExistAndClick(menuSelector);
    }
    await this.waitForExistAndClick(selector, 2000);
  }

  async scrollWaitForVisibleAndClick(selector, wait = 0, timeout = 40000) {
    await page.waitFor(selector);
    await page.evaluate((selector) => {
      document.querySelector(selector).scrollIntoView();
    }, selector);
    await this.waitForVisibleAndClick(selector, wait, timeout)
  }

  async isExisting(selector, wait = 0) {
    await page.waitFor(wait);
    const exists = await page.$(selector) !== null;
    expect(exists).to.be.true;
    if (exists) {
      //If exist, element should be visible too
      await this.isVisible(selector);
      expect(global.isVisible).to.be.true;
    }
  }

  async waitForVisibleAndClick(selector, wait = 0, timeout = 30000) {
    await page.waitFor(wait);
    await page.waitFor(selector, {visible: true, timeout: timeout});
    await page.click(selector);
  }

  async checkTextValue(selector, textToCheckWith, parameter = 'equal', wait = 0, isFrame = false) {
    let content = {};
    if (isFrame) {
      content = global.frame;
    } else {
      content = global.page;
    }
    switch (parameter) {
      case "equal":
        await content.waitFor(wait);
        await content.waitFor(selector);
        await content.$eval(selector, el => el.innerText).then((text) => {
          if (text.indexOf('\t') != -1) {
            text = text.replace("\t", "");
          }
          expect(text.trim()).to.equal(textToCheckWith)
        });
        break;
      case "contain":
        await content.waitFor(wait);
        await content.waitFor(selector);
        await content.$eval(selector, el => el.innerText).then((text) => expect(text).to.contain(textToCheckWith));
        break;
      case "deepequal":
        await content.waitFor(wait);
        await content.waitFor(selector);
        await content.$eval(selector, el => el.innerText).then((text) => expect(text).to.deep.equal(textToCheckWith));
        break;
      case "notequal":
        await content.waitFor(wait);
        await content.waitFor(selector);
        await content.$eval(selector, el => el.innerText).then((text) => expect(text).to.not.equal(textToCheckWith));
        break;
      case "greaterThan":
        await content.waitFor(wait);
        await content.waitFor(selector);
        await content.$eval(selector, el => el.innerText).then((text) => expect(parseInt(text)).to.be.gt(textToCheckWith));
        break;
    }
  }

  async waitForSymfonyToolbar(AddProductPage, wait = 4000) {
    await page.waitFor(wait);
    await this.isVisible(AddProductPage.symfony_toolbar_block);
    if (global.isVisible) {
      await this.waitForExistAndClick(AddProductPage.symfony_toolbar);
    }
  }

  async alertAccept(action = 'accept') {
    switch (action) {
      case "accept":
        await page.on("dialog", (dialog) => {
          dialog.accept();
        });
        break;
      default :
        await page.on("dialog", (dialog) => {
          dialog.dismiss();
        });
    }
  }

  async scrollTo(selector) {
    await page.waitFor(selector);
    await page.evaluate((selector) => {
      document.querySelector(selector).scrollIntoView();
    }, selector);
  }

  async uploadPicture(fileName, selector) {
    const inputFile = await page.$(selector);
    await inputFile.uploadFile(path.join(__dirname, '..', 'datas', fileName));
  }

  async checkIsNotVisible(selector) {
    await page.waitFor(2000);
    await this.isVisible(selector);
    await expect(isVisible).to.be.false;
  }

  async isNotExisting(selector, wait = 0) {
    await page.waitFor(wait);
    const exists = await page.$(selector) === null;
    expect(exists).to.be.true;
  }

  async waitForExist(selector, option = {}) {
    await page.waitFor(selector, option);
  }

  async deleteCookie() {
    let cookiesTable = await page.cookies();
    await page.deleteCookie({name: cookiesTable[1].name});
  }

  async refresh() {
    await page.reload();
  }

  async localhost(link, installDirectory) {
    await page.goto(link + '/' + installDirectory);
  }

  async signInFO(selector, link = global.URL) {
    await page.goto(link);
    await page._client.send('Emulation.clearDeviceMetricsOverride');
    await this.waitForExistAndClick(selector.sign_in_button, 1000);
    await this.waitAndSetValue(selector.login_input, 'pub@prestashop.com');
    await this.waitAndSetValue(selector.password_inputFO, '123456789');
    await this.waitForExistAndClick(selector.login_button);
    await this.waitForExistAndClick(selector.logo_home_page);
  }

  async waitForVisible(selector, options = {visible: true}) {
    await page.waitFor(selector, options);
  }

  async waitAndSelectByValue(selector, value, wait = 0, isFrame = false) {
    await page.waitFor(wait);
    if (isFrame) {
      await frame.waitFor(selector);
      await frame.select(selector, value);
    } else {
      await page.waitFor(selector);
      await page.select(selector, value);
    }
  }

  async signOutBO() {
    await this.pause(2000);
    await this.deleteCookie();
  }

  async deleteCookie() {
    let cookiesTable = await page.cookies();
    await page.deleteCookie({name: cookiesTable[1].name});
    await this.refresh();
  }

  async refresh() {
    await page.reload();
  }

  async changeLanguage(language = 'en') {
    await this.waitForExistAndClick(languageFO.language_selector);
    await this.pause(1000);
    await this.waitForVisibleAndClick(languageFO.language_option.replace('%LANG', language));
  }

  async searchByValue(nameSelector, buttonSelector, value) {
    await this.pause(nameSelector);
    await this.waitAndSetValue(nameSelector, value, 2000);
    await this.waitForExistAndClick(buttonSelector);
  }

  async checkAttributeValue(selector, attribute, textToCheckWith, parameter = 'equal', wait = 0) {
    await page.waitFor(wait);
    await page.waitFor(selector);

    let value = await page.evaluate((selector, attribute) => {
      let elem = document.querySelector(selector);
      return elem.getAttribute(attribute);
    }, selector, attribute);
    switch (parameter) {
      case 'contain': {
        expect(value).to.be.contain(textToCheckWith);
        break;
      }
      case 'equal': {
        expect(value).to.be.equal(textToCheckWith);
        break;
      }
      case 'notequal': {
        expect(value).to.not.equal(textToCheckWith);
        break;
      }
    }
  }

  async signOutFO(selector) {
    await this.waitForExistAndClick(selector.sign_out_button);
    await this.waitForExist(selector.sign_in_button, 90000);
    await this.deleteCookie();
  }

  async accessToFO(selector) {
    await page.goto(global.URL);
    await this.waitForExistAndClick(selector.logo_home_page);
  }

  async scrollWaitForExistAndClick(selector, wait = 0, timeout = 90000) {
    await this.scrollTo(selector);
    await this.waitForExistAndClick(selector, wait, {timeout: timeout})
  }

  async getTextInVar(selector, globalVar, split = false, timeout = 90000) {
    await page.waitFor(2000);
    await this.waitForExist(selector, timeout);
    if (split) {
      await page.$eval(selector, el => el.innerText).then((text) => {
        global.tab[globalVar] = text.split(': ')[1];
      });
    } else {
      await page.$eval(selector, el => el.innerText).then((text) => {
        global.tab[globalVar] = text;
      });
    }
  }

  async moveToObject(selector, wait = 0) {
    await page.waitFor(wait);
    await page.hover(selector);
  }

  async getAttributeInVar(selector, attribute, globalVar, timeout = 90000) {
    await this.waitForExist(selector, timeout);
    let variable = await page.$eval(selector, (el, attribute) => {
      if (el.getAttribute(attribute) !== '') {
        return el.getAttribute(attribute);
      } else {
        return el[attribute];
      }
    }, attribute);
    global.tab[globalVar] = await variable;
  }

  /**
   * This function searches the data in the table in case a filter input exists
   * @param selector
   * @param data
   * @returns {*}
   */
  async search(selector, data) {
    await this.waitAndSetValue(selector, data);
    await page.keyboard.press('Enter');
  }

  async closePsAddonsAlert() {
    await this.isVisible(AccessPageBO.psAddons_alert_close_button);
    if (global.isVisible) {
      await this.waitForExistAndClick(AccessPageBO.psAddons_alert_close_button);
    }
  }

  async switchWindow(id, wait = 0) {
    await page.waitFor(5000, {waituntil: 'networkidle2'});
    await page.waitFor(wait);
    global.page = await this.getPage(id);
    await page.bringToFront();
    await page._client.send('Emulation.clearDeviceMetricsOverride');
  }

  async goToFrame(frameName) {
    page.waitFor(4000);
    let frame = await page.frames().find(frame => frame.name().includes(frameName));
    global.frame = frame;
  }

  async keys(button) {
    await page.keyboard.press(button);
  }

  async waitAndSelectByVisibleText(selector, value, wait = 0, isFrame = false) {
    let content = {};
    let textValue = '';
    if (isFrame) {
      content = global.frame;
    } else {
      content = global.page;
    }
    await content.waitFor(wait);
    await content.waitFor(selector);
    let result = await page.evaluate((selector, value) => {
      let options = document.querySelector(selector).options;
      for (let i = 0; i < options.length; i++) {
        if (options[i].innerText.includes(value)) {
          textValue = options[i].value;
          return textValue;
        }
      }
    }, selector, value);
    global.selectValue = await result;
    await content.select(selector, result);
  }

  async checkTextElementValue(selector, textToCheckWith, parameter = 'equal', wait = 0) {
    switch (parameter) {
      case "equal":
        await page.waitFor(wait);
        await page.waitFor(selector);
        await page.$eval(selector, el => el.value).then((text) => expect(text).to.equal(textToCheckWith));
        break;
      case "contain":
        await page.waitFor(wait);
        await page.waitFor(selector);
        await page.$eval(selector, el => el.value).then((text) => expect(text).to.contain(textToCheckWith));
        break;
    }
  }

  checkList(selector) {
    page.$$(selector)
      .then(function (elements) {
        expect(elements).to.have.lengthOf.above(0);
      }, selector)
  }

  async checkExistence(selector, data, pos) {
    if (global.isVisible) {
      await page.waitFor(selector.replace('%ID', pos));
      await page.$eval(selector.replace('%ID', pos), el => el.innerText).then((text) => expect(text.trim).to.equal(data.trim));
    }
    else {
      await page.waitFor(selector.replace('%ID', pos - 1));
      await page.$eval(selector.replace('%ID', pos - 1), el => el.innerText).then((text) => expect(text.trim).to.equal(data.trim));
    }
  }

  async checkFile(folderPath, fileName, wait = 0) {
    await fs.stat(folderPath + fileName, function (err, stats) {
      err === null && stats.isFile() ? global.existingFile = true : global.existingFile = false;
    });
    await page.waitFor(wait);
    await expect(global.existingFile).to.be.true;
  }

  async getCustomDate(numberOfDay) {
    let today = await new Date();
    await today.setDate(today.getDate() + numberOfDay);
    let dd = await today.getDate();
    let mm = await today.getMonth() + 1; //January is 0!
    let yyyy = await today.getFullYear();
    if (dd < 10) {
      dd = await '0' + dd;
    }
    if (mm < 10) {
      mm = await '0' + mm;
    }
    return await yyyy + '-' + mm + '-' + dd;
  }

  async setDownloadBehavior() {
    await page.waitFor(4000);
    await page._client.send('Page.setDownloadBehavior', {
      behavior: 'allow',
      downloadPath: global.downloadsFolderPath
    });
  }

  async deleteFile(folderPath, fileName, extension = "", wait = 0) {
    fs.unlinkSync(folderPath + fileName + extension);
    await page.waitFor(wait);
  }

    /**
     * Go to link, for only '<a/>'
     * @param selector, link to go to
     */
    async goToLink(selector){
        const selector_link = await page.$eval(selector, ({ href }) => href);
        await page.goto(selector_link, { waitUntil: 'networkidle0' });
    }

    /**
     * To type on texte area
     * @param selector, textarea to fill
     * @param text_value, value to write
     */
    async fillTextArea(selector,text_value){
        await page.click(selector);
        await page.keyboard.type(text_value);
    }

    /**
     * To type on input type text
     * @param selector, input to set
     * @param text_value, value to write
     */
    async fillInputText(selector,text_value){
        await page.focus(selector);
        await page.$eval(selector, el => el.setSelectionRange(0, el.value.length));
        await page.keyboard.type(text_value);
    }

    /**
     * To type on input type number
     * @param selector, input to set
     * @param number_value, value to write
     */
    async fillInputNumber(selector,number_value){
        await page.focus(selector);
        //await page.$eval(selector, el => el.click({clickCount: 3}));
        await page.evaluate( () => document.execCommand( 'selectall', false, null ) );
        await page.keyboard.type(number_value);
    }
}

module.exports = CommonClient;
