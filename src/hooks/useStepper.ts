import { useState, useCallback } from 'react';

export default (
    initialState: number,
): [number, () => void, () => void, () => void] => {
    const [state, setState] = useState(initialState);
    const increment = useCallback(() => setState(state + 1), [state]);
    const decrement = useCallback(() => setState(state - 1), [state]);
    const zero = useCallback(() => setState(0), [state]);
    return [state, increment, decrement, zero];
};
