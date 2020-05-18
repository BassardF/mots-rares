const BASE_SPACING = 4;

type Multiplier = 1 | 2 | 3 | 4 | 5;

const getSpacing = (multiplier: Multiplier) => multiplier * BASE_SPACING;

export {
    getSpacing,
    Multiplier,
};