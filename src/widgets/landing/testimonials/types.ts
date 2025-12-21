interface CEOTestimonial {
    quote: string;
    author: string;
    role: string;
    logoSrc: string;
    avatar: {
        src: string;
        height: number;
        width: number;
    }
}

export type { CEOTestimonial };