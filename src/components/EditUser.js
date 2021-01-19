import React, {useState, useContext, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { GlobalContext } from '../Context/GlobalState'

import {
Form, 
FormGroup,
Label,
Input,
Button
} from 'reactstrap'
import {v4 as uuid} from 'uuid'


export const EditUser = (props) => {
    const[selectedUser, setselectedUser]=useState({
        id: '',
        name: ''
    })
    const {users, editUser} = useContext(GlobalContext);
    const history= useHistory();
    const currentUserid=props.match.params.id;

    useEffect(()=> {
        const userId= currentUserid;
        const selectedUser= users.find(user => user.id === userId);
        setselectedUser(selectedUser);
    },[currentUserid,users])

    const onSubmit = () =>  {
        editUser(selectedUser); 
        history.push("/")
        }
    
    
    const onChange = (e) => {
        setselectedUser ({...selectedUser, [e.target.name]:e.target.value})
    }
    return (
        <Form onSubmit={onSubmit}>
        <FormGroup>
            <Label>Name</Label>
            <Input onChange={onChange} name="name" value={selectedUser.name} type="text" placeholder="Enter Name"></Input>
        </FormGroup>
        <Button type="submit">Edit name</Button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
        </Form>
    )
}
