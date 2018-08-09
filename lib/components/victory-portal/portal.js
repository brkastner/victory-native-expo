import React from "react";
import Svg from "expo/node_modules/react-native-svg";
import { Portal } from "victory-core/es";

export default class extends Portal {

  render() {
    return <Svg {...this.props}>{this.getChildren()}</Svg>;
  }
}
