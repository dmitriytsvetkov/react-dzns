import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import styles from './Header.module.scss';
import cn from 'classnames';
import HeaderButtons from './HeaderButtons/HeaderButtons';

const Header = () => {
    return (
        <header className={styles.header}>
                <Link to={AppRoute.Root} className={styles['header__logo-container']}>
                    <picture className={cn(styles['header__logo'], styles['header__logo--sm'])}>
                        <source srcSet="img/header-logo-small.avif" type="image/avif"/>
                        <source srcSet="img/header-logo-small.webp" type="image/webp"/>
                        <img src="img/header-logo-small.png" loading="lazy" width="49" height="49"
                             alt="Логотип движения ЗНС"/>
                    </picture>
                </Link>
                <HeaderButtons/>
        </header>
    )
}

export default Header;
