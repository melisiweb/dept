export const BASE_FONT_SIZE = 16;

export const pxToRem = (px: number): string => {
  return `${(1 / BASE_FONT_SIZE) * px}rem`;
};
