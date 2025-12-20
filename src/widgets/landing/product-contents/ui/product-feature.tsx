import {Card} from "@shared/ui-toolkit";
import {ResponsivePicture} from "@entities/landing/responsive-picture";
import {ArrowRight} from "lucide-react";

interface FeatureBlockProps {
    image: string;
    title: string;
    href: string;
    labels: string[];
}

function FeatureBlock({
   image,
   title,
   href,
   labels,
}: FeatureBlockProps) {
    return (
        <Card className="bg-a-bg-cold border-none shadow-none">
            <a
                href={href}
                className="text-xl font-semibold text-center mt-6 mb-4 flex flex-col items-center justify-center gap-2 hover:opacity-70 transition-opacity"
            >
                <ResponsivePicture
                    src={image}
                    sources={[
                        { srcSet: image }
                    ]}
                    height={396}
                    width={707}
                    alt={[title, 'image'].join(' ')}
                    className="mb-6"
                />
                <div className='flex items-center gap-4 mb-6'>
                    <h4>{title}</h4>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>

                <div className="flex flex-wrap justify-center gap-2 px-4">
                    {labels.map((label) => (
                        <span
                            key={label}
                            className="px-4 py-2 rounded-full text-2xl text-muted-foreground font-normal bg-a-bg-website"
                        >
                            {label}
                        </span>
                    ))}
                </div>
            </a>
        </Card>
    );
}

export { FeatureBlock };