import { ComponentsVariants, PaletteOptions } from "@mui/material";
import { ComponentsOverrides } from "@mui/material/styles/overrides";

type Unpacked<T> = T extends (infer U)[] ? U : T;

export default function createVariant<T extends keyof ComponentsOverrides>(
  variant: Unpacked<ComponentsVariants[T]>,
): Unpacked<ComponentsVariants[T]> {
  return variant;
}
