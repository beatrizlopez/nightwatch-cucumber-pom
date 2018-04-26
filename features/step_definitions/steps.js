const { client } = require('nightwatch-cucumber');
const { defineSupportCode } = require('cucumber');
const assert = require('assertthat');

defineSupportCode(({Given, Then, When}) => {

  defineSupportCode(({After, Before}) => {

    Before(() => {

      return client.init().maximizeWindow();

    });

    After(() => {

      return client.end();

    });

  });

  //Given Steps
  Given('I open google', () => {

    return client.page.indexPage()
      .navigate();

  });
 
  //When Steps

  When('I click on search button', () => {

    return client.page.indexPage()
      .click('@searchButton');

  });

    When('I fill search bar with {string}', (searchText) => {

    return client.page.indexPage()
      .setValue('@googleBar', searchText)
      .click('@space');

  });

  When('I click on i am feeling lucky button', () => {

    return client.page.indexPage()
      .click('@searchLuckyButton');

  });


  //Then Steps

  Then(/^I see page with more than "([^"]*)" results$/, (num) => {

    return client
      .assert.equal(client.page.indexPage().getSearchResults(client) > num, true);

  });
 
  Then(/^I see results page with less than "([^"]*)" results$/, (num) => {

    return client
      .assert.equal(client.page.indexPage().getSearchResults(client) < num, true);

  });

  Then(/^I see page with less than "([^"]*)" results$/, (num) => {

     return client
      .assert.equal(client.page.indexPage().getSearchResults(client) > num, true);

  });

  Then(/^I see selenium page with title is "([^"]*)"$/, (text) => {

    return client.assert.title(text);

  });

});
