import React from "react";

const TopBar = () => (
    <div>
        <meta charSet="utf-8" />
        <title>Home Page</title>
        <meta name="description" />
        <meta name="keywords" />
        <meta name="robots" content="topbar, follow" />
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1.0"  
        />

        <div className="full-with address bg-green-100">
            <div className="flex items-center px-3 justify-between gap-5 mx-auto max-w-[1320px] py-[10px]">
                <p className="text-base hidden font-bold md:block">
                    Amritsar Punjab, Pune Maharashtra
                </p>
                <div className="flex items-center gap-5 contact ml-auto gap-[10px] md:gap-5 md:flex-row">
                    {" "}
                    <span>+91 82890 - 36681</span>
                    <div className="border border-dashed border-white self-stretch" />
                    <span>support@ekonkarkolhu.shop</span>
                </div>
            </div>
        </div>
    </div>
);

export default TopBar;

