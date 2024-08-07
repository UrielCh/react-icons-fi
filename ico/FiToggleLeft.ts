import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ToggleLeft icon from Feather
 * @module
 */
export function FiToggleLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"1",y:"5","width":"22","height":"14","rx":"7","ry":"7"}},{tag:"circle",attr:{"cx":"8","cy":"12","r":"3"},child:[]}]})(props);
}
export default FiToggleLeft;
