import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Scissors icon from Feather
 * @module
 */
export function FiScissors(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"6","cy":"6","r":"3"}},{tag:"circle",attr:{"cx":"6","cy":"18","r":"3"},child:[]},{tag:"line",attr:{"x1":"20","y1":"4","x2":"8.12","y2":"15.88"},child:[]},{tag:"line",attr:{"x1":"14.47","y1":"14.48","x2":"20","y2":"20"},child:[]},{tag:"line",attr:{"x1":"8.12","y1":"8.12","x2":"12","y2":"12"},child:[]}]})(props);
}
export default FiScissors;
