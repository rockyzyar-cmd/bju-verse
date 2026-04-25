export interface ComponentCode {
  html: string;
  css: string;
  js: string;
  ts?: string;
  tailwind?: string;
}

export interface Variant {
  id: string;
  name: string;
  code: ComponentCode;
}

export interface UIComponent {
  id: string;
  name: string;
  category: string;
  tags: string[];
  code: ComponentCode;
  variants: Variant[];
  authorId: string;
  authorName: string;
  createdAt: number;
}

export interface UserProfile {
  uid: string;
  username: string;
  email: string;
  avatar?: string;
  theme: 'dark' | 'light';
  savedIds: string[];
  forkedIds: string[];
  favoritesIds: string[];
  isAdmin: boolean;
}

export type Category = 
  | 'Buttons'
  | 'Forms'
  | 'Inputs'
  | 'Sliders'
  | 'Icons'
  | 'Social UI'
  | 'Backgrounds'
  | 'Text'
  | 'Cards'
  | 'Animations'
  | 'Hover Effects'
  | 'Loaders'
  | 'Favorites'
  | 'Saved'
  | 'Uploads';
