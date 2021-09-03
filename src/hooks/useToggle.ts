import { useState, useCallback } from 'react';

export default (
    initialState: boolean,
): [boolean, (newState?: boolean) => void] => {
    const [state, setState] = useState(initialState);
    const toggle = useCallback(
        (newState?: boolean) =>
            setState(
                newState === null || newState === undefined ? !state : newState,
            ),
        [state],
    );
    return [state, toggle];
};
