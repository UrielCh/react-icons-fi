import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Italic icon from Feather
 * @module
 */
export function FiItalic(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"19","y1":"4","x2":"10","y2":"4"}},{tag:"line",attr:{"x1":"14","y1":"20","x2":"5","y2":"20"},child:[]},{tag:"line",attr:{"x1":"15","y1":"4","x2":"9","y2":"20"},child:[]}]})(props);
}
export default FiItalic;
