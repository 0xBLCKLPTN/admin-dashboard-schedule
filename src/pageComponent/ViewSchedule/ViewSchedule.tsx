import React from 'react';
import {ViewScheduleProps} from './ViewSchedule.props'
import {Button, DropDown, Input, ModalWrapper, SelectData} from "../../components";
import {Text} from "../../components/";
import styles from './ViewSchedule.module.scss'


const obj1 = {
    title: 'Курс',
    list: ['1 Курс', '2 Курс', '3 Курс', '4 Курс']
}
const obj2 = {
    title: 'Группа',
    list: ['4А1', '4В1', '4ПР1+4ПР2', '4ПК1',]
}

export const ViewSchedule = ({isOpen, onClose, children, className, ...props}: ViewScheduleProps): JSX.Element => {
    
    return (
        <ModalWrapper isOpen={isOpen} onClose={onClose} height={"HL"} width={"WL"}>
            <div className={styles.titleWrapper}>
                <div className={styles.title}>
                    <Text size={"L"}>Просмотр расписания</Text>
                    <Text size={"M"} isDark>Для определенной группы</Text>
                </div>
            </div>
            <div className={styles.body}>
                <div className={styles.bodyHeader}>
                    <SelectData/>
                    <DropDown obj={obj1}></DropDown>
                    <DropDown obj={obj2}></DropDown>
                    <Input placeholder={'Искать среди групп'} isSearch isBorder/>
                    <Button color={"primary"}>Готово</Button>
                </div>
            </div>
        </ModalWrapper>
    );
}