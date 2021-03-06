/** @format */

// @flow
import * as React from 'react';
import { BasicComponent } from '../../Types';
import styles from '../../css/Icons.module.css';

export const Room = ({ style, className }: BasicComponent): JSX.Element => (
    <svg
        viewBox={' 0 19 19'}
        xmlns={'http://www.w3.org/2000/svg'}
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        strokeLinejoin={'round'}
        strokeMiterlimit={2}
        style={style}
        className={`${className} ${styles.icon}`}
    >
        <path
            d={
                'M17.491 5.468a.538.538 0 00-.203.039l-.092.046-6.89 3.574-.156.08s-.002 0-.002.002a1.017 1.017 0 00-.504.86v7.468c0 .257.227.464.51.464.084 0 .168-.02.244-.056l.02-.012 7.021-3.724.01-.006c.332-.18.553-.512.553-.888V5.93c0-.255-.23-.462-.51-.462z'
            }
            fill={'#6f7b91'}
            fillRule={'nonzero'}
        />
        <path
            d={
                'M15.554 14.519a.423.423 0 01-.228.368l-.005.002-2.909 1.544-.008.004a.23.23 0 01-.101.024c-.118 0-.212-.086-.212-.193v-5.223c0-.149.083-.28.21-.357l.065-.034 2.854-1.48.038-.02a.223.223 0 01.085-.016c.116 0 .211.086.211.192v5.189z'
            }
            fill={'#a4abba'}
            fillRule={'nonzero'}
        />
        <path
            d={
                'M16.968 3.477L9.668.193S9.237 0 9 0c-.238 0-.664.193-.664.193L1.03 3.477s-.321.132-.321.38c0 .264.333.463.333.463L8.38 8.192l.116.06c.152.067.325.106.506.106.183 0 .358-.039.512-.109l.102-.052 7.349-3.88s.301-.161.301-.46c0-.26-.297-.38-.297-.38zM7.855 9.209l-.16-.082L.805 5.553l-.092-.046a.528.528 0 00-.203-.039c-.282 0-.51.207-.51.462v7.385c0 .377.22.707.551.888l.009.006 7.02 3.724a.543.543 0 00.267.068c.281 0 .51-.207.51-.464V10.07c0-.359-.2-.674-.503-.861z'
            }
            fill={'#6f7b91'}
            fillRule={'nonzero'}
        />
    </svg>
);

Room.defaultProps = {
    style: {},
};
