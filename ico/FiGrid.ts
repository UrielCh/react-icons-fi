import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Grid icon from Feather
 * @module
 */
export function FiGrid(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3","width":"7","height":"7"}},{tag:"rect",attr:{x:"14",y:"3","width":"7","height":"7"},child:[]},{tag:"rect",attr:{x:"14",y:"14","width":"7","height":"7"},child:[]},{tag:"rect",attr:{x:"3",y:"14","width":"7","height":"7"},child:[]}]})(props);
}
export default FiGrid;
