import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Loader icon from Feather
 * @module
 */
export function FiLoader(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"12","y1":"2","x2":"12","y2":"6"}},{tag:"line",attr:{"x1":"12","y1":"18","x2":"12","y2":"22"},child:[]},{tag:"line",attr:{"x1":"4.93","y1":"4.93","x2":"7.76","y2":"7.76"},child:[]},{tag:"line",attr:{"x1":"16.24","y1":"16.24","x2":"19.07","y2":"19.07"},child:[]},{tag:"line",attr:{"x1":"2","y1":"12","x2":"6","y2":"12"},child:[]},{tag:"line",attr:{"x1":"18","y1":"12","x2":"22","y2":"12"},child:[]},{tag:"line",attr:{"x1":"4.93","y1":"19.07","x2":"7.76","y2":"16.24"},child:[]},{tag:"line",attr:{"x1":"16.24","y1":"7.76","x2":"19.07","y2":"4.93"},child:[]}]})(props);
}
export default FiLoader;
