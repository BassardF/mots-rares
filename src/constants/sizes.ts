const SIZE = { s: 12, m: 14, l: 18, xl: 24, xxl: 35 };

type Sizes = "s" | "m" | "l" | "xl" | "xxl";

const getSize = (size: Sizes) => SIZE[size];

export { getSize, Sizes };
