/// <reference types="react" />
import { Story } from '@storybook/react/types-6-0';
import { TileListProps } from '../Types';
declare const _default: {
    title: string;
    component: ({ children }: TileListProps) => JSX.Element;
};
export default _default;
export declare const Single: Story<TileListProps>;
export declare const Multiple: Story<TileListProps>;
