import React from "react";
import Line from "./line";
import { G } from "expo/node_modules/react-native-svg";
import { Whisker } from "victory-core/es";

export default class extends Whisker {
  static defaultProps = Object.assign({}, Whisker.defaultProps, {
    groupComponent: <G/>,
    lineComponent: <Line/>
  });
}
