import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Image icon from Feather
 * @module
 */
export function FiImage(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3","width":"18","height":"18","rx":"2","ry":"2"}},{tag:"circle",attr:{"cx":"8.5","cy":"8.5","r":"1.5"},child:[]},{tag:"polyline",attr:{"points":"21 15 16 10 5 21"},child:[]}]})(props);
}
export default FiImage;
