import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Music icon from Feather
 * @module
 */
export function FiMusic(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 18V5l12-2v13"}},{tag:"circle",attr:{"cx":"6","cy":"18","r":"3"},child:[]},{tag:"circle",attr:{"cx":"18","cy":"16","r":"3"},child:[]}]})(props);
}
export default FiMusic;
