import React, {ChangeEvent, useState} from 'react';
import styles from './SelectData.module.scss'
import {SelectDataProps} from './SelectData.props'
import cn from "classnames";
// @ts-ignore
import InputMask from "react-input-mask";
import {formatDate} from "../../helpers/formatDate";

export const SelectData = ({children, className, ...props}: SelectDataProps): JSX.Element => {
    
    const [date, setDate] = useState(formatDate(new Date()));
    
    const onChange = (e: ChangeEvent<InputMask>) => {
        setDate(e.target.value);
    }
    
    return (
        <div className={cn(styles.SelectData, className)}
             {...props}>
            <img src="/calendar.svg" alt="calendar"/>
            <InputMask
                onChange={onChange}
                value={date}
                className={styles.InputMask}
                mask='99.99.9999'
                placeholder='dd.mm.yy'>
            </InputMask>
        </div>
    
    );
}