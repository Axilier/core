import { ForwardedRef, RefObject, useEffect, useMemo } from 'react';

export default (
    callback: () => void,
    refContainer:
        | RefObject<HTMLDivElement>
        | ForwardedRef<HTMLDivElement>
        | Array<RefObject<HTMLDivElement> | ForwardedRef<HTMLDivElement>>,
): void => {
    const refs = useMemo(
        () => (Array.isArray(refContainer) ? refContainer : [refContainer]),
        [refContainer],
    );

    useEffect(() => {
        const handleMouseDown = (event: MouseEvent) => {
            if (
                refs.every(
                    ref =>
                        typeof ref !== 'function' &&
                        ref &&
                        ref.current &&
                        !ref.current.contains(event.target as Node),
                )
            ) {
                callback();
            }
        };
        document.addEventListener('click', handleMouseDown);
        return () => {
            document.removeEventListener('click', handleMouseDown);
        };
    }, [callback, refs]);
};
