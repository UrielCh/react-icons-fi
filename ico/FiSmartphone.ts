import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Smartphone icon from Feather
 * @module
 */
export function FiSmartphone(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"5",y:"2","width":"14","height":"20","rx":"2","ry":"2"}},{tag:"line",attr:{"x1":"12","y1":"18","x2":"12.01","y2":"18"},child:[]}]})(props);
}
export default FiSmartphone;
