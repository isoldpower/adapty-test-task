import { Badge } from "@shared/ui-toolkit";
import { ArrowRight } from "lucide-react";
import { RedirectToEbook } from "@features/landing/navigation";

function EBookReference() {
    return (
        <RedirectToEbook>
            <Badge
                variant="outline"
                className="flex flex-row items-center gap-4 mb-6 bg-a-bg-website rounded-full px-4 py-2 text-accent transition-all hover:shadow-md hover:scale-[1.01]"
            >
                <Badge variant="outline" className="text-primary rounded-full px-2 py-0.5 text-lg font-semibold">
                    Ebook
                </Badge>
                <span className="font-semibold text-2xl text-primary">
                    $100K playbook | download
                </span>
                <ArrowRight className="text-primary h-6 w-6" />
            </Badge>
        </RedirectToEbook>
    );
}

export { EBookReference };