import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Send icon from Feather
 * @module
 */
export function FiSend(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"22","y1":"2","x2":"11","y2":"13"}},{tag:"polygon",attr:{"points":"22 2 15 22 11 13 2 9 22 2"},child:[]}]})(props);
}
export default FiSend;
