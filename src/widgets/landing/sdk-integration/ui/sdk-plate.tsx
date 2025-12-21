interface SdkPlateProps {
    title: string;
    iconSrc: string;
    href: string;
    backgroundSrc: string;
}

const SdkPlate: React.FC<SdkPlateProps> = ({
    title,
    iconSrc,
    href,
    backgroundSrc
}) => {
    return (
        <a
            href={href}
            className="overflow-hidden relative flex flex-col items-center justify-center gap-4 bg-[#1a1a1a] border border-gray-800 rounded-xl p-8 hover:border-gray-600 transition-colors"
        >
            {backgroundSrc && (
                <img
                    src={backgroundSrc}
                    alt=""
                    aria-hidden="true"
                    className="absolute w-full h-full opacity-10 object-cover pointer-events-none -left-30 overflow-hidden" />
            )}
            <img src={iconSrc} alt={title} className="w-16 h-16 object-contain" />
            <span className="text-white text-2xl font-medium">{title}</span>
        </a>
    );
};

export { SdkPlate };