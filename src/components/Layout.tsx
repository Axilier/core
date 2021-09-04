import React, { CSSProperties } from 'react';
import { LayoutProps } from '../Types';

const Layout = ({
    center = false,
    orientation = 'row',
    style = {},
    children,
    elemRef,
    ...elementProps
}: LayoutProps &
    React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    >): JSX.Element => {
    const styles = () => {
        const basicStyles: CSSProperties = {
            display: 'flex',
            flexDirection: orientation,
            alignItems: 'center',
            justifyContent: 'center',
        };
        if (!center) {
            delete basicStyles.alignItems;
            delete basicStyles.justifyContent;
        }
        return basicStyles;
    };
    return (
        <div
            {...elementProps}
            ref={elemRef}
            style={{
                ...styles(),
                ...style,
            }}
        >
            {children}
        </div>
    );
};

export default Layout;
