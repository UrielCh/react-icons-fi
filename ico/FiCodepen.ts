import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Codepen icon from Feather
 * @module
 */
export function FiCodepen(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{"points":"12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"}},{tag:"line",attr:{"x1":"12","y1":"22","x2":"12","y2":"15.5"},child:[]},{tag:"polyline",attr:{"points":"22 8.5 12 15.5 2 8.5"},child:[]},{tag:"polyline",attr:{"points":"2 15.5 12 8.5 22 15.5"},child:[]},{tag:"line",attr:{"x1":"12","y1":"2","x2":"12","y2":"8.5"},child:[]}]})(props);
}
export default FiCodepen;
