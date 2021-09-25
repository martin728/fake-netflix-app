import { useHistory } from 'react-router-dom';

const LoginBtn = () => {
    const history = useHistory();

    return <div>
        <button className="form-btn" onClick={() => history.push('/signin')}>Log In</button>
    </div>
}
export default LoginBtn