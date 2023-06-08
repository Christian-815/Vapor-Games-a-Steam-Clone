import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import { useHistory } from 'react-router-dom';
import './cart.css'
import { CheckoutFromCart } from '../../store/carts';
import { AddToLibrary } from '../../store/library';


const PurchaseGamesModal = ({ total, games }) => {
    const dispatch = useDispatch();
    const { closeModal } = useModal();
    const history = useHistory()
    console.log(games)

    // const user = useSelector(state => state.session.user)

    const handleSubmit = async () => {
        await dispatch(CheckoutFromCart())
        await dispatch(AddToLibrary(games))
        closeModal()
        window.alert("Purchase Complete!")
        history.push('/')
    };

    return (
        <div className='delete-review-border'>
            <div className='delete-review-container'>
                <h1 className='delete-review-title'>Complete Purchase?</h1>
                <p className='delete-review-text'>Purchase Total: ${total}</p>
                <div className='delete-review-submit'>
                    <button className='delete-review-yes' onClick={handleSubmit}>PURCHASE</button>
                    <button className='delete-review-no' onClick={closeModal}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default PurchaseGamesModal;
