import React from "react";
import { Dimensions } from "react-native";
import { G } from "expo/node_modules/react-native-svg";
import { VictoryStack } from "victory-stack/es";
import VictoryContainer from "./victory-container";

export default class extends VictoryStack {
  static defaultProps = Object.assign({}, VictoryStack.defaultProps, {
    containerComponent: <VictoryContainer/>,
    groupComponent: <G/>,
    width: Dimensions.get("window").width
  });
}
