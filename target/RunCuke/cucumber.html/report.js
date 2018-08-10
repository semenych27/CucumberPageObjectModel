$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("findDealer.feature");
formatter.feature({
  "line": 2,
  "name": "Acceptance testing to validate Find a Dealer cars page is working fine",
  "description": "In order to validate that\r\nthe Find Dealer cars page is working fine\r\nwe will do acceptance testing",
  "id": "acceptance-testing-to-validate-find-a-dealer-cars-page-is-working-fine",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Find-Dealer"
    }
  ]
});
formatter.before({
  "duration": 4038378939,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Validate Find Dealer cars page",
  "description": "",
  "id": "acceptance-testing-to-validate-find-a-dealer-cars-page-is-working-fine;validate-find-dealer-cars-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@Find-Dealer-Positive"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on search page \"https://www.carsguide.com.au\" of carsguide website",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I move to the menu",
  "rows": [
    {
      "cells": [
        "Menu"
      ],
      "line": 12
    },
    {
      "cells": [
        "Cars for Sale"
      ],
      "line": 13
    },
    {
      "cells": [
        "Sell My Car"
      ],
      "line": 14
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on \"Find A Dealer\" link on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select Make from Make dropdown on Find a Dealer page",
  "rows": [
    {
      "cells": [
        "carMake"
      ],
      "line": 17
    },
    {
      "cells": [
        "FORD"
      ],
      "line": 18
    },
    {
      "cells": [
        "FIAT"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select Model from Model dropdown on Find a Dealer page",
  "rows": [
    {
      "cells": [
        "carModel"
      ],
      "line": 21
    },
    {
      "cells": [
        "F100"
      ],
      "line": 22
    },
    {
      "cells": [
        "500"
      ],
      "line": 23
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select location as \"ACT - All\" from SelectLocation dropdown on Find a Dealer page",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on Find Dealer button on Find a Dealer page",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should see list of searched cars from \"Ford\" on Used Search Car page",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "page title should be \"FORD F100 Dealers ACT | carsguide\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.carsguide.com.au",
      "offset": 21
    }
  ],
  "location": "SearchCarsSteps.i_am_on_search_page_https_www_carsguide_com_au_of_carsguide_website(String)"
});
formatter.result({
  "duration": 12578843858,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarsSteps.i_move_to_the_menu(String\u003e)"
});
formatter.result({
  "duration": 107507692,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Find A Dealer",
      "offset": 12
    }
  ],
  "location": "FindDealerSteps.i_click_on_link_on_Home_Page(String)"
});
formatter.result({
  "duration": 2510835064,
  "status": "passed"
});
formatter.match({
  "location": "FindDealerSteps.i_select_Make_from_Make_dropdown_on_Find_a_Dealer_page(String\u003e)"
});
formatter.result({
  "duration": 410335205,
  "status": "passed"
});
formatter.match({
  "location": "FindDealerSteps.i_select_Model_from_Model_dropdown_on_Find_a_Dealer_page(String\u003e)"
});
formatter.result({
  "duration": 173347346,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ACT - All",
      "offset": 22
    }
  ],
  "location": "FindDealerSteps.i_select_location_as_from_SelectLocation_dropdown_on_Find_a_Dealer_page(String)"
});
formatter.result({
  "duration": 143139307,
  "status": "passed"
});
formatter.match({
  "location": "FindDealerSteps.i_click_on_Find_Dealer_button_on_Find_a_Dealer_page()"
});
formatter.result({
  "duration": 1882526851,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ford",
      "offset": 41
    }
  ],
  "location": "UsedCarSteps.i_should_see_list_of_searched_cars_from_on_Used_Search_Car_page(String)"
});
formatter.result({
  "duration": 2434784,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FORD F100 Dealers ACT | carsguide",
      "offset": 22
    }
  ],
  "location": "SearchCarsSteps.page_title_should_be(String)"
});
formatter.result({
  "duration": 15702157,
  "status": "passed"
});
formatter.after({
  "duration": 2879973808,
  "status": "passed"
});
formatter.uri("searchCar.feature");
formatter.feature({
  "line": 2,
  "name": "Acceptance testing to validate Search cars page is working fine",
  "description": "In order to validate that\r\nthe search cars page is working fine\r\nwe will do acceptance testing",
  "id": "acceptance-testing-to-validate-search-cars-page-is-working-fine",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Search-Cars"
    }
  ]
});
formatter.before({
  "duration": 3260751104,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Validate search cars page",
  "description": "",
  "id": "acceptance-testing-to-validate-search-cars-page-is-working-fine;validate-search-cars-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@Search-Cars-Positive"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on search page \"https://www.carsguide.com.au\" of carsguide website",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I move to the menu",
  "rows": [
    {
      "cells": [
        "Menu"
      ],
      "line": 12
    },
    {
      "cells": [
        "Cars for Sale"
      ],
      "line": 13
    },
    {
      "cells": [
        "Sell My Car"
      ],
      "line": 14
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on \"Search Cars\" link",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select Make as \"BMW\" from AnyMake dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select Model as \"1 SERIES\" from SelectModel dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I select location as \"Australia\" from SelectLocation dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I select price as \"$10,000\" from Price dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on Find My Next Car button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I should see list of searched cars from \"BMW\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "page title should be \"Bmw 1 Series Under 10000 for Sale | carsguide\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.carsguide.com.au",
      "offset": 21
    }
  ],
  "location": "SearchCarsSteps.i_am_on_search_page_https_www_carsguide_com_au_of_carsguide_website(String)"
});
formatter.result({
  "duration": 11134812283,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarsSteps.i_move_to_the_menu(String\u003e)"
});
formatter.result({
  "duration": 116275419,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search Cars",
      "offset": 12
    }
  ],
  "location": "SearchCarsSteps.i_click_on_link(String)"
});
formatter.result({
  "duration": 5278486665,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 18
    }
  ],
  "location": "SearchCarsSteps.i_select_Make_as_from_AnyMake_dropdown(String)"
});
formatter.result({
  "duration": 166856822,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1 SERIES",
      "offset": 19
    }
  ],
  "location": "SearchCarsSteps.i_select_Model_as_from_SelectModel_dropdown(String)"
});
formatter.result({
  "duration": 225611164,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Australia",
      "offset": 22
    }
  ],
  "location": "SearchCarsSteps.i_select_location_as_from_SelectLocation_dropdown(String)"
});
formatter.result({
  "duration": 193970626,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$10,000",
      "offset": 19
    }
  ],
  "location": "SearchCarsSteps.i_select_price_as_from_Price_dropdown(String)"
});
formatter.result({
  "duration": 184999879,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarsSteps.i_click_on_Find_My_Next_Car_button()"
});
formatter.result({
  "duration": 6346502448,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 41
    }
  ],
  "location": "SearchCarsSteps.i_should_see_list_of_searched_cars_from(String)"
});
formatter.result({
  "duration": 101946,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bmw 1 Series Under 10000 for Sale | carsguide",
      "offset": 22
    }
  ],
  "location": "SearchCarsSteps.page_title_should_be(String)"
});
formatter.result({
  "duration": 27949477,
  "status": "passed"
});
formatter.after({
  "duration": 2652910337,
  "status": "passed"
});
formatter.uri("usedCarsSearch.feature");
formatter.feature({
  "line": 2,
  "name": "Acceptance testing to validate Used Search cars page is working fine",
  "description": "In order to validate that\r\ntheUSed  search cars page is working fine\r\nwe will do acceptance testing",
  "id": "acceptance-testing-to-validate-used-search-cars-page-is-working-fine",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Used-Search-Cars"
    }
  ]
});
formatter.before({
  "duration": 3242600765,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Validate used search cars page",
  "description": "",
  "id": "acceptance-testing-to-validate-used-search-cars-page-is-working-fine;validate-used-search-cars-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@Used-Search-Cars-Positive"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on search page \"https://www.carsguide.com.au\" of carsguide website",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I move to the menu",
  "rows": [
    {
      "cells": [
        "Menu"
      ],
      "line": 12
    },
    {
      "cells": [
        "Cars for Sale"
      ],
      "line": 13
    },
    {
      "cells": [
        "Sell My Car"
      ],
      "line": 14
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on \"Used Search Cars\" link on Used Search Car page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select Make as \"AUDI\" from AnyMake dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select Model on Used Search Car page",
  "rows": [
    {
      "cells": [
        "carModel"
      ],
      "line": 18
    },
    {
      "cells": [
        "A4"
      ],
      "line": 19
    },
    {
      "cells": [
        "A3"
      ],
      "line": 20
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select location as \"SA - All\" from SelectLocation dropdown on Used Search Car page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select price as \"$2,000\" from Price dropdown on Used Search Car page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on Find My Next Car button on Used Search Car page",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should see list of searched cars from \"Audi\" on Used Search Car page",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "page title should be \"Used Audi A4 Under 2000 for Sale SA | carsguide\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.carsguide.com.au",
      "offset": 21
    }
  ],
  "location": "SearchCarsSteps.i_am_on_search_page_https_www_carsguide_com_au_of_carsguide_website(String)"
});
formatter.result({
  "duration": 11200219973,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarsSteps.i_move_to_the_menu(String\u003e)"
});
formatter.result({
  "duration": 129249184,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used Search Cars",
      "offset": 12
    }
  ],
  "location": "UsedCarSteps.i_click_on_link_on_Used_Search_Car_page(String)"
});
formatter.result({
  "duration": 6041583859,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AUDI",
      "offset": 18
    }
  ],
  "location": "SearchCarsSteps.i_select_Make_as_from_AnyMake_dropdown(String)"
});
formatter.result({
  "duration": 190196551,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarSteps.i_select_Model_on_Used_Search_Car_page(String\u003e)"
});
formatter.result({
  "duration": 210168245,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SA - All",
      "offset": 22
    }
  ],
  "location": "UsedCarSteps.i_select_location_as_from_SelectLocation_dropdown_on_Used_Search_Car_page(String)"
});
formatter.result({
  "duration": 174968302,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$2,000",
      "offset": 19
    }
  ],
  "location": "UsedCarSteps.i_select_price_as_from_Price_dropdown_on_Used_Search_Car_page(String)"
});
formatter.result({
  "duration": 170839161,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarSteps.i_click_on_Find_My_Next_Car_button_on_Used_Search_Car_page()"
});
formatter.result({
  "duration": 5722764079,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 41
    }
  ],
  "location": "UsedCarSteps.i_should_see_list_of_searched_cars_from_on_Used_Search_Car_page(String)"
});
formatter.result({
  "duration": 103112,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used Audi A4 Under 2000 for Sale SA | carsguide",
      "offset": 22
    }
  ],
  "location": "SearchCarsSteps.page_title_should_be(String)"
});
formatter.result({
  "duration": 6059143,
  "status": "passed"
});
formatter.after({
  "duration": 2892356864,
  "status": "passed"
});
});