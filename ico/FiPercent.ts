import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Percent icon from Feather
 * @module
 */
export function FiPercent(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"19","y1":"5","x2":"5","y2":"19"}},{tag:"circle",attr:{"cx":"6.5","cy":"6.5","r":"2.5"},child:[]},{tag:"circle",attr:{"cx":"17.5","cy":"17.5","r":"2.5"},child:[]}]})(props);
}
export default FiPercent;
