import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Type icon from Feather
 * @module
 */
export function FiType(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{"points":"4 7 4 4 20 4 20 7"}},{tag:"line",attr:{"x1":"9","y1":"20","x2":"15","y2":"20"},child:[]},{tag:"line",attr:{"x1":"12","y1":"4","x2":"12","y2":"20"},child:[]}]})(props);
}
export default FiType;
