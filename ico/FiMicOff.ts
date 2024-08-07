import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MicOff icon from Feather
 * @module
 */
export function FiMicOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"1","y1":"1","x2":"23","y2":"23"}},{tag:"path",attr:{d:"M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"},child:[]},{tag:"path",attr:{d:"M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"},child:[]},{tag:"line",attr:{"x1":"12","y1":"19","x2":"12","y2":"23"},child:[]},{tag:"line",attr:{"x1":"8","y1":"23","x2":"16","y2":"23"},child:[]}]})(props);
}
export default FiMicOff;
