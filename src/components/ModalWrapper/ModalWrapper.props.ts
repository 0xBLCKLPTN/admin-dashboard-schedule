import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface ModalWrapperProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    width: "WM" | "WL";
    height: "HM" | "HL";
    isOpen: boolean
    onClose: () => void
}
