Feature: FacebookLogin
Scenario Outline: FacebookLoginTest
Given user is already on login page
When Login page Title is facebook
Then userisonHomePage"<username>" and "<password>"
 Then user close the browser
 Examples:
	| username | password |
	| paragborawake81@gmail.com | paragborawake81 |
	