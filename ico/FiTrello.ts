import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Trello icon from Feather
 * @module
 */
export function FiTrello(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3","width":"18","height":"18","rx":"2","ry":"2"}},{tag:"rect",attr:{x:"7",y:"7","width":"3","height":"9"},child:[]},{tag:"rect",attr:{x:"14",y:"7","width":"3","height":"5"},child:[]}]})(props);
}
export default FiTrello;
