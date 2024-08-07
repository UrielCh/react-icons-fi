import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Cpu icon from Feather
 * @module
 */
export function FiCpu(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"4",y:"4","width":"16","height":"16","rx":"2","ry":"2"}},{tag:"rect",attr:{x:"9",y:"9","width":"6","height":"6"},child:[]},{tag:"line",attr:{"x1":"9","y1":"1","x2":"9","y2":"4"},child:[]},{tag:"line",attr:{"x1":"15","y1":"1","x2":"15","y2":"4"},child:[]},{tag:"line",attr:{"x1":"9","y1":"20","x2":"9","y2":"23"},child:[]},{tag:"line",attr:{"x1":"15","y1":"20","x2":"15","y2":"23"},child:[]},{tag:"line",attr:{"x1":"20","y1":"9","x2":"23","y2":"9"},child:[]},{tag:"line",attr:{"x1":"20","y1":"14","x2":"23","y2":"14"},child:[]},{tag:"line",attr:{"x1":"1","y1":"9","x2":"4","y2":"9"},child:[]},{tag:"line",attr:{"x1":"1","y1":"14","x2":"4","y2":"14"},child:[]}]})(props);
}
export default FiCpu;
