type FontSizeType = "small" | "medium" | "large";
type FontWeightType = "light" | "normal" | "bold";

export interface LabelProps {
  fontSize: FontSizeType;
  fontWeight: FontWeightType;
  color: string;
  children: React.ReactNode;
}

export const size: Record<FontSizeType, number> = {
  small: 12,
  medium: 16,
  large: 20,
};

export const weight: Record<FontWeightType, number> = {
  light: 200,
  normal: 400,
  bold: 700,
};
