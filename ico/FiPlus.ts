import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Plus icon from Feather
 * @module
 */
export function FiPlus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"12","y1":"5","x2":"12","y2":"19"}},{tag:"line",attr:{"x1":"5","y1":"12","x2":"19","y2":"12"},child:[]}]})(props);
}
export default FiPlus;
