import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CreditCard icon from Feather
 * @module
 */
export function FiCreditCard(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"1",y:"4","width":"22","height":"16","rx":"2","ry":"2"}},{tag:"line",attr:{"x1":"1","y1":"10","x2":"23","y2":"10"},child:[]}]})(props);
}
export default FiCreditCard;
