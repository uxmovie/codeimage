import {adaptiveFullScreenHeight, themeVars} from '@codeimage/ui';
import {style} from '@vanilla-extract/css';

export const wrapper = style([
  adaptiveFullScreenHeight,
  {
    background: themeVars.dynamicColors.background,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
  },
]);

export const notFoundTitle = style({
  fontFamily: 'Faculty Glyphic, Geist, system-ui, sans-serif',
  fontSize: '12rem',
  color: themeVars.dynamicColors.descriptionTextColor,
});

export const descriptionTitle = style({
  fontSize: themeVars.fontSize.lg,
  color: themeVars.dynamicColors.descriptionTextColor,
});
