import { Input } from "@shared/ui-toolkit";
import { useCallback, useState } from "react";
import { CenteredGroup } from "@entities/landing/containers";
import { ArrowDown } from "lucide-react";

function PostsSearchFilters() {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    }, []);

    return (
        <div className="max-w-[680px] w-full mx-auto mt-s before:content-['_'] before:absolute before:bg-[url(/images/icon-search-24px-400w.svg)] before:bg-no-repeat before:bg-center before:size-[48px] before:left-[2px] before:top-[50%] before:grayscale-100 before:opacity-30 before:-translate-y-[50%] relative">
            <Input
                placeholder='Search by blog posts...'
                className="h-[50px] rounded-[50px] w-full pr-[295px] pl-[44px] mb-1 text-[1.6rem]!"
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <div className="absolute right-[1px] left-auto w-auto top-0 bottom-0 flex flex-row-reverse z-4">
                <div className="px-[25px] py-[2px] h-[48px] flex items-center justify-center w-full">
                    <CenteredGroup orientation='horizontal' className="gap-4">
                        <div className="text-[1.6rem]">Categories</div>
                        <ArrowDown className="size-[16px]" />
                    </CenteredGroup>
                </div>
                <div className="px-[25px] py-[2px] h-[48px] border-x border-neutral-400/20 flex items-center justify-center w-full">
                    <CenteredGroup orientation='horizontal' className="gap-4">
                        <div className="text-[1.6rem]">Language</div>
                        <ArrowDown className="size-[16px]" />
                    </CenteredGroup>
                </div>
            </div>
        </div>
    )
}

export { PostsSearchFilters };