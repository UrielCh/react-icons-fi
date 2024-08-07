import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FastForward icon from Feather
 * @module
 */
export function FiFastForward(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{"points":"13 19 22 12 13 5 13 19"}},{tag:"polygon",attr:{"points":"2 19 11 12 2 5 2 19"},child:[]}]})(props);
}
export default FiFastForward;
