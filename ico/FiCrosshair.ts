import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Crosshair icon from Feather
 * @module
 */
export function FiCrosshair(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"line",attr:{"x1":"22","y1":"12","x2":"18","y2":"12"},child:[]},{tag:"line",attr:{"x1":"6","y1":"12","x2":"2","y2":"12"},child:[]},{tag:"line",attr:{"x1":"12","y1":"6","x2":"12","y2":"2"},child:[]},{tag:"line",attr:{"x1":"12","y1":"22","x2":"12","y2":"18"},child:[]}]})(props);
}
export default FiCrosshair;
