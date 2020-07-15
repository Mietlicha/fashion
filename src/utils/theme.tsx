//breakpoints
const smallBreakpoint = 568;
const mediumBreakpoint = 768;
const largeBreakpoint = 1024;
const xlargeBreakpoint = 1280;
const screen = 'only screen';

const smallRange = [0, smallBreakpoint];
const mediumRange = [smallBreakpoint + 1, mediumBreakpoint];
const largeRange = [mediumBreakpoint + 1, largeBreakpoint - 1];
const xlargeRange = [largeBreakpoint + 1, xlargeBreakpoint];
const xxlargeRange = [xlargeBreakpoint + 1, 99999999];

function upperBound(range: number[]) {
  if (range.length < 2) {
    return 999999999999;
  }

  return range[1];
}

function lowerBound(range: number[]) {
  if (range.length <= 0) {
    return 0;
  }

  return range[0];
}

//colors
const black = '#000';
const white = '#fff';
const contrast = '#c96657';
const contrastLight = '#eee2da';
const grey = '#b9b5b1';
const greyLight = '#f7f1ec';
const pale = '#fcfaed';

//fontFamily
const josefin = `'Josefin Sans',  sans-serif`;
const openSans = `'Open Sans',  sans-serif`;

export const theme = {
  white,
  black,
  contrast,
  contrastLight,
  grey,
  greyLight,
  pale,

  josefin,
  openSans,

  smallBreakpoint: `${smallBreakpoint}px`,
  mediumBreakpoint: `${mediumBreakpoint}px`,
  largeBreakpoint: `${largeBreakpoint}px`,
  xlargeBreakpoint: `${xlargeBreakpoint}px`,

  smallRange,
  mediumRange,
  largeRange,
  xlargeRange,
  xxlargeRange,
  screen,
  smallDown: `${screen} and (max-width:${upperBound(smallRange)}px)`,
  mediumUp: `${screen} and (min-width:${lowerBound(mediumRange)}px)`,
  largeUp: `${screen} and (min-width:${lowerBound(largeRange)}px)`,
  xlargeUp: `${screen} and (min-width:${lowerBound(xlargeRange)}px)`,
  xxlargeUp: `${screen} and (min-width:${lowerBound(xxlargeRange)}px)`,
  mediumDown: `${screen} and (max-width:${upperBound(mediumRange)}px)`,
  largeDown: `${screen} and (max-width:${upperBound(largeRange)}px)`,
  mediumLargeMq: `${screen} and (min-width:${lowerBound(
    mediumRange
  )}px) and (max-width: ${upperBound(largeRange)}px)`,
};
