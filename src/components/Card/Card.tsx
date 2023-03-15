import React, {ForwardedRef, forwardRef} from 'react';
import styles from './Card.module.scss'
import {CardProps} from './Card.props'
import cn from "classnames";

export const Card = forwardRef(({
                                    height,
                                    width,
                                    className,
                                    children,
                                    ...props
                                }: CardProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    
    return (
        <div ref={ref} className={cn(styles.Card, className, styles[height], styles[width])}
             {...props}>
            {children}
        </div>
    );
})