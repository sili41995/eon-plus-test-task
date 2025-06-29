import { RefDivObject } from '@/types/general.types';
import { ReactNode } from 'react';

export interface IProps {
  children: ReactNode;
  contentRef?: RefDivObject;
}
