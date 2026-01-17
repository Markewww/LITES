import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/LITES.png";
import Link from "./link";
import type { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
    const flexBetween = "flex items-center justify-between";
    const [isMenuToggled, setIsMenuToggled] =  useState<boolean>(false);
    const isAboveMediumScreens = useMediaQuery("(min-width: 1120px)"); // Set later for the width of the screen
    const navbarBackground = isTopOfPage ? "" : "bg-white drop-shadow";
  return (
    <nav>
        <div className={`${navbarBackground} ${flexBetween} Fixed top-0 z-30 w-full py-6`}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>
                    {/* LEFT SIDE */}
                    <img alt="logo" src={Logo} className="h-25 w-auto object-contain"/>

                    {/* RIGHT SIDE */}
                    {isAboveMediumScreens ? (
                        <div className={`${flexBetween} w-full`}>
                        <div className={`${flexBetween} gap-8 text-sm`}>
                            <Link 
                            page="Home" 
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            />
                            <Link 
                            page="Benefits" 
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            />
                            <Link 
                            page="Our Classes" 
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            />
                            <Link 
                            page="Contact Us" 
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            />
                        </div>
                        <div className={`${flexBetween} gap-8`}>
                            <p>Sign In</p>
                            <p>Search</p>
                            <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
                        </div>
                    </div>
                    ) : (
                        <button
                            className="rounded-full bg-white p-2 border border-primary"
                            onClick={() => setIsMenuToggled(!isMenuToggled)}
                        >
                            <Bars3Icon className="h-6 w-6 text-primary"/>
                        </button>
                    )}
                </div>
            </div>
        </div>

        {/* MOBILE MENU MODAL */}
        <AnimatePresence>
        {!isAboveMediumScreens && isMenuToggled && (
            <motion.div 
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}

            className="fixed top-0 bottom-0 z-40 h-full w-full bg-white drop-shadow-xl">
                {/* CLOSE ICON */}
                <div className="flex justify-end p-12">
                    <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                        <XMarkIcon className="h-6 w-6 text-primary"/>
                    </button>
                </div>

                {/* MENU ITEMS */}
                <div className="ml-[33%] flex flex-col gap-12 text-2xl">
                    <Link 
                    page="Home" 
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                    <Link 
                    page="Benefits" 
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                    <Link 
                    page="Our Classes" 
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                    <Link 
                    page="Contact Us" 
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                </div>
            </motion.div>
        )}
        </AnimatePresence>
    </nav>
  );
}

export default Navbar