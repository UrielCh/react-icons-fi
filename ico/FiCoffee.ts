import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Coffee icon from Feather
 * @module
 */
export function FiCoffee(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 8h1a4 4 0 0 1 0 8h-1"}},{tag:"path",attr:{d:"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"},child:[]},{tag:"line",attr:{"x1":"6","y1":"1","x2":"6","y2":"4"},child:[]},{tag:"line",attr:{"x1":"10","y1":"1","x2":"10","y2":"4"},child:[]},{tag:"line",attr:{"x1":"14","y1":"1","x2":"14","y2":"4"},child:[]}]})(props);
}
export default FiCoffee;
