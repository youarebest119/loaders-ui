export interface ILoader {
    color?: string,
    width?: string | number,
    className?: string,
}

export interface IColorFullSpinner extends Omit<ILoader , "color"> {
    colors?: [string, string, string, string],
}

export interface IDoubleRing extends Omit<ILoader , "width"> {
    width?: number,
}

export interface IExpandingRing extends ILoader {
    borderWidth?: number,
}