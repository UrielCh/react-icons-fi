import { GenIcon, type IconBaseProps } from "../deps.ts";

export function FiXSquare(props: IconBaseProps) {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3","width":"18","height":"18","rx":"2","ry":"2"}},{tag:"line",attr:{"x1":"9","y1":"9","x2":"15","y2":"15"}},{tag:"line",attr:{"x1":"15","y1":"9","x2":"9","y2":"15"}}]})(props);
}
export default FiXSquare;
