import { Size } from "../types";
import { Color } from "../types/color.type";
import { Variant } from "../types/variant.type";


export interface CommonComponentProps {
  size?: Size;
  color?: Color;
  variant?: Variant;
  disabled?: boolean;
  fullWidth?: boolean;
}