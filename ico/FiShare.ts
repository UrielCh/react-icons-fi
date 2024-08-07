import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Share icon from Feather
 * @module
 */
export function FiShare(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"}},{tag:"polyline",attr:{"points":"16 6 12 2 8 6"},child:[]},{tag:"line",attr:{"x1":"12","y1":"2","x2":"12","y2":"15"},child:[]}]})(props);
}
export default FiShare;
