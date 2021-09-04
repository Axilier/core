import React from 'react';
import { LayoutProps } from '../Types';
declare const Layout: ({ center, orientation, style, children, elemRef, ...elementProps }: LayoutProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => JSX.Element;
export default Layout;
