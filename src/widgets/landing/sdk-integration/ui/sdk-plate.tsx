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
            className="sm:nth-[10]:col-span-3 md:nth-[9]:col-span-2 md:nth-[10]:col-span-2 lg:col-span-1! overflow-hidden relative flex flex-col items-center justify-center gap-4 border border-gray-200 rounded-xl p-8 hover:border-gray-400 duration-100"
        >
            {backgroundSrc && (
                <img
                    src={backgroundSrc}
                    alt=""
                    aria-hidden="true"
                    className="absolute w-full h-full opacity-5 object-cover pointer-events-none -left-30 overflow-hidden" />
            )}
            <img src={iconSrc} alt={title} className="w-16 h-16 object-contain relative z-10" />
            <span className="text-gray-900 text-xl sm:text-2xl font-medium relative z-10">{title}</span>
        </a>
    );
};

export { SdkPlate };