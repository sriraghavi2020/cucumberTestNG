$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Kiriti/Test_Automation/eclipse-copy/Cucumber_TestNG/src/main/java/features/login.feature");
formatter.feature({
  "line": 1,
  "name": "TargetAus feature",
  "description": "",
  "id": "targetaus-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "TargetAus login page test",
  "description": "",
  "id": "targetaus-feature;targetaus-login-page-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Already in loging page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "confirm login page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "enter user name \"\u003cusername\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press login button",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "targetaus-feature;targetaus-login-page-test;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 14,
      "id": "targetaus-feature;targetaus-login-page-test;;1"
    },
    {
      "cells": [
        "sriraghavi2020@gmail.com",
        "buvimr94"
      ],
      "line": 15,
      "id": "targetaus-feature;targetaus-login-page-test;;2"
    },
    {
      "cells": [
        "kiritik9@gmail.com",
        "kiriti"
      ],
      "line": 16,
      "id": "targetaus-feature;targetaus-login-page-test;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "TargetAus login page test",
  "description": "",
  "id": "targetaus-feature;targetaus-login-page-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Already in loging page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "confirm login page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "enter user name \"sriraghavi2020@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "enter password \"buvimr94\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press login button",
  "keyword": "Then "
});
formatter.match({
  "location": "login_StepDef.already_in_loging_page()"
});
formatter.result({
  "duration": 9523724700,
  "status": "passed"
});
formatter.match({
  "location": "login_StepDef.confirm_login_page()"
});
formatter.result({
  "duration": 2256918500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sriraghavi2020@gmail.com",
      "offset": 17
    }
  ],
  "location": "login_StepDef.enter_user_name(String)"
});
formatter.result({
  "duration": 2078091800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "buvimr94",
      "offset": 16
    }
  ],
  "location": "login_StepDef.enter_password(String)"
});
formatter.result({
  "duration": 247641400,
  "status": "passed"
});
formatter.match({
  "location": "login_StepDef.press_login_button()"
});
formatter.result({
  "duration": 1165234900,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "TargetAus login page test",
  "description": "",
  "id": "targetaus-feature;targetaus-login-page-test;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Already in loging page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "confirm login page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "enter user name \"kiritik9@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "enter password \"kiriti\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press login button",
  "keyword": "Then "
});
formatter.match({
  "location": "login_StepDef.already_in_loging_page()"
});
formatter.result({
  "duration": 5892023500,
  "status": "passed"
});
formatter.match({
  "location": "login_StepDef.confirm_login_page()"
});
formatter.result({
  "duration": 691776700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kiritik9@gmail.com",
      "offset": 17
    }
  ],
  "location": "login_StepDef.enter_user_name(String)"
});
formatter.result({
  "duration": 467811700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kiriti",
      "offset": 16
    }
  ],
  "location": "login_StepDef.enter_password(String)"
});
formatter.result({
  "duration": 483836300,
  "status": "passed"
});
formatter.match({
  "location": "login_StepDef.press_login_button()"
});
formatter.result({
  "duration": 628530700,
  "status": "passed"
});
});