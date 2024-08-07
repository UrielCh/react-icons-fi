import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Shuffle icon from Feather
 * @module
 */
export function FiShuffle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{"points":"16 3 21 3 21 8"}},{tag:"line",attr:{"x1":"4","y1":"20","x2":"21","y2":"3"},child:[]},{tag:"polyline",attr:{"points":"21 16 21 21 16 21"},child:[]},{tag:"line",attr:{"x1":"15","y1":"15","x2":"21","y2":"21"},child:[]},{tag:"line",attr:{"x1":"4","y1":"4","x2":"9","y2":"9"},child:[]}]})(props);
}
export default FiShuffle;
