import React from "react";
import PropTypes from "prop-types";
import isEqual from "react-fast-compare";
import { Text } from "expo/node_modules/react-native-svg";
import { uniqueId } from "lodash";
import NativeHelpers from "../../helpers/native-helpers";

export default class VText extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    dx: PropTypes.number,
    dy: PropTypes.number,
    events: PropTypes.object,
    style: PropTypes.object,
    transform: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number
  };

  constructor(props) {
    super(props);
    this.id = uniqueId();
  }


  shouldComponentUpdate(nextProps) {
    if (!isEqual(this.props, nextProps)) {
      // ensure animating text updates in newer versions of `expo/node_modules/react-native-svg`
      // TODO: investigate underlying `expo/node_modules/react-native-svg` issue
      this.id = uniqueId();
      return true;
    }
    return false;
  }

  render() {
    const {
      x, y, dx, dy, events, className, children, transform
    } = this.props;
    const style = NativeHelpers.getStyle(this.props.style);
    return (
      <Text
        key={this.id}
        className={className} x={x} dx={dx} y={y} dy={dy}
        transform={transform}
        {...style}
        {...events}
      >
        {children}
      </Text>
    );
  }
}
