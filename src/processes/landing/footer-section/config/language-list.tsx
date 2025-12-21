const BritishFlag = () => {
    return (
        <img
            alt="British Flag logo"
            className="size-10"
            height="24"
            width="36"
            src="https://adapty.io/assets/plugins/sitepress-multilingual-cms/res/flags/en.svg"
        />
    );
}

const languageList = [
    {code: "en", label: "English", Icon: <BritishFlag />},
    {code: "es", label: "Spanish", Icon: <BritishFlag />},
    {code: "fr", label: "French", Icon: <BritishFlag />},
    {code: "de", label: "German", Icon: <BritishFlag />},
    {code: "zh", label: "Chinese", Icon: <BritishFlag />},
    {code: "ja", label: "Japanese", Icon: <BritishFlag />},
    {code: "ru", label: "Russian", Icon: <BritishFlag />},
    {code: "ar", label: "Arabic", Icon: <BritishFlag />},
];

export {languageList};