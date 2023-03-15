import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface ViewScheduleProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isOpen: boolean
    onClose: () => void
}
