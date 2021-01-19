import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {
    ListGroupItem,
    ListGroup,
    Button
} from 'reactstrap'
import { GlobalContext } from '../Context/GlobalState'

export const UserList = () => {
    const {users, removeUser} = useContext(GlobalContext);
    console.log(users);
    return (
       <ListGroup className="mt-4">
           {users.map(user => (
           <ListGroupItem className="d-flex">
               <strong>{user.name}</strong>
            <div className="ml-auto">
                <Link className="btn btn-warning mr-1" to={`/edit/${user.id}`}> Edit</Link>
                <Button onClick={() => removeUser(user.id)} color="danger">Delete</Button>
            </div>
            </ListGroupItem>
           ))}
       </ListGroup>
    )
}
