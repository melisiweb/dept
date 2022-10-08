export const BASE_FONT_SIZE = 16;
export const HEADER_HEIGHT = 115;
export const HEADER_MOBILE_HEIGHT = 56;

export const pxToRem = (px: number): string => {
  return `${(1 / BASE_FONT_SIZE) * px}rem`;
};
