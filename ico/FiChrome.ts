import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Chrome icon from Feather
 * @module
 */
export function FiChrome(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"circle",attr:{"cx":"12","cy":"12","r":"4"},child:[]},{tag:"line",attr:{"x1":"21.17","y1":"8","x2":"12","y2":"8"},child:[]},{tag:"line",attr:{"x1":"3.95","y1":"6.06","x2":"8.54","y2":"14"},child:[]},{tag:"line",attr:{"x1":"10.88","y1":"21.94","x2":"15.46","y2":"14"},child:[]}]})(props);
}
export default FiChrome;
