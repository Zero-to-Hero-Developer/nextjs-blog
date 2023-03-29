import IcomoonReact from "icomoon-react";
import iconSet from "../utils/selection.json";

const Icon = (props) => {
  const { color = "currentColor", size = "16", icon, className = "" } = props;
  return (
    <IcomoonReact
      className={className}
      iconSet={iconSet}
      color={color}
      size={size}
      icon={icon}
    />
  );
};

export default Icon;
