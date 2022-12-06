import { useState, useEffect } from "react"

export const UserDetails = () => {

    const [users, setUser] = useState([])
    const [filteredUser, setFiltered] = useState([])


    const localJjUser = localStorage.getItem("capstone_user")
    const jjUserObject = JSON.parse(localJjUser)

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
                return <section className="user_info">
                    <h4>{user.userName}</h4>
                    <h4>{user.beltRank}</h4>
                    <h4>{user.age}</h4>
                    <h4>{user.weightClass}</h4>
                    <h4>{user.gym}</h4>
                </section>
            }
            )
           }
        </div>
        </>
    )
}