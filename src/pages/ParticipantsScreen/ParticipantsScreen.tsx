import UserCard from '../../components/UserCard/UserCard';

const ParticipantsScreen = () => {
    return (
        <div className={'content'}>
            <div className={'filter-block'}>
                Фильтры
            </div>

            <UserCard/>
        </div>
    )
}

export default ParticipantsScreen;
