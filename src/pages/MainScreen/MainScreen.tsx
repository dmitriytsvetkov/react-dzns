import MainList from '../../components/MainListMenu/MainList/MainList';
import styles from './MainScreen.module.scss';

const MainScreen = () => {
    return (
        <div className={styles.main}>
            <div className={styles['main__list']}>
                <MainList/>
            </div>
        </div>
    )
}

export default MainScreen;
