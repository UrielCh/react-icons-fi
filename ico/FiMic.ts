import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Mic icon from Feather
 * @module
 */
export function FiMic(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"}},{tag:"path",attr:{d:"M19 10v2a7 7 0 0 1-14 0v-2"},child:[]},{tag:"line",attr:{"x1":"12","y1":"19","x2":"12","y2":"23"},child:[]},{tag:"line",attr:{"x1":"8","y1":"23","x2":"16","y2":"23"},child:[]}]})(props);
}
export default FiMic;
