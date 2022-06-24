import MainListItem from '../MainListItem/MainListItem';
import styles from './MainList.module.scss';
import {AppRoute} from '../../../const';

const MainList = () => {
    return (
        <div className={styles['main-list']}>
            <MainListItem title={'Входящие заявки'} link={AppRoute.Inbox}/>
            <MainListItem title={'Поиск кандидатов'} link={AppRoute.Participants}/>
            <MainListItem title={'Новости системы'} link={AppRoute.News}/>
        </div>
    )
}

export default MainList;
