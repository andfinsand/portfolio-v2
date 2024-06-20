declare module 'lax.js' {
    const lax: {
        init: () => void;
        addDriver: (name: string, handler: () => number) => void;
        addElements: (
        elements: string | Element | Element[],
        options: {
            [key: string]: {
            [key: string]: [string[], (string | number)[], object?]
            }
        }
        ) => void;
        removeElements: (elements: string | Element | Element[]) => void;
    };

    export default lax;
}
