import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ChevronsUp icon from Feather
 * @module
 */
export function FiChevronsUp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{"points":"17 11 12 6 7 11"}},{tag:"polyline",attr:{"points":"17 18 12 13 7 18"},child:[]}]})(props);
}
export default FiChevronsUp;
