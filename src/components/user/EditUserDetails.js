import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { UserNav } from "../nav/NavBar"

export const EditUser= () => {
    
    const [users, update] = useState({
        uid:"",
        userName: "",
        beltRank: "",
        age: "",
        weightClass: "",
        img: "",
        gym: ""
    })

    const navigate = useNavigate()
    const localJjUser = localStorage.getItem("capstone_user")
    const jjUserObject = JSON.parse(localJjUser)
    const { uid } = useParams()

    useEffect(
        () => {
            const fetchData = async () => {
                const response = await fetch(`http://localhost:8088/users?uid=${uid}`)
                const userArray = await response.json()
                update(userArray[0])
            }
            fetchData()
        },
        [uid]
    )

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

         const formToSendToAPI = {
           uid: jjUserObject.uid,
           userName: users.userName,
           beltRank: users.beltRank,
           age: users.age,
           weightClass: users.weightClass,
           img: users.img,
           gym: users.gym
         }
    

        const putData = async () => {
            const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formToSendToAPI)
            }
            const response = await fetch (`http://localhost:8088/users/${users.id}`, options);
            await response.json();
            navigate("/mainPage")
        }
        putData()
    }   

    return (
        <>
         <UserNav />
        <form className="form">
            <h2 className="form__title">Edit User Information</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="date">User Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Change User Name Here"
                        value={users.userName}
                        onChange={
                           (event) => {
                              const copy = {...users}
                              copy.userName = event.target.value
                              update(copy)
                           }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Belt:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Update Belt Rank Here"
                        value={users.beltRank}
                        onChange={
                           (event) => {
                              const copy = {...users}
                              copy.beltRank = event.target.value
                              update(copy)
                           }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Age:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Update Your Age Here"
                        value={users.age}
                        onChange={
                           (event) => {
                              const copy = {...users}
                              copy.age = event.target.value
                              update(copy)
                           }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Weight Class:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Update Weight Class Here"
                        value={users.weightClass}
                        onChange={
                           (event) => {
                              const copy = {...users}
                              copy.weightClass = event.target.value
                              update(copy)
                           }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Profile Pic:</label>
                    <input
                        required autoFocus
                        type="img"
                        className="form-control"
                        placeholder="Upload New Photo Here"
                        value={users.img}
                        onChange={
                           (event) => {
                              const copy = {...users}
                              copy.img = event.target.value
                              update(copy)
                           }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Gym Affiliation:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Change Gym Here"
                        value={users.gym}
                        onChange={
                           (event) => {
                              const copy = {...users}
                              copy.gym = event.target.value
                              update(copy)
                           }
                        } />
                </div>
            </fieldset>
            <button 
            onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
            className="btn btn-primary">
               Save Edits
            </button>
        </form>
        </>
    )

}