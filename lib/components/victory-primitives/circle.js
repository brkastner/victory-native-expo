import React from "react";
import PropTypes from "prop-types";
import isEqual from "react-fast-compare";
import { Circle } from "expo/node_modules/react-native-svg";
import NativeHelpers from "../../helpers/native-helpers";

export default class VCircle extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    clipPath: PropTypes.string,
    cx: PropTypes.number,
    cy: PropTypes.number,
    events: PropTypes.object,
    r: PropTypes.number,
    role: PropTypes.string,
    shapeRendering: PropTypes.string,
    style: PropTypes.object,
    transform: PropTypes.string
  };

  shouldComponentUpdate(nextProps) {
    return !isEqual(this.props, nextProps);
  }

  render() {
    const {
      cx, cy, r, events, className, role, shapeRendering, transform, clipPath
    } = this.props;
    const style = NativeHelpers.getStyle(this.props.style);
    return (
      <Circle
        cx={cx} cy={cy} r={r}
        className={className}
        clipPath={clipPath}
        transform={transform}
        role={role || "presentation"}
        shapeRendering={shapeRendering || "auto"}
        vectorEffect="non-scaling-stroke"
        {...style}
        {...events}
      />
    );
  }
}
