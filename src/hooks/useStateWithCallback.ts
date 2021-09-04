import { useState, useEffect, Dispatch, SetStateAction } from 'react';

export default <S>(
    initialState: S,
    callback: (state: S) => void,
): [S, Dispatch<SetStateAction<S>>] => {
    const [state, setState] = useState(initialState);

    useEffect(() => callback(state), [state, callback]);

    return [state, setState];
};
