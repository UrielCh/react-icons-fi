import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Anchor icon from Feather
 * @module
 */
export function FiAnchor(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"5","r":"3"}},{tag:"line",attr:{"x1":"12","y1":"22","x2":"12","y2":"8"},child:[]},{tag:"path",attr:{d:"M5 12H2a10 10 0 0 0 20 0h-3"},child:[]}]})(props);
}
export default FiAnchor;
