import React, {useRef, useState} from 'react';
import styles from './ModalWrapper.module.scss'
import {ModalWrapperProps} from './ModalWrapper.props'
import cn from "classnames";
import {Card} from "../Card/Card";
import {createPortal} from "react-dom";
import {useOutsideClick} from "../../hooks/useOutsideClick";

export const ModalWrapper = ({
                                 isOpen,
                                 onClose,
                                 width,
                                 height,
                                 children,
                                 className,
                                 ...props
                             }: ModalWrapperProps): JSX.Element | null => {
    
    const modalRef = useRef(null);
    
    useOutsideClick(modalRef, onClose);
    
    if (!isOpen) return null;
    
    document.onkeydown = (e: KeyboardEvent) => {
        if (e.key === "Escape" && isOpen) {
            onClose()
        }
    }
    
    return (
        <>
            {isOpen && createPortal(
                (<div className={styles.ModalWrapper}>
                    <Card ref={modalRef} className={styles.card} width={width}
                          height={height}>
                        <img onClick={onClose} className={styles.img} src="/close.svg" alt="close"/>
                        {children}
                    </Card>
                </div>), document.getElementById("modal")!
            )}
        </>
    )
}

