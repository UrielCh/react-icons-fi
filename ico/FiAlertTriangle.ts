import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * AlertTriangle icon from Feather
 * @module
 */
export function FiAlertTriangle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"}},{tag:"line",attr:{"x1":"12","y1":"9","x2":"12","y2":"13"},child:[]},{tag:"line",attr:{"x1":"12","y1":"17","x2":"12.01","y2":"17"},child:[]}]})(props);
}
export default FiAlertTriangle;
