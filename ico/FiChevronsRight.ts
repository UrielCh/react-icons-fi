import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ChevronsRight icon from Feather
 * @module
 */
export function FiChevronsRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{"points":"13 17 18 12 13 7"}},{tag:"polyline",attr:{"points":"6 17 11 12 6 7"},child:[]}]})(props);
}
export default FiChevronsRight;
