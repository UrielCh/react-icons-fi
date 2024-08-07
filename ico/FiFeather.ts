import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Feather icon from Feather
 * @module
 */
export function FiFeather(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"}},{tag:"line",attr:{"x1":"16","y1":"8","x2":"2","y2":"22"},child:[]},{tag:"line",attr:{"x1":"17.5","y1":"15","x2":"9","y2":"15"},child:[]}]})(props);
}
export default FiFeather;
