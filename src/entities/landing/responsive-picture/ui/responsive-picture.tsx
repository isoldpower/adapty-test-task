interface ImageSource {
    media?: string;
    srcSet: string;
    type?: string;
}

interface ResponsivePictureProps {
    sources: ImageSource[];
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
    pictureClassName?: string;
    pictureId?: string;
    imgId?: string;
    loading?: 'lazy' | 'eager';
    fetchPriority?: 'high' | 'low' | 'auto';
    decoding?: 'async' | 'sync' | 'auto';
    draggable?: boolean;
}

function ResponsivePicture({
   sources,
   src,
   alt,
   width,
   height,
   className = '',
   pictureClassName = '',
   pictureId,
   imgId,
   loading = 'lazy',
   fetchPriority = 'auto',
   decoding = 'async',
   draggable = false
}: ResponsivePictureProps) {
    return (
        <picture className={pictureClassName} id={pictureId}>
            {sources.map((source, index) => (
                <source
                    key={index}
                    media={source.media}
                    srcSet={source.srcSet}
                    type={source.type ?? 'image/webp'}
                />
            ))}
            <img
                id={imgId}
                alt={alt}
                className={className}
                decoding={decoding}
                draggable={draggable}
                fetchPriority={fetchPriority}
                height={height}
                loading={loading}
                src={src}
                width={width}
            />
        </picture>
    );
}

export { ResponsivePicture };
export type { ResponsivePictureProps, ImageSource };
