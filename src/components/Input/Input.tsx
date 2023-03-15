import React from 'react';
import styles from './Input.module.scss'
import {InputProps} from './Input.props'
import cn from "classnames";

// я не смог разобрать эту кашу...
export const Input = ({
                          placeholder,
                          isBorder = false,
                          isSearch = false,
                          className,
                          ...props
                      }: InputProps): JSX.Element => {
  
    return (
        <div className={cn(styles.Input, className, {
            [styles.border]: isBorder
        })} {...props}>
            {isSearch && <img src="/search.svg" alt="calendar"/>}
            <input className={styles.inner}
                   placeholder={placeholder}
            />
        </div>
    );
}
