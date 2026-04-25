import { buttons } from './buttons';
import { cards } from './cards';
import { loaders } from './loaders';
import { animations } from './animations';
import { forms } from './forms';
import { inputs } from './inputs';
import { sliders } from './sliders';
import { icons } from './icons';
import { socialUI } from './social-ui';
import { backgrounds } from './backgrounds';
import { text } from './text';
import { hoverEffects } from './hover-effects';

import { UIComponent } from '../types';

export const allComponents: UIComponent[] = [
  ...buttons,
  ...cards,
  ...loaders,
  ...animations,
  ...forms,
  ...inputs,
  ...sliders,
  ...icons,
  ...socialUI,
  ...backgrounds,
  ...text,
  ...hoverEffects
];

export const getComponentsByCategory = (category: string) => {
  return allComponents.filter(c => c.category === category);
};

export const getComponentById = (id: string) => {
  return allComponents.find(c => c.id === id);
};
