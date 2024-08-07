import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Underline icon from Feather
 * @module
 */
export function FiUnderline(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"}},{tag:"line",attr:{"x1":"4","y1":"21","x2":"20","y2":"21"},child:[]}]})(props);
}
export default FiUnderline;
