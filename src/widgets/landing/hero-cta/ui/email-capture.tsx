import { Input } from "@shared/ui-toolkit";
import { EmailCaptureForm } from "@features/landing/email-capture";

function HeroEmailCapture() {
    return (
        <EmailCaptureForm>
            <Input
                type="email"
                placeholder="Email address"
                required
                className="h-[52px] text-2xl! pl-[20px] bg-a-bg-website"
            />
        </EmailCaptureForm>
    );
}

export { HeroEmailCapture };