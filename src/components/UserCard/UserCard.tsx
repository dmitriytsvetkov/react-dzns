import styles from './UserCard.module.scss';

const UserCard = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className="user-card__img-wrapper">
                    <img src="./img/no-photo.png" alt="no photo"/>
                </div>
                <div>
                    <h2 className={styles.title}>Ivanov Vladimir Pavlovich</h2>
                    <div className="user-card__location">Moscow, Russia</div>
                    <div className="user-card__job-name">Maybe job place/name</div>
                    <div>
                        <div className={styles.tagsContainer}>
                            <div className={styles.tag}>agitation</div>
                            <div className={styles.tag}>drive</div>
                            <div className={styles.tag}>demonstration</div>
                        </div>
                        <button className={styles.addTag}>Add tag</button>
                    </div>
                </div>
                <div className="user-card__activity">
                    <span>Activity</span>
                </div>
            </div>
            <div className={styles.footer}>
                <div className={styles.contactBlock}>
                    <div className="contact-block__item">
                        <button className="contact-block__call">Позвонить</button>
                    </div>
                    <div className="contact-block__item">
                        <button className="contact-block__call">Написать на почту</button>
                    </div>
                    <div className="contact-block__item">
                        <button className="contact-block__call">Написать сообщение</button>
                    </div>
                </div>
                <div className={styles.buttons}>
                    <button
                        className={styles.button}>Добавить
                        комментарий
                    </button>
                    <button
                        className={styles.button}>Посмотреть,
                        есть ли кандидат в других папках
                    </button>
                    <button
                        className={styles.button}>Посмотреть
                        есть ли данный кандидат в других рассылках
                    </button>
                    <button
                        className={styles.button}>Добавить
                        файл
                    </button>
                </div>
                <div className={styles.socialBlock}>
                    <a className={styles.socialBlockButton}>Вконтакте</a>
                    <a className={styles.socialBlockButton}>Яндекс</a>
                    <a className={styles.socialBlockButton}>Госуслуги</a>
                </div>
                <button className={styles.addToFolder}>add to folder</button>
            </div>
        </div>
    )
}

export default UserCard;
