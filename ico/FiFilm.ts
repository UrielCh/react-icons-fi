import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Film icon from Feather
 * @module
 */
export function FiFilm(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"2","width":"20","height":"20","rx":"2.18","ry":"2.18"}},{tag:"line",attr:{"x1":"7","y1":"2","x2":"7","y2":"22"},child:[]},{tag:"line",attr:{"x1":"17","y1":"2","x2":"17","y2":"22"},child:[]},{tag:"line",attr:{"x1":"2","y1":"12","x2":"22","y2":"12"},child:[]},{tag:"line",attr:{"x1":"2","y1":"7","x2":"7","y2":"7"},child:[]},{tag:"line",attr:{"x1":"2","y1":"17","x2":"7","y2":"17"},child:[]},{tag:"line",attr:{"x1":"17","y1":"17","x2":"22","y2":"17"},child:[]},{tag:"line",attr:{"x1":"17","y1":"7","x2":"22","y2":"7"},child:[]}]})(props);
}
export default FiFilm;
