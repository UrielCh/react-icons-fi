import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Truck icon from Feather
 * @module
 */
export function FiTruck(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"1",y:"3","width":"15","height":"13"}},{tag:"polygon",attr:{"points":"16 8 20 8 23 11 23 16 16 16 16 8"},child:[]},{tag:"circle",attr:{"cx":"5.5","cy":"18.5","r":"2.5"},child:[]},{tag:"circle",attr:{"cx":"18.5","cy":"18.5","r":"2.5"},child:[]}]})(props);
}
export default FiTruck;
