import { useHistory } from 'react-router-dom';

const MyAccountBtn = () => {
    const history = useHistory();

    return <div>
        <button className="form-btn account-btn" onClick={() => history.push('/myaccount')}>My Account</button>
    </div>
}

export default MyAccountBtn