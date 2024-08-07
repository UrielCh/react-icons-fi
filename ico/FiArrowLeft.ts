import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowLeft icon from Feather
 * @module
 */
export function FiArrowLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"19","y1":"12","x2":"5","y2":"12"}},{tag:"polyline",attr:{"points":"12 19 5 12 12 5"},child:[]}]})(props);
}
export default FiArrowLeft;
