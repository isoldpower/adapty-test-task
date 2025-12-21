import { cloneElement, useMemo } from "react";
import type { BaseHTMLAttributes, ReactElement } from "react";


type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type AttributesType = BaseHTMLAttributes<HTMLHeadingElement>;

type DefaultHeadingProps = AttributesType & {
    heading: HeadingType;
};

const headingMap: Record<HeadingType, ReactElement<AttributesType>> = {
    h1: <h1 />,
    h2: <h2 />,
    h3: <h3 />,
    h4: <h4 />,
    h5: <h5 />,
    h6: <h6 />,
};

function DefaultHeading({
    children,
    heading,
    ...props
}: DefaultHeadingProps) {
    const Element = useMemo(() => {
        return headingMap[heading];
    }, [heading]);

    return cloneElement(Element, {
        ...Element.props,
        ...props,
        children
    });
}

export { DefaultHeading };
export type { DefaultHeadingProps };