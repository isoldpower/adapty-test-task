import {
    Button,
    Card,
    Input,
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@shared/ui-toolkit";


interface EbookCtaPostProps {
    title: string
    description: string
    image: string
}

function EbookCtaPost({
    title,
    description,
    image,
}: EbookCtaPostProps) {
    return (
        <Card className="w-full shadow-sm p-m bg-a-bg-website flex flex-col md:flex-row items-center justify-between gap-16">
            <div className="shrink-0 w-full md:w-1/2">
                <img
                    src={image}
                    alt={title}
                    width={240}
                    height={320}
                    className="rounded-xl shadow-lg w-full"
                />
            </div>

            <div className="w-full md:w-1/2 space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                    {title}
                </h2>
                <p className="text-[calc(1.6rem+2px)]">
                    {description}
                </p>
                <form className="flex flex-col gap-4">
                    <div className='grid grid-cols-2 gap-4 items-center'>
                        <Input title="name" type="text" placeholder="Name*" className="h-[44px] text-2xl! pl-6" />
                        <Input title="url" type="url" placeholder="App's or company's URL*" className="h-[44px] text-2xl! pl-6" />
                        <Input title="email" type="email" placeholder="Email*" className="h-[44px] text-2xl! pl-6" />
                        <Select>
                            <SelectTrigger className="w-full h-[44px]! text-2xl! pl-6">
                                <SelectValue placeholder="Last month app revenue*" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem className="h-[44px] text-2xl! pl-6" value="0-1k">0 - 10 000</SelectItem>
                                    <SelectItem className="h-[44px] text-2xl! pl-6" value="10k-50k">10 000 - 50 000</SelectItem>
                                    <SelectItem className="h-[44px] text-2xl! pl-6" value="50k-100k">50 000 - 100 000</SelectItem>
                                    <SelectItem className="h-[44px] text-2xl! pl-6" value="100k+">100 000+</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <Button size="lg" className="text-2xl h-[44px] border-accent! text-accent" variant="outline">
                        Get the free ebook
                    </Button>
                </form>
            </div>
        </Card>
    );
}

export { EbookCtaPost };
export type { EbookCtaPostProps };