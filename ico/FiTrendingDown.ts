import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * TrendingDown icon from Feather
 * @module
 */
export function FiTrendingDown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{"points":"23 18 13.5 8.5 8.5 13.5 1 6"}},{tag:"polyline",attr:{"points":"17 18 23 18 23 12"},child:[]}]})(props);
}
export default FiTrendingDown;
