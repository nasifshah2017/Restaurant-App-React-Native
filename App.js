import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";

const navigator = createStackNavigator({

    Search: SearchScreen,       // Search Screen
    ResultsShow: ResultsShowScreen

}, {

    initialRouteName: "Search",  // Home Page

    defaultNavigationOptions: {

      title: "Business Search"    // Default Title
    }

});

export default createAppContainer(navigator);