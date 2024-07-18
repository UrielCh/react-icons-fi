import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowUpRight icon from Feather
 * @module
 */
export function FiArrowUpRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"7","y1":"17","x2":"17","y2":"7"}},{tag:"polyline",attr:{"points":"7 7 17 7 17 17"},child:[]}]})(props);
}
export default FiArrowUpRight;
