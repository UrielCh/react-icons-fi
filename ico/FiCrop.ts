import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Crop icon from Feather
 * @module
 */
export function FiCrop(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6.13 1L6 16a2 2 0 0 0 2 2h15"}},{tag:"path",attr:{d:"M1 6.13L16 6a2 2 0 0 1 2 2v15"},child:[]}]})(props);
}
export default FiCrop;
