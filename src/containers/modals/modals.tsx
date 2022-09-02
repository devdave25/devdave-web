import React, { Fragment } from "react";
import { useModal } from "../../context/modal";

export interface ModalsProps {
    children?: React.ReactElement;
}
export const Modals: React.FC<ModalsProps> = ({
    children,
}) => {
    const { modals } = useModal();

    const renderModals = modals?.map((m, i) => <Fragment key={`modal-${i}`}>{m}</Fragment>)

    return <>
        {children}
        {renderModals}
    </>;
};