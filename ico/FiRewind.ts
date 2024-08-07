import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Rewind icon from Feather
 * @module
 */
export function FiRewind(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{"points":"11 19 2 12 11 5 11 19"}},{tag:"polygon",attr:{"points":"22 19 13 12 22 5 22 19"},child:[]}]})(props);
}
export default FiRewind;
