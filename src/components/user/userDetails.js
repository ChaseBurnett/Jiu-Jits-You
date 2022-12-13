import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import "./userDetails.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const UserDetails = () => {

    const [users, setUser] = useState([])
    const [filteredUser, setFiltered] = useState([])


    const localJjUser = localStorage.getItem("capstone_user")
    const jjUserObject = JSON.parse(localJjUser)
    const navigate = useNavigate()

    useEffect(
        () => {
            const fetchData = async () => {
                const response = await fetch(`http://localhost:8088/users`)
                const userArray = await response.json()
                setUser(userArray)
            }
            fetchData()
        },
        []
    )

    useEffect(
        () => {
            const userInfo = users.filter((user) => user.uid === jjUserObject.uid)
            setFiltered(userInfo)
        },
        [users]
    )

    return(
        <>
        <div>
           {
            filteredUser.map(
            (user) => {
                return <Card style={{ width: '18rem' }}>
                    <Card.Body>
                    <Card.Text>
                    <h3>{user.userName}</h3>
                    <h4>{user.beltRank}</h4>
                    <h4>{user.age}</h4>
                    <h4>{user.weightClass}</h4>
                    <h4>{user.gym}</h4>
                    </Card.Text>
                    <footer>
                        <Link to={`/userDetails/${user.uid}/edit`}>
                        <Button>Edit User Info</Button>
                        </Link>
                    </footer>
                    </Card.Body>
                </Card>
            }
            )
           }
        </div>
        </>
    )
}