import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowDownLeft icon from Feather
 * @module
 */
export function FiArrowDownLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"17","y1":"7","x2":"7","y2":"17"}},{tag:"polyline",attr:{"points":"17 17 7 17 7 7"},child:[]}]})(props);
}
export default FiArrowDownLeft;
