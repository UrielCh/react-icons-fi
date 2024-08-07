import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Delete icon from Feather
 * @module
 */
export function FiDelete(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"}},{tag:"line",attr:{"x1":"18","y1":"9","x2":"12","y2":"15"},child:[]},{tag:"line",attr:{"x1":"12","y1":"9","x2":"18","y2":"15"},child:[]}]})(props);
}
export default FiDelete;
