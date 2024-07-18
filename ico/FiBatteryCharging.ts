import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BatteryCharging icon from Feather
 * @module
 */
export function FiBatteryCharging(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"}},{tag:"line",attr:{"x1":"23","y1":"13","x2":"23","y2":"11"},child:[]},{tag:"polyline",attr:{"points":"11 6 7 12 13 12 9 18"},child:[]}]})(props);
}
export default FiBatteryCharging;
