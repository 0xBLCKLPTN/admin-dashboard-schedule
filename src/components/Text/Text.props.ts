import {DetailedHTMLProps, HTMLAttributes, ReactNode, RefObject} from 'react';

export interface TextProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  size?: 'L' | 'M' | 'S';
  isDark?: boolean;
  children: ReactNode;
}