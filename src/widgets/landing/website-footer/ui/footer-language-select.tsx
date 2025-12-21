import { useState } from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@shared/ui-toolkit";
import { InlineGroup } from "@entities/landing/containers";

import type { ReactNode } from "react";

interface Language {
    label: string;
    Icon: ReactNode;
    code: string;
}

interface FooterLanguageSelectProps {
    languages: Language[];
    defaultLanguageCode: string;
}

function FooterLanguageSelect({
    languages,
    defaultLanguageCode,
}: FooterLanguageSelectProps) {
    const [currentLanguage, setCurrentLanguage] = useState(defaultLanguageCode);

    return (
        <Select value={currentLanguage} onValueChange={setCurrentLanguage}>
            <SelectTrigger className='font-thin bg-a-black border-none h-[34px]! text-2xl text-muted-foreground w-[150px]'>
                <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent className='font-thin border-none bg-a-black text-accent-foreground'>
                <SelectGroup>
                    {languages.map((l: Language) => (
                        <SelectItem className='text-2xl' value={l.code} key={l.code}>
                            <InlineGroup breakpoint='all' gap={4}>
                                {l.Icon}
                                {l.label}
                            </InlineGroup>
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}

export { FooterLanguageSelect };