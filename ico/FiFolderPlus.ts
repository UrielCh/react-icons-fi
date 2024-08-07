import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FolderPlus icon from Feather
 * @module
 */
export function FiFolderPlus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"}},{tag:"line",attr:{"x1":"12","y1":"11","x2":"12","y2":"17"},child:[]},{tag:"line",attr:{"x1":"9","y1":"14","x2":"15","y2":"14"},child:[]}]})(props);
}
export default FiFolderPlus;
