import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * X icon from Feather
 * @module
 */
export function FiX(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"18","y1":"6","x2":"6","y2":"18"}},{tag:"line",attr:{"x1":"6","y1":"6","x2":"18","y2":"18"},child:[]}]})(props);
}
export default FiX;
