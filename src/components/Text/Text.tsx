import cn from 'classnames';
import styles from './Text.module.scss';
import {TextProps} from './Text.props';
import {ForwardedRef, forwardRef} from "react";

export const Text = ({
                         children,
                         size = 'M',
                         isDark,
                         className,
                         ...props
                     }: TextProps): JSX.Element => {
    const style = cn(styles.text, className, styles[size], {
        [styles.dark]: isDark
    });
    
    return (
        <p {...props} className={style}>{children}</p>
    )
}