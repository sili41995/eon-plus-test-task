import { MouseEvent } from 'react';
import { Location } from 'react-router-dom';
import { PagePaths, PageTitles } from '@/constants';

// data
export type StringOrNull = string | null;

export type NumberOrNull = number | null;

// events
export type AnchorClickEvent = MouseEvent<HTMLAnchorElement>;

export type BtnClickEvent = MouseEvent<HTMLButtonElement>;

// functions
export type SetBooleanFunc = (data: boolean) => void;

export type SetStringFunc = (data: string) => void;

// export type Func = () => void;

// export type OnBtnClickFunc = (e: BtnClickEvent) => void;

// other
export interface INavLinks {
  privateNavLinks: NavLinks;
  authNavLinks: NavLinks;
}

export interface INavLink {
  title: PageTitles;
  href: PagePaths;
}

export type NavLinks = INavLink[];

export interface IRegExp {
  email: RegExp;
  phone: RegExp;
}

export type PageLocation = Location<any>;

export interface IPrevLocation {
  from: PageLocation;
}

export interface ILocation extends PageLocation {
  state: IPrevLocation | undefined;
}

export type InputType = 'text' | 'email' | 'password' | 'tel';
