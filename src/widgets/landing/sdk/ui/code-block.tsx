import { useEffect, useState } from "react";
import { codeToHtml } from "shiki";
import { Button, Tabs, TabsContent, TabsList, TabsTrigger } from "@shared/ui-toolkit";
import { Check, Copy } from "lucide-react";

interface CodeTab {
    label: string;
    language: string;
    code: string;
}

interface CodeBlockProps {
    tabs: CodeTab[];
    githubUrl: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ tabs, githubUrl }) => {
    const [copied, setCopied] = useState(false);
    const [activeTab, setActiveTab] = useState(tabs[0]?.label ?? "");
    const [highlightedCode, setHighlightedCode] = useState<
        Record<string, string>
    >({});

    useEffect(() => {
        const highlightAll = async () => {
            const highlighted: Record<string, string> = {};

            for (const tab of tabs) {
                const html = await codeToHtml(tab.code, {
                    lang: tab.language,
                    theme: "material-theme-darker",
                });
                highlighted[tab.label] = html;
            }

            setHighlightedCode(highlighted);
        };

        highlightAll()
            .catch((err: unknown) => { console.error("Failed to highlight code:", err); });
    }, [tabs]);

    const handleCopy = () => {
        const currentTab = tabs.find((tab) => tab.label === activeTab);
        if (currentTab) {
            navigator.clipboard.writeText(currentTab.code)
                .then(() => {
                    setCopied(true);
                    setTimeout(() => { setCopied(false); }, 2000);
                })
                .catch((err: unknown) => { console.error("Failed to copy code to clipboard:", err); });
        }
    };

    const lineCount = 15;

    return (
        <div className="bg-[#212121] rounded-2xl overflow-hidden w-full">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="w-full justify-start bg-transparent border-b border-gray-800 rounded-none h-auto p-0">
                    {tabs.map((tab) => (
                        <TabsTrigger
                            key={tab.label}
                            value={tab.label}
                            className="px-8 py-4 rounded-none border-b-2 border-transparent data-[state=active]:border-b-white data-[state=active]:bg-transparent bg-transparent text-gray-500 data-[state=active]:text-white data-[state=active]:shadow-none"
                        >
                            {tab.label}
                        </TabsTrigger>
                    ))}
                </TabsList>

                {tabs.map((tab) => (
                    <TabsContent key={tab.label} value={tab.label} className="mt-0">
                        <div className="relative">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="absolute top-4 right-4 text-[#EEFFFF] hover:text-white hover:bg-gray-800 z-10"
                                onClick={handleCopy}
                            >
                                {copied ? (
                                    <Check className="h-5 w-5" />
                                ) : (
                                    <Copy className="h-5 w-5" />
                                )}
                            </Button>

                            <div className="flex p-6 overflow-x-auto font-mono text-2xl">
                                {/* Line numbers */}
                                <div className="flex flex-col pr-4 select-none text-right text-[#EEFFFF]/50 leading-relaxed">
                                    {Array.from({ length: lineCount }, (_, i) => (
                                        <span key={i + 1}>{i + 1}</span>
                                    ))}
                                </div>

                                {/* Code */}
                                <div
                                    className="flex-1 [&_pre]:!bg-transparent [&_pre]:!m-0 [&_pre]:!p-0 [&_code]:!text-2xl [&_code]:!leading-relaxed [&_.line]:!min-h-[24px]"
                                    dangerouslySetInnerHTML={{
                                        __html: highlightedCode[tab.label] ?? "",
                                    }}
                                />
                            </div>
                        </div>
                    </TabsContent>
                ))}
            </Tabs>

            {/* GitHub footer */}
            <div className="flex items-center justify-between px-6 py-4 border-t border-gray-800">
                <div className="flex items-center gap-3">
                    <svg viewBox="0 0 24 24" className="h-7 w-7 text-white fill-current">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span className="text-white font-medium">GitHub</span>
                    <span className="text-gray-400">100% Open Source</span>
                </div>

                <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                    Go to GitHub
                    <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 17L17 7M17 7H7M17 7V17"
                        />
                    </svg>
                </a>
            </div>
        </div>
    );
};

export { CodeBlock };