import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Voicemail icon from Feather
 * @module
 */
export function FiVoicemail(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"5.5","cy":"11.5","r":"4.5"}},{tag:"circle",attr:{"cx":"18.5","cy":"11.5","r":"4.5"},child:[]},{tag:"line",attr:{"x1":"5.5","y1":"16","x2":"18.5","y2":"16"},child:[]}]})(props);
}
export default FiVoicemail;
