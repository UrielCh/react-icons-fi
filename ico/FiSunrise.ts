import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Sunrise icon from Feather
 * @module
 */
export function FiSunrise(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 18a5 5 0 0 0-10 0"}},{tag:"line",attr:{"x1":"12","y1":"2","x2":"12","y2":"9"},child:[]},{tag:"line",attr:{"x1":"4.22","y1":"10.22","x2":"5.64","y2":"11.64"},child:[]},{tag:"line",attr:{"x1":"1","y1":"18","x2":"3","y2":"18"},child:[]},{tag:"line",attr:{"x1":"21","y1":"18","x2":"23","y2":"18"},child:[]},{tag:"line",attr:{"x1":"18.36","y1":"11.64","x2":"19.78","y2":"10.22"},child:[]},{tag:"line",attr:{"x1":"23","y1":"22","x2":"1","y2":"22"},child:[]},{tag:"polyline",attr:{"points":"8 6 12 2 16 6"},child:[]}]})(props);
}
export default FiSunrise;
