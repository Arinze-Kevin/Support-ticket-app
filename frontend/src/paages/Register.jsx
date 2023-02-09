import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { FaUser } from 'react-icons/fa'
import { useSelector, useDispatch  } from 'react-redux'
import { register, reset } from '../features/auth/authSlice'
import { mobile } from '../responsive'
import { FaSignInAlt } from 'react-icons/fa'

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
   border-radius: 20%;
   ${mobile({width: '70%' })}
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
    ${mobile({width: '70%' })}
`;

const H3 = styled.h3`
    display: none;
    ${mobile({display: 'block' })}
`;

const H5 = styled.h5`
    display: none;
    ${mobile({ display: 'block', marginTop: '-1em' })}
`;

const Button2 = styled.button`
    display: none;
    ${mobile({ marginLeft: '13em', display: 'block', width: '30%' })}
`;

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const {name, email, password, password2} = formData
    
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

        if (password !== password2) {
            toast.error('Passwords do not match')
        } else {
            const userData = {
                name, 
                email,
                password,
            }

            dispatch(register(userData))
        }
    }

    return (
        <Container>
            <Section1>
                <Title>
                    <FaUser /> Register
                </Title>
                <Desc>Please create an account</Desc>
            </Section1>
            <Section2>
                <Form onSubmit={onSubmit}>
                    <Div>
                        <Input
                          type='text'
                          id='name'
                          name='name'
                          value={name}
                          onChange={onChange}
                          placeholder='Enter your name'
                          required
                        />  
                    </Div>
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
                          type='password'
                          id='password'
                          name='password'
                          value={password}
                          onChange={onChange}
                          placeholder='Enter password'
                          required
                        />  
                    </Div>
                    <Div>
                        <Input
                          type='password'
                          id='password2'
                          name='password2'
                          value={password2}
                          onChange={onChange}
                          placeholder='Confirm password2'
                          required
                        />  
                    </Div>
                    <Div>
                        <Button>Submit</Button>
                    </Div>
                </Form>
                <H3>Already have an account??</H3>
                <H5>Click the button below to login</H5>
                <Button2> <Link style={{textDecoration: 'none', color: 'black'}} to='/login'>Login</Link></Button2>
            </Section2>
        </Container>
        
    )
}

export default Register
