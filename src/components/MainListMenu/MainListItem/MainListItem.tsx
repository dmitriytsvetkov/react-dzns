import styles from './MainListItem.module.scss';
import {Link} from 'react-router-dom';

type Props = {
    title: string,
    link: string,
}

const MainListItem = ({title, link}: Props) => {
    return (
        <Link to={link} className={styles['main-list__item']}>
            {title}
        </Link>
    )
}

export default MainListItem;
