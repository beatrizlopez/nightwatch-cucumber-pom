const seleniumServer = require('selenium-server')
const phantomjs = require('phantomjs-prebuilt')
const chromedriver = require('chromedriver')

require('nightwatch-cucumber')({
  cucumberArgs: ['--require', 'features/step_definitions', '--format', 'json:reports/cucumber.json', 'features']
})

module.exports = {
  output_folder: 'reports',
  custom_assertions_path: '',
  page_objects_path: 'page_object',
  live_output: true,
  disable_colors: false,
  selenium: {
    start_process: false,
    server_path: seleniumServer.path,
    log_path: '',
    host: '127.0.0.1',
    port: 5555
  },
  test_settings: {
    default: {
      launch_url: 'https://www.google.es/',
      selenium_port: 5555,
      selenium_host: '127.0.0.1',
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true
      },
      screenshots : {
        enabled : true,
        on_failure : true,
        path: 'screenshots/'
      }
    },
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    },
    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    },
    pro: {
      globals: {
        site_url: "https://www.google.es/"
      }
    },
    local: {
      globals: {
        site_url: "https://www.google.es/"
      }
    }
  }
}