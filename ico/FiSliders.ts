import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Sliders icon from Feather
 * @module
 */
export function FiSliders(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"4","y1":"21","x2":"4","y2":"14"}},{tag:"line",attr:{"x1":"4","y1":"10","x2":"4","y2":"3"},child:[]},{tag:"line",attr:{"x1":"12","y1":"21","x2":"12","y2":"12"},child:[]},{tag:"line",attr:{"x1":"12","y1":"8","x2":"12","y2":"3"},child:[]},{tag:"line",attr:{"x1":"20","y1":"21","x2":"20","y2":"16"},child:[]},{tag:"line",attr:{"x1":"20","y1":"12","x2":"20","y2":"3"},child:[]},{tag:"line",attr:{"x1":"1","y1":"14","x2":"7","y2":"14"},child:[]},{tag:"line",attr:{"x1":"9","y1":"8","x2":"15","y2":"8"},child:[]},{tag:"line",attr:{"x1":"17","y1":"16","x2":"23","y2":"16"},child:[]}]})(props);
}
export default FiSliders;
