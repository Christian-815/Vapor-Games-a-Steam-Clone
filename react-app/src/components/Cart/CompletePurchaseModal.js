import { useDispatch, useSelector } from 'react-redux';
import { useModal } from '../../context/Modal';
import { useHistory } from 'react-router-dom';
import './cart.css'
import { CheckoutFromCart } from '../../store/carts';


const PurchaseGamesModal = ({ total }) => {
    const dispatch = useDispatch();
    const { closeModal } = useModal();
    const history = useHistory()

    const user = useSelector(state => state.session.user)

    const handleSubmit = async () => {
        await dispatch(CheckoutFromCart())
        closeModal()
        window.alert("Purchase Complete!")
        history.push('/')
    };

    return (
        <div className='delete-review-container'>
            <h1 className='delete-review-title'>Complete Purchase?</h1>
            <p className='delete-review-text'>Purchase Total: ${total}</p>
            <div className='delete-review-submit'>
                <button className='delete-review-yes' onClick={handleSubmit}>PURCHASE</button>
                <button className='delete-review-no' onClick={closeModal}>Cancel</button>
            </div>
        </div>
    )
}

export default PurchaseGamesModal;
