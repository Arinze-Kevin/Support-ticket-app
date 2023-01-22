import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createTicket, reset } from '../features/tickets/ticketSlice';
import BackButton from '../components/BackButton';

const Container = styled.div`
   text-align: center;
   margin-top: -1em;
`;

const Section = styled.section`
   
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
   padding: 10px;
`;

const Input = styled.input`
   width: 30%;
   padding: 10px;
   margin-top: -2em;
`;

const Button = styled.button`
   width: 30%;
   padding: 10px;
   margin-top: -0.3em;
   background-color: black;
   color: white;
   cursor: pointer;
`;

const Textarea = styled.textarea`
   width: 30%;
   padding: 10px;
   margin-top: -0.7em;
`;

const Select = styled.select`
   width: 31%;
   padding: 10px;
   margin-top: -1em;
`;

const Form = styled.form`
   margin-top: 10px;
`;

const Label = styled.label`
   margin-right: 18em;
`;

const Hr = styled.hr`
   border-style: none;
`;

function NewTicket() {
    const {user} = useSelector((state) => state.auth)
    const { isLoading, isError, isSuccess, message } = useSelector((state) => state.tickets)
    const [name] = useState(user.name)
    const [email] = useState(user.email)
    const [product, setProduct] = useState('iPhone')
    const [description, setDescription] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        if (isSuccess) {
            dispatch(reset())
            navigate('/tickets') 
        }

        dispatch(reset())
    }, [dispatch, isError, isSuccess, navigate, message])

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(createTicket({product, description}))
    }

    return (
        <Container>
            <BackButton url='/' />
            <Section>
                <Title>Create New Ticket</Title>
                <Desc>Please fill out the form below</Desc>
            </Section>
            <Section>
                <Div>
                    <Label htmlFor='name'>Customer Name</Label> <Hr />
                    <Input type='text' value={name} disabled /> 
                </Div>
                <Div>
                    <Label htmlFor='email'>Customer Email</Label> <Hr />
                    <Input type='text' value={email} disabled /> 
                </Div>
                <Form onSubmit={onSubmit}>
                    <Label htmlFor='product' style={{marginLeft: '-3em'}}>Product</Label> <Hr />
                    <Select 
                       name="product" 
                       id="product" 
                       value={product} 
                       onChange={(e) => setProduct(e.target.value)}
                       >
                         <option value='iPhone'>iPhone</option>
                         <option value='Macbook'>Macbook</option>
                         <option value='iPad'>iPad</option>
                         <option value='iMac'>iMac</option>
                    </Select>
                    <Div style={{ marginTop: '0.7em' }}>
                    <Label htmlFor='description' style={{ marginLeft: '3.5em' }}>Description of the issue</Label> <Hr />
                    <Textarea name='description'
                       placeholder='Description'
                       value={description}  
                       onChange={(e) => setDescription(e.target.value)} >
                    </Textarea> 
                </Div>
                <Button>Submit</Button>
                </Form>
            </Section>
        </Container>
    )
}

export default NewTicket