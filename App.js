import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentScreen";
import PracticeComponentScreen from "./src/screens/PracticeComponentScreen";
import ListScreenComponent from "./src/screens/ListScreenComponent";
import FlatListExcerciseComponent from "./src/screens/FlatListExcerciseComponent";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen,
    PracticeComponents: PracticeComponentScreen,
    ListComponent: ListScreenComponent,
    FlatListExercise: FlatListExcerciseComponent,
    ImageScreen: ImageScreen,
    CounterScreen: CounterScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
