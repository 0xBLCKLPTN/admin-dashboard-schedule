import React, {useState} from 'react';
import styles from './Draft.module.scss'
import {DraftProps} from './Draft.props'
import cn from "classnames";
import {Button, Card, DropDown, Input, ModalWrapper, SelectData} from "../../components";
import {ViewSchedule} from "../../pageComponent/ViewSchedule/ViewSchedule";


export const Draft = ({className, ...props}: DraftProps): JSX.Element => {
    
    const [isOpen, setIsOpen] = useState(false);
    
    const onClose = () => {
        setIsOpen(false);
    };
    
    return (
        <div>
            <button onClick={() => setIsOpen(true)}>Нажать</button>
            <ViewSchedule isOpen={isOpen} onClose={onClose}/>
        </div>
    );
}