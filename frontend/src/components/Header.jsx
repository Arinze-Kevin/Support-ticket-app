import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

const Container = styled.header`
   margin: 20px;
   border-bottom: 1px solid black;
`;

const Div = styled.div`

`;

const Hr = styled.hr`
   width: 110%;
`;

const Ul = styled.ul`
   display: flex;
   justify-content: space-between;
   width: 11em;
   margin-left: 62em;
   margin-top: -1.1em;
`;

function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector((state) => state.auth)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

    return (
        <Container>
            <Div>
                <Link to='/'>Support Desk</Link> 
            </Div>
            <Ul>
                {user ? (<div>
                    <button onClick={onLogout}> <FaSignOutAlt /> Logout </button>
                </div>) : (<>
                <div>
                    <Link to='/login'>
                        <FaSignInAlt /> Login
                    </Link>
                </div>
                <div>
                    <Link to='/register'>
                        <FaUser /> Register
                    </Link>
                </div>
                </>)}
            </Ul>
        </Container>
    )
}

export default Header