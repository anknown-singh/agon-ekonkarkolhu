import React from "react";

const TopBar = () => (
        <div className="full-with address bg-primary">
            <div className="flex items-center px-3 justify-between gap-5 mx-auto max-w-[1320px] py-[10px]">
                <p className="text-base hidden font-bold md:block text-white">
                    Amritsar Punjab, Pune Maharashtra
                </p>
                <div className="flex items-center gap-5 contact ml-auto gap-[10px] md:gap-5 md:flex-row text-white font-bold">
                    <span>+91 82890 - 36681</span>
                    <div className="border border-dashed border-white self-stretch" />
                    <span>support@ekonkarkolhu.shop</span>
                </div>
            </div>
        </div>
);

export default TopBar;

