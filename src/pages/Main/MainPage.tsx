import { MainPageProps } from "./MainPage.props";
import { Text } from "../../components/Text/Text";
import { Card } from "../../components/Card/Card";

import styles from "./MainPage.module.scss";


export const MainPage = (props: MainPageProps): JSX.Element => {
  const arr1: Array<string> = ['1 курс', '2 курс', '3 курс', '4 курс', '5 курс'];
  return (
    <main>
      <Text size="L" className="mb-35">
        Панель управления
      </Text>
      <section className={styles.dashboard}>
        <div className={styles["dashboard-main"]}>
          <div>
            <Text className="mb-5" size="L">
              Январь 2023
            </Text>
            <Text size="M" className="mb-25" isDark={true}>
              Расписание на месяц
            </Text>
          </div>
          <div className={styles.calendar}></div>
        </div>
      <Card list={arr1} count={46} headling={'Групп всего'} />
      </section>
    </main>
  );
};
