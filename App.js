import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Information from "./components/Information";
import Welcome from "./components/Welcome";
import Practice1 from "./components/Practice1";
import Txtinput from "./components/Txtinput";
import CustomComponent from "./components/CustomComponent";
import Logo from "./components/Logo";
import LotsOfGreeting from "./components/LotsOfGreeting";
import Practice2 from "./components/Practice2";
import Count from "./components/Count";
import Textinput1 from "./components/Textinput1";
import Practice3 from "./components/Practice3";

const App = () => {
  return (
    <View>
      {/* <Information/> */}
      {/* <Welcome/> */}
      {/* <Practice1/> */}
      {/* <Txtinput/> */}
      {/* <CustomComponent/> */}
      {/* <Logo/> */}
      {/* <LotsOfGreeting/> */}
      {/* <Practice2/> */}
      {/* <Count num={2} title='click'/> */}
      {/* <Textinput1/> */}
      <Practice3/>
    </View>
  );
};

const styles = StyleSheet.create(
  {
      container:{flex:1 , justifyContent:'center', alignItems:'center'}
  }
)

export default App;
