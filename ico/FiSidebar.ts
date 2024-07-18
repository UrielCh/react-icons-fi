import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Sidebar icon from Feather
 * @module
 */
export function FiSidebar(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3","width":"18","height":"18","rx":"2","ry":"2"}},{tag:"line",attr:{"x1":"9","y1":"3","x2":"9","y2":"21"},child:[]}]})(props);
}
export default FiSidebar;
