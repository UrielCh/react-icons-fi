import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowUpLeft icon from Feather
 * @module
 */
export function FiArrowUpLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"17","y1":"17","x2":"7","y2":"7"}},{tag:"polyline",attr:{"points":"7 17 7 7 17 7"},child:[]}]})(props);
}
export default FiArrowUpLeft;
