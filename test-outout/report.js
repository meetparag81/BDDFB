$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("G:/Javaprogramming/FBBDD/FacebookBDD/src/main/java/features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "FacebookLogin",
  "description": "",
  "id": "facebooklogin",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "FacebookLoginTest",
  "description": "",
  "id": "facebooklogin;facebooklogintest",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Login page Title is facebook",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "userisonHomePage\"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "facebooklogin;facebooklogintest;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 8,
      "id": "facebooklogin;facebooklogintest;;1"
    },
    {
      "cells": [
        "paragborawake81@gmail.com",
        "paragborawake81"
      ],
      "line": 9,
      "id": "facebooklogin;facebooklogintest;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 9,
  "name": "FacebookLoginTest",
  "description": "",
  "id": "facebooklogin;facebooklogintest;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Login page Title is facebook",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "userisonHomePage\"paragborawake81@gmail.com\" and \"paragborawake81\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 195034462168,
  "error_message": "org.openqa.selenium.TimeoutException: timeout\n  (Session info: chrome\u003d68.0.3440.106)\n  (Driver info: chromedriver\u003d2.31.488763 (092de99f48a300323ecf8c2a4e2e7cab51de5ba8),platform\u003dWindows NT 6.1.7600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027PARAG-PC\u0027, ip: \u0027192.168.1.203\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.31.488763 (092de99f48a300323ecf8c2a4e2e7cab51de5ba8), userDataDir\u003dC:\\Users\\Parag\\AppData\\Local\\Temp\\scoped_dir6580_6259}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d68.0.3440.106, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: b33da9460d9da7550cdfc65f9119256b\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:370)\r\n\tat com_FB_Base.TestBase.initalization(TestBase.java:59)\r\n\tat StepDefinations.LoginStepDefination.user_is_already_on_login_page(LoginStepDefination.java:26)\r\n\tat ✽.Given user is already on login page(G:/Javaprogramming/FBBDD/FacebookBDD/src/main/java/features/Login.feature:3)\r\n",
  "status": "failed"
});
