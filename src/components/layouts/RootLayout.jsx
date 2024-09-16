import React from "react";
import { Outlet, useLocation, useNavigation } from "react-router-dom";
import SideNav from "./SideNav";
import TopNav from "./TopNav";
import ScrollToTop from "../ScrollToTop";
import Spinner from "../Spinner";
import LayoutSpinnerModal from "./LayoutSpinnerModal";

const RootLayout = () => {
    const { pathname } = useLocation();
    const { state } = useNavigation();
    const isLoading = state === "loading";

    return (
        <div className="h-screen flex relative md:overflow-hidden">
            <ScrollToTop dependency={pathname} />

            <aside className="hidden flex-none md:block w-[292px]">
                <SideNav />
            </aside>

            <main className="flex flex-col grow overflow-y-auto">
                <TopNav />

                <section className="grow px-4 sm:px-6 lg:px-[85px] py-8">
                    <Outlet />
                </section>

                <LayoutSpinnerModal isOpen={isLoading}>
                    <Spinner />
                </LayoutSpinnerModal>
            </main>
        </div>
    );
};

export default RootLayout;
