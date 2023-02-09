import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import { mobile } from '../responsive'

const Container = styled.header`
   margin: 20px;
   border-bottom: 1px solid black;
`;

const Div = styled.div`

`;

const Button = styled.button`
   margin-top: -1em;
   padding: 10px; 
   width: 170%;
   background-color: black;
   color: white;
   ${mobile({ marginLeft:'-1em', width: '7em', height: '6vh'})}

`;

const Hr = styled.hr`
   width: 110%;
`;

const Div3 = styled.div`
${mobile({ marginRight:'4em', backgroundColor: 'black', padding: '5px'})}
`;

const Div2 = styled.div`
${mobile({ display:'none'})}
`;

const Ul = styled.ul`
   display: flex;
   justify-content: space-between;
   width: 11em;
   margin-left: 62em;
   margin-top: -1.1em;
   ${mobile({ marginLeft: '13em', paddig: '20px', marginTop: '-1.5em'})}
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
                <Link style={{textDecoration: 'none', color: 'black', fontWeight: 900, fontSize: '1.5em'}} to='/'>Support Desk</Link> 
            </Div>
            <Ul>
                {user ? (<div>
                    <Button onClick={onLogout}> <FaSignOutAlt /> Logout </Button>
                </div>) : (<>
                <Div2>
                    <Link style={{textDecoration: 'none'}} to='/login'>
                        <FaSignInAlt /> Login
                    </Link>
                </Div2>
                <Div3>
                    <Link style={{textDecoration: 'none'}} to='/register'>
                        <FaUser /> Register
                    </Link>
                </Div3>
                </>)}
            </Ul>
        </Container>
    )
}

export default Header