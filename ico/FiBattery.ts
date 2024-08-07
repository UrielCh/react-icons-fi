import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Battery icon from Feather
 * @module
 */
export function FiBattery(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"1",y:"6","width":"18","height":"12","rx":"2","ry":"2"}},{tag:"line",attr:{"x1":"23","y1":"13","x2":"23","y2":"11"},child:[]}]})(props);
}
export default FiBattery;
