import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentScreen";
import PracticeComponentScreen from "./src/screens/PracticeComponentScreen";
import ListScreenComponent from "./src/screens/ListScreenComponent";
import FlatListExcerciseComponent from "./src/screens/FlatListExcerciseComponent";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen,
    PracticeComponents: PracticeComponentScreen,
    ListComponent: ListScreenComponent,
    FlatListExercise: FlatListExcerciseComponent,
  },
  {
    initialRouteName: "FlatListExercise",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
