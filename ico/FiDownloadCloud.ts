import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * DownloadCloud icon from Feather
 * @module
 */
export function FiDownloadCloud(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{"points":"8 17 12 21 16 17"}},{tag:"line",attr:{"x1":"12","y1":"12","x2":"12","y2":"21"},child:[]},{tag:"path",attr:{d:"M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"},child:[]}]})(props);
}
export default FiDownloadCloud;
