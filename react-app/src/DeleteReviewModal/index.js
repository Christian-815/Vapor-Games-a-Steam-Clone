import { useDispatch } from 'react-redux';
import { useModal } from '../context/Modal';
import './DeleteReview.css'
import { deleteReview } from '../store/reviews';
import { useHistory } from 'react-router-dom';


const DeleteReview = ({ reviewId, gameId }) => {
    const dispatch = useDispatch();
    const { closeModal } = useModal();
    const history = useHistory()

    const handleSubmit = async () => {
        await dispatch(deleteReview(reviewId, gameId))
        closeModal()
        history.push('/reviews/user')
    };

    return (
        <div className='delete-review-border'>
            <div className='delete-review-container'>
                <div className='delete-review-title'>Delete Review?</div>
                <p className='delete-review-text'>Are you sure you want to delete this Review? This cannot be undone.</p>
                <div className='delete-review-submit'>
                    <button className='delete-review-yes' onClick={handleSubmit}>OK</button>
                    <button className='delete-review-no' onClick={closeModal}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteReview;
