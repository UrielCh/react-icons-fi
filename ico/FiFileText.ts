import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FileText icon from Feather
 * @module
 */
export function FiFileText(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}},{tag:"polyline",attr:{"points":"14 2 14 8 20 8"},child:[]},{tag:"line",attr:{"x1":"16","y1":"13","x2":"8","y2":"13"},child:[]},{tag:"line",attr:{"x1":"16","y1":"17","x2":"8","y2":"17"},child:[]},{tag:"polyline",attr:{"points":"10 9 9 9 8 9"},child:[]}]})(props);
}
export default FiFileText;
