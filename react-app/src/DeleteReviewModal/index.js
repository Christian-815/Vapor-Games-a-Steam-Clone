import { useDispatch } from 'react-redux';
import { useModal } from '../context/Modal';
import './DeleteReview.css'
import { deleteReview, getUserReviews } from '../store/reviews';
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
        <div className='delete-review-container'>
            <h1 className='delete-review-title'>Delete Review?</h1>
            <p className='delete-review-text'>Are you sure you want to remove this Review? This cannot be undone.</p>
            <div className='delete-review-submit'>
                <button id='yes-delete' onClick={handleSubmit}>OK</button>
                <button id='no-keep' onClick={closeModal}>Cancel</button>
            </div>
        </div>
    )
}

export default DeleteReview;
