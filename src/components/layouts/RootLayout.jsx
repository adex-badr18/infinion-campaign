import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "./SideNav";
import TopNav from "./TopNav";

const RootLayout = () => {
    return (
        <div className="h-screen flex relative md:overflow-hidden">
            <aside className="hidden flex-none md:block w-[292px]">
                <SideNav />
            </aside>

            <main className="flex flex-col grow overflow-y-auto">
                <TopNav />

                <section className="grow px-4 sm:px-6 lg:px-[85px] py-8">
                    <Outlet />
                </section>
            </main>
        </div>
    );
};

export default RootLayout;
