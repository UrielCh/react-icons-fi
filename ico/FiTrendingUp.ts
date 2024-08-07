import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * TrendingUp icon from Feather
 * @module
 */
export function FiTrendingUp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{"points":"23 6 13.5 15.5 8.5 10.5 1 18"}},{tag:"polyline",attr:{"points":"17 6 23 6 23 12"},child:[]}]})(props);
}
export default FiTrendingUp;
