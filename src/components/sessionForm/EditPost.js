import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { UserNav } from "../nav/NavBar"

export const EditPost = () => {

    const [posts, update] = useState({
        date: "",
        classLocation: "",
        classDescription: "",
        skillUrl:"",
        reallyGood: false,
        good: false,
        okay: false,
        terrible: false,
        improvementBox: ""
    })
    
    const navigate = useNavigate()
    const localJjUser = localStorage.getItem("capstone_user")
    const jjUserObject = JSON.parse(localJjUser)
    const { postsId } = useParams()

    useEffect(
        () => {
            const fetchData = async () => {
                const response = await fetch(`http://localhost:8088/posts/${postsId}`)
                const postsArray = await response.json()
                update(postsArray)
            }
            fetchData()
        },
        [postsId]
    )


    const handleSaveButtonClick = (event) => {
        event.preventDefault()

         const formToSendToAPI = {
           uid: jjUserObject.uid,
           date:posts.date,
           classLocation: posts.classLocation,
           classDescription: posts.classDescription,
           skillUrl: posts.skillUrl,
           reallyGood: posts.reallyGood,
           good: posts.good,
           okay: posts.okay,
           terrible: posts.terrible,
           improvementBox: posts.improvementBox
         }
    

    const putData = async () => {
        const options = {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formToSendToAPI)
        }
        const response = await fetch (`http://localhost:8088/posts/${posts.id}`, options);
        await response.json();
        navigate("/mainpage")
    }
      putData()
    }   

    return (
        <>
        <UserNav />
        <form className="form">
            <h2 className="form__title">Edit Training Session</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Date:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Date of Training session"
                        value={posts.date}
                        onChange={
                           (event) => {
                              const copy = {...posts}
                              copy.date = event.target.value
                              update(copy)
                           }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="classLocation">Class Location:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Name of Gym"
                        value={posts.classLocation}
                        onChange={
                           (event) => {
                              const copy = {...posts}
                              copy.classLocation = event.target.value
                              update(copy)
                           }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="classDescription">Class Description:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="How was class?"
                        value={posts.classDescription}
                        onChange={
                           (event) => {
                              const copy = {...posts}
                              copy.classDescription = event.target.value
                              update(copy)
                           }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="skillUrl">Video Link:</label>
                    <input
                        required autoFocus
                        type="url"
                        className="form-control"
                        placeholder="upload URL"
                        value={posts.skillUrl}
                        onChange={
                           (event) => {
                              const copy = {...posts}
                              copy.skillUrl = event.target.value
                              update(copy)
                           }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="ReallyGood">ReallyGood:</label>
                    <input type="radio"
                        value={posts.reallyGood}
                        onChange={
                           (event) => {
                              const copy = {...posts}
                              copy.reallyGood = event.target.checked
                              update(copy)
                           }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="good">Good:</label>
                    <input type="radio"
                        value={posts.good}
                        onChange={
                           (event) => {
                              const copy = {...posts}
                              copy.good = event.target.checked
                              update(copy)
                           }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="okay">Okay:</label>
                    <input type="radio"
                        value={posts.okay}
                        onChange={
                           (event) => {
                              const copy = {...posts}
                              copy.okay = event.target.checked
                              update(copy)
                           }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="terrible">Terrible:</label>
                    <input type="radio"
                        value={posts.terrible}
                        onChange={
                           (event) => {
                              const copy = {...posts}
                              copy.terrible = event.target.checked
                              update(copy)
                           }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="classDescription">Areas to Improve On:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="What do you need to work on?"
                        value={posts.improvementBox}
                        onChange={
                           (event) => {
                              const copy = {...posts}
                              copy.improvementBox = event.target.value
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