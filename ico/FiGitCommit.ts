import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * GitCommit icon from Feather
 * @module
 */
export function FiGitCommit(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"4"}},{tag:"line",attr:{"x1":"1.05","y1":"12","x2":"7","y2":"12"},child:[]},{tag:"line",attr:{"x1":"17.01","y1":"12","x2":"22.96","y2":"12"},child:[]}]})(props);
}
export default FiGitCommit;
