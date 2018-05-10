$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("G:/Javaprogramming/FBBDD/FacebookBDD/src/main/java/features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "FacebookLogin",
  "description": "",
  "id": "facebooklogin",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "FacebookLoginTest",
  "description": "",
  "id": "facebooklogin;facebooklogintest",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Title of login page is facebook",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enters username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 42491062285,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_login_page_is_freTitleOfLoginpageisFacebook()"
});
formatter.result({
  "duration": 29793318,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_enters_username_and_password()"
});
formatter.result({
  "duration": 340648917,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 22630021,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_home_page()"
});
formatter.result({
  "duration": 6930979,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_close_the_browser()"
});
formatter.result({
  "duration": 3180227833,
  "status": "passed"
});
});