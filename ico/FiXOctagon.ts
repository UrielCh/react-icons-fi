import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * XOctagon icon from Feather
 * @module
 */
export function FiXOctagon(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{"points":"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}},{tag:"line",attr:{"x1":"15","y1":"9","x2":"9","y2":"15"},child:[]},{tag:"line",attr:{"x1":"9","y1":"9","x2":"15","y2":"15"},child:[]}]})(props);
}
export default FiXOctagon;
