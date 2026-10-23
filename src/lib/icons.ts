// Brand icons from Font Awesome Free (CC BY 4.0) and Academicons (SIL OFL 1.1),
// inlined at build time so no icon font needs to load.
import github from '@fortawesome/fontawesome-free/svgs/brands/github.svg?raw';
import scholar from 'academicons/svg/google-scholar.svg?raw';
import water from '@fortawesome/fontawesome-free/svgs/solid/water.svg?raw';
import seedling from '@fortawesome/fontawesome-free/svgs/solid/seedling.svg?raw';
import paw from '@fortawesome/fontawesome-free/svgs/solid/paw.svg?raw';
import robot from '@fortawesome/fontawesome-free/svgs/solid/robot.svg?raw';
import shapes from '@fortawesome/fontawesome-free/svgs/solid/shapes.svg?raw';
import house from '@fortawesome/fontawesome-free/svgs/solid/house.svg?raw';
import envelope from '@fortawesome/fontawesome-free/svgs/solid/envelope.svg?raw';
import fileArrowDown from '@fortawesome/fontawesome-free/svgs/solid/file-arrow-down.svg?raw';
import locationCrosshairs from '@fortawesome/fontawesome-free/svgs/solid/location-crosshairs.svg?raw';
import waveSquare from '@fortawesome/fontawesome-free/svgs/solid/wave-square.svg?raw';
import sun from '@fortawesome/fontawesome-free/svgs/solid/sun.svg?raw';
import moon from '@fortawesome/fontawesome-free/svgs/solid/moon.svg?raw';
import mountain from '@fortawesome/fontawesome-free/svgs/solid/mountain.svg?raw';
import squareRootVariable from '@fortawesome/fontawesome-free/svgs/solid/square-root-variable.svg?raw';

// Keep only the drawing: drop XML headers, editor metadata and fixed sizes.
const clean = (svg: string) => {
  const viewBox = svg.match(/viewBox="([^"]+)"/)![1];
  const paths = [...svg.matchAll(/<path[\s\S]*?\sd="([^"]+)"[\s\S]*?\/>/g)].map((m) => `<path d="${m[1]}"/>`).join('');
  return `<svg viewBox="${viewBox}" aria-hidden="true" focusable="false" fill="currentColor">${paths}</svg>`;
};

export const icons: Record<string, string> = Object.fromEntries(
  Object.entries({ github, scholar, water, seedling, paw, robot, shapes, house, envelope, sun, moon, mountain, 'square-root-variable': squareRootVariable, 'file-arrow-down': fileArrowDown, 'location-crosshairs': locationCrosshairs, 'wave-square': waveSquare }).map(([k, v]) => [k, clean(v)]),
);
