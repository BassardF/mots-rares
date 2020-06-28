const BASE_SPACING = 4;

type Multiplier = number;

const getSpacing = (multiplier: Multiplier) => multiplier * BASE_SPACING;

export { getSpacing, Multiplier };
