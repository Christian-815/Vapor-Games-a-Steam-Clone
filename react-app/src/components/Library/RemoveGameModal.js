import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import { DeleteGameFromLibrary } from '../../store/library';


const RemoveGamesModal = ({ game }) => {
    const dispatch = useDispatch();
    const { closeModal } = useModal();

    // const user = useSelector(state => state.session.user)

    const handleSubmit = async () => {
        await dispatch(DeleteGameFromLibrary(game))
        closeModal()
    };

    return (
        <div className='delete-game-border'>
            <div className='delete-game-container'>
                <h1 className='delete-game-title'>Are you sure you want to delete {game.game_info.game_name}?</h1>
                <p className='delete-game-text'>Deleting this game will completely remove it from your library and require a purchase to add again.</p>
                <div className='delete-game-submit'>
                    <button className='delete-game-yes' onClick={handleSubmit}>Delete</button>
                    <button className='delete-game-no' onClick={closeModal}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default RemoveGamesModal;
