import { useMemo } from 'react';
import { useDocumentSize } from './use-document-size.ts';

type BreakpointKey = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
type BreakpointsMapKey = BreakpointKey | 'default';

type BreakpointsRecord = Record<BreakpointKey, number>;

const defaultBreakpoints: BreakpointsRecord = {
    xs: 360,
    sm: 432,
    md: 768,
    lg: 992,
    xl: 1280,
    '2xl': 1536,
};

function useBreakpointsMapping<T>(
    breakpointsMap: Record<BreakpointsMapKey, T>,
    breakpoints: BreakpointsRecord = defaultBreakpoints,
): T {
    const { width } = useDocumentSize();

    return useMemo<T>(() => {
        const sortedBreakpoints = Object.entries(breakpoints).sort(
            ([, widthA], [, widthB]) => widthA - widthB
        ) as [BreakpointKey, number][];

        let activeValue: BreakpointsMapKey = 'default';
        for (const [name, breakpointWidth] of sortedBreakpoints) {
            if (width >= breakpointWidth) {
                activeValue = name;
            } else {
                break;
            }
        }

        return breakpointsMap[activeValue];
    }, [width, breakpoints, breakpointsMap]);
}

export { useBreakpointsMapping };