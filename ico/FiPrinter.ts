import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Printer icon from Feather
 * @module
 */
export function FiPrinter(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{"points":"6 9 6 2 18 2 18 9"}},{tag:"path",attr:{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"},child:[]},{tag:"rect",attr:{x:"6",y:"14","width":"12","height":"8"},child:[]}]})(props);
}
export default FiPrinter;
