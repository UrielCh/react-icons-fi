import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Award icon from Feather
 * @module
 */
export function FiAward(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"8","r":"7"}},{tag:"polyline",attr:{"points":"8.21 13.89 7 23 12 20 17 23 15.79 13.88"},child:[]}]})(props);
}
export default FiAward;
