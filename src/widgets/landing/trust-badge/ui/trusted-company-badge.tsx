import { ResponsivePicture } from "@entities/landing/responsive-picture";
import { TrustedCompanyHover } from "@features/landing/hover-animations";

interface TrustedCompany {
    name: string;
    logo: {
        sources: { srcSet: string }[];
        src: string;
        alt: string;
        width: number;
        height: number;
    };
}

interface TrustedCompanyBadgeProps {
    company: TrustedCompany;
}

function TrustedCompanyBadge({
    company
}: TrustedCompanyBadgeProps) {
    return (
        <TrustedCompanyHover>
            <ResponsivePicture
                className="max-h-11 w-auto object-contain"
                {...company.logo}
            />
        </TrustedCompanyHover>
    );
}

export { TrustedCompanyBadge };
export type { TrustedCompanyBadgeProps, TrustedCompany };