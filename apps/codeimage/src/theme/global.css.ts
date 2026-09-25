import {themeVars} from '@codeimage/ui';
import {globalFontFace, globalStyle} from '@vanilla-extract/css';

globalStyle('body', {
  fontFamily: 'Geist, system-ui, -apple-system, sans-serif',
});

// Faculty Glyphic ships a single 400 weight: headings must not request
// heavier weights or the browser synthesizes a faux-bold display face.
globalStyle('h1, h2, h3', {
  fontFamily: 'Faculty Glyphic, Geist, system-ui, -apple-system, sans-serif',
  fontWeight: 400,
});

const cssVar = /(--)[^,:)]+/;

globalStyle(`[data-codeimage-theme=dark]`, {
  [cssVar.exec(themeVars.dynamicColors.panel.background)![0]]: '#151516',
  [cssVar.exec(themeVars.dynamicColors.background)![0]]: '#0f0f10',
});

globalStyle('::-webkit-scrollbar', {
  width: '18px',
  height: '18px',
});

globalStyle('::-webkit-scrollbar-track', {
  backgroundColor: 'transparent',
});

globalStyle('::-webkit-scrollbar-corner', {
  backgroundColor: themeVars.dynamicColors.scrollBar.backgroundColor,
  borderRadius: themeVars.borderRadius.xl,
  backgroundClip: 'content-box',
  border: '4px solid transparent',
});

globalStyle('::-webkit-scrollbar-thumb', {
  backgroundColor: themeVars.dynamicColors.scrollBar.backgroundColor,
  borderRadius: themeVars.borderRadius.full,
  border: '6px solid transparent',
  backgroundClip: 'content-box',
  transition: 'background-color .2s',
});

globalStyle('::-webkit-scrollbar-thumb:hover', {
  backgroundColor: themeVars.dynamicColors.scrollBar.hoverBackgroundColor,
});

globalFontFace('Geist', {
  fontDisplay: 'swap',
  fontWeight: '100 900',
  fontStyle: 'normal',
  src: "url(/assets/fonts/geist/Geist[wght].woff2) format('woff2')",
});

globalFontFace('Faculty Glyphic', {
  fontDisplay: 'swap',
  fontWeight: 400,
  fontStyle: 'normal',
  src: "url(/assets/fonts/faculty-glyphic/FacultyGlyphic-Regular.ttf) format('truetype')",
});

globalFontFace('Geist Mono', {
  fontDisplay: 'swap',
  fontWeight: '400 700',
  fontStyle: 'normal',
  src: "url(/assets/fonts/geist_mono/GeistMono[wght].ttf) format('truetype')",
});

(
  [
    ['Regular', 400],
    ['SemiBold', 500],
    ['Bold', 600],
  ] as const
).forEach(([font, weight]) => {
  globalFontFace('IBM Plex Mono', {
    fontDisplay: 'swap',
    fontWeight: weight,
    fontStyle: 'normal',
    src: `url(/assets/fonts/IBM_Plex_Mono/IBMPlexMono-${font}.ttf) format('truetype')`,
  });
});

globalFontFace('Agave', {
  fontDisplay: 'swap',
  fontWeight: 400,
  fontStyle: 'normal',
  src: `url(/assets/fonts/agave/Agave-Regular.ttf) format('truetype')`,
});

(['Argon', 'Krypton', 'Neon', 'Radon', 'Xenon'] as const).forEach(font => {
  globalFontFace(`Monaspace ${font}`, {
    fontDisplay: 'swap',
    fontWeight: '400 700',
    fontStyle: 'normal',
    src: `url(/assets/fonts/monaspace/Monaspace${font}VarVF[wght,wdth,slnt].ttf) format('truetype')`,
  });
});
