import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowUp icon from Feather
 * @module
 */
export function FiArrowUp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"12","y1":"19","x2":"12","y2":"5"}},{tag:"polyline",attr:{"points":"5 12 12 5 19 12"},child:[]}]})(props);
}
export default FiArrowUp;
