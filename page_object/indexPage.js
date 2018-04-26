module.exports = {
  url: function() { 
    return this.api.globals.site_url + '/'; 
  },
  elements: {
    googleBar : '#lst-ib',

    searchButton: {
      selector: "//input[@name='btnK']",
      locateStrategy: 'xpath'
    }, 

    space: '#lga', 

    searchLuckyButton: {
      selector: "//input[@name='btnI']",
      locateStrategy: 'xpath'
    },  
    footer: '#prm-pt'
  },
  commands: [
  { 
    getSearchResults: function(browser) {

      return browser.execute(function() {

        return document
          .getElementById("resultStats")
          .textContent
          .replace(/\./g, "")
          .match("\\d+")
          .pop();

      }, [], function (result) { return result; })

    } 
  }],
};
