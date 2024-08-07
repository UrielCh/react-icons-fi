import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ChevronsLeft icon from Feather
 * @module
 */
export function FiChevronsLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{"points":"11 17 6 12 11 7"}},{tag:"polyline",attr:{"points":"18 17 13 12 18 7"},child:[]}]})(props);
}
export default FiChevronsLeft;
