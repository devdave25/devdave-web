import React from "react";
import classNames from "classnames";
import { useHotkeys } from "react-hotkeys-hook";
import { Modal } from "./modal";
import { useModal } from "@/context/modal";
import { NavMenu } from "@/containers/nav-menu";
import { useRouter } from "next/router";

export const Search: React.FC = () => {
    const [isMac, setIsMac] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);
    const { showModal, hideModal } = useModal();
    const router = useRouter();

    React.useEffect(() => {
        setIsMac(navigator.userAgent.includes('Mac'));
        setIsLoading(false);
    }, []);

    const toggleSearch = () => {
        showModal(<Modal onDismiss={hideModal} hideClose><NavMenu handleSelect={(link) => { hideModal(); router.push(link) }} /></Modal>);
    };

    useHotkeys(isMac ? "meta+/" : "ctrl+/", toggleSearch);

    if (isLoading) {
        return null;
    }


    return (
        <div
            className={classNames(
                "flex border rounded px-4 py-2 md:w-80 sm:w-60 w-40 cursor-pointer justify-between hover:zinc-500"
            )}
            onClick={toggleSearch}
        >
            <div>
                Navigate...
            </div>
            {isMac !== undefined && <div className="invisible sm:visible">{isMac ? "Cmd + /" : "Ctrl + /"}</div>}
        </div >
    );
};
