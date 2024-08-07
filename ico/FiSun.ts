import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Sun icon from Feather
 * @module
 */
export function FiSun(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"5"}},{tag:"line",attr:{"x1":"12","y1":"1","x2":"12","y2":"3"},child:[]},{tag:"line",attr:{"x1":"12","y1":"21","x2":"12","y2":"23"},child:[]},{tag:"line",attr:{"x1":"4.22","y1":"4.22","x2":"5.64","y2":"5.64"},child:[]},{tag:"line",attr:{"x1":"18.36","y1":"18.36","x2":"19.78","y2":"19.78"},child:[]},{tag:"line",attr:{"x1":"1","y1":"12","x2":"3","y2":"12"},child:[]},{tag:"line",attr:{"x1":"21","y1":"12","x2":"23","y2":"12"},child:[]},{tag:"line",attr:{"x1":"4.22","y1":"19.78","x2":"5.64","y2":"18.36"},child:[]},{tag:"line",attr:{"x1":"18.36","y1":"5.64","x2":"19.78","y2":"4.22"},child:[]}]})(props);
}
export default FiSun;
