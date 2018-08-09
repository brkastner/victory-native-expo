import React from "react";
import { Dimensions } from "react-native";
import { G } from "expo/node_modules/react-native-svg";
import VictoryLabel from "./victory-label";
import VictoryContainer from "./victory-container";
import Candle from "./victory-primitives/candle";
import { VictoryCandlestick } from "victory-candlestick/es";

export default class extends VictoryCandlestick {
  static defaultProps = Object.assign({}, VictoryCandlestick.defaultProps, {
    dataComponent: <Candle/>,
    labelComponent: <VictoryLabel/>,
    containerComponent: <VictoryContainer/>,
    groupComponent: <G/>,
    width: Dimensions.get("window").width
  });
}
