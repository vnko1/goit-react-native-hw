import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const SvgComponent = ({ imageIsLoaded }) => (
  <Svg
    width={13}
    height={13}
    fill={imageIsLoaded ? "#BDBDBD" : "#FF6C00"}
    transform={
      imageIsLoaded
        ? [({ rotateY: "45deg" }, { rotateZ: "45deg" })]
        : [({ rotateY: 0 }, { rotateZ: 0 })]
    }
  >
    <Path d="M7 0H6v6H0v1h6v6h1V7h6V6H7V0Z" clipRule="evenodd" />
  </Svg>
);
export default SvgComponent;
