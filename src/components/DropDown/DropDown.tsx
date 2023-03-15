import {CSSProperties, MutableRefObject, useCallback, useEffect, useLayoutEffect, useRef, useState} from 'react';
import styles from './DropDown.module.scss'
import {DropDownProps} from './DropDown.props'
import cn from "classnames";
import {Text} from "../Text/Text";
import {current} from "@reduxjs/toolkit";
import {useOutsideClick} from "../../hooks/useOutsideClick";

export const DropDown = ({obj, className, ...props}: DropDownProps): JSX.Element => {
    
    const listItemRef = useRef<HTMLLIElement>(null) as MutableRefObject<HTMLLIElement>;
    const titleRef = useRef<HTMLDivElement>(null) as MutableRefObject<HTMLDivElement>;
    const textRef = useRef<HTMLParagraphElement>(null) as MutableRefObject<HTMLParagraphElement>;
    const menuListRef = useRef<HTMLDivElement>(null);
    
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [content, setContent] = useState(obj.title);
    const [openedWidth, setOpenedWidth] = useState<number | undefined>(0);
    const [closedWidth, setClosedWidth] = useState<number | undefined>(0);
    
    useLayoutEffect(() => {
        setClosedWidth(textRef.current.clientWidth + 24)
    }, [textRef.current, isOpen])
    
    useEffect(() => {
        makeEqual(listItemRef, titleRef)
    }, []);
    
    useOutsideClick(menuListRef, () => {
        setIsOpen(false)
    });
    
    const makeEqual = (refList: { current: { clientWidth: number; }; },
                       refTitle: { current: { clientWidth: number; }; },
                       ) => {
        refList!.current.clientWidth > refTitle.current.clientWidth
            ? setOpenedWidth(refList!.current.clientWidth)
            : setOpenedWidth(refTitle.current.clientWidth)
    }
    
    const handleClickItem = (text: string) => {
        setIsOpen(false);
        setContent(text);
    };
    
    const style: CSSProperties = {
        minWidth: `${isOpen ? openedWidth : closedWidth}px`
    }
    
    return (
        <div ref={menuListRef} className={cn(className, styles.dropdown)} {...props} >
            <div className={styles.titleWrapper}>
                <div style={style} ref={titleRef} onClick={() => setIsOpen(!isOpen)} className={styles.title}>
                    <Text ref={textRef} className={styles.text} size={"S"}>{content}</Text>
                    <img className={cn(styles.img, {
                        [styles.arrowUP]: isOpen
                    })} src="/arrow.svg" alt="arrow"/>
                </div>
            </div>
            <ul className={cn(styles.list, {
                [styles.hidden]: !isOpen
            })}>
                {obj.list.map((item) => (
                    <li style={style} ref={listItemRef} key={item} onClick={() => handleClickItem(item)}
                        className={styles.item}>{item}</li>
                ))}
            </ul>
        </div>
    );
}


