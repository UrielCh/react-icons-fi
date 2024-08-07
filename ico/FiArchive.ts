import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Archive icon from Feather
 * @module
 */
export function FiArchive(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{"points":"21 8 21 21 3 21 3 8"}},{tag:"rect",attr:{x:"1",y:"3","width":"22","height":"5"},child:[]},{tag:"line",attr:{"x1":"10","y1":"12","x2":"14","y2":"12"},child:[]}]})(props);
}
export default FiArchive;
