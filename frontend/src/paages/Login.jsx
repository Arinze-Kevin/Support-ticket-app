import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { FaSignInAlt } from 'react-icons/fa'
import { useSelector, useDispatch  } from 'react-redux'
import { login, reset } from '../features/auth/authSlice'

const Container = styled.div`
    text-align: center;
`;

const Section1 = styled.section`
   margin-top: 5em;
   letter-spacing: 1.7px;
`;

const Section2 = styled.section`
    
`;

const Title = styled.h1`
   font-weight: 900;
   font-size: 2.3em;
`;

const Desc = styled.h3`
   color: #48494b;
   font-size: 1.6em;
`;

const Div = styled.div`

`;

const Form = styled.form`
   padding: 10px;
`;

const Input = styled.input`
   width: 30%;
   padding: 10px;
   border: 10px solid #c7c6c1;
   border-radius: 10%;
`;

const Button = styled.button`
    width: 33%;
    padding: 10px;
    letter-spacing: 8px;
    margin-top: 10px;
    background-color: #48494b;
    color: white;
    border-radius: 20%;
    cursor: pointer;
`;

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const {email, password} = formData

    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    )

    useEffect(() => {
        if(isError) {
            toast.error(message)
        }

        // Redirect when logged in
        if (isSuccess || user) {
            navigate('/')
        }

        dispatch(reset())
    }, [isError, isSuccess, user, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const userData = {
            email,
            password
        }

        dispatch(login(userData))

    }

    return (
        <Container>
            <Section1>
                <Title>
                    <FaSignInAlt /> Login
                </Title>
                <Desc>Please login to get support</Desc>
            </Section1>
            <Section2>
                <Form onSubmit={onSubmit}>
                    <Div>
                        <Input
                          type='text'
                          id='email'
                          name='email'
                          value={email}
                          onChange={onChange}
                          placeholder='Enter your email'
                          required
                        />  
                    </Div>
                    <Div>
                        <Input
                        //   type='text'
                          id='password'
                          name='password'
                          value={password}
                          onChange={onChange}
                          placeholder='Enter password'
                          type='password'
                          required
                        />  
                    </Div>
                    <Div>
                        <Button>Submit</Button>
                    </Div>
                </Form>
            </Section2>
        </Container>
        
    )
}

export default Login
