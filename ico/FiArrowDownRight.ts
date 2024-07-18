import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowDownRight icon from Feather
 * @module
 */
export function FiArrowDownRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"7","y1":"7","x2":"17","y2":"17"}},{tag:"polyline",attr:{"points":"17 7 17 17 7 17"},child:[]}]})(props);
}
export default FiArrowDownRight;
