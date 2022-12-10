import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { UserNav } from "../nav/NavBar"

export const NewSessionForm = () => {

    const [form, update] = useState({
        date: "",
        classLocation: "",
        classDescription: "",
        skillUrl:"",
        sessionMoodsId: 0,
        improvementBox: ""
    })

    const navigate = useNavigate()
    const localJjUser = localStorage.getItem("capstone_user")
    const jjUserObject = JSON.parse(localJjUser)

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

         const formToSendToAPI = {
           uid: jjUserObject.uid,
           date:form.date,
           classLocation: form.classLocation,
           classDescription: form.classDescription,
           skillUrl: form.skillUrl,
           sessionMoodsId: form.sessionMoodsId,
           improvementBox: form.improvementBox
         }
    

    const sendData = async () => {
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formToSendToAPI)
        }
        const response = await fetch (`http://localhost:8088/posts`, options);
        await response.json();
        navigate("/mainPage")
    }
      sendData()
    }   

      return (
        <>
        <UserNav />
        <form className="form">
            <h2 className="form__title">Log New Training Session</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Date:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Date of Training session"
                        value={form.date}
                        onChange={
                           (event) => {
                              const copy = {...form}
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
                        value={form.classLocation}
                        onChange={
                           (event) => {
                              const copy = {...form}
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
                        value={form.classDescription}
                        onChange={
                           (event) => {
                              const copy = {...form}
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
                        value={form.skillUrl}
                        onChange={
                           (event) => {
                              const copy = {...form}
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
                        value="1"
                        checked={form.sessionMoodsId===1}
                        onChange={
                           (event) => {
                              const copy = {...form}
                              copy.sessionMoodsId = +event.target.value
                              update(copy)
                           }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="good">Good:</label>
                    <input type="radio"
                        value="2"
                        checked={form.sessionMoodsId===2}
                        onChange={
                           (event) => {
                              const copy = {...form}
                              copy.sessionMoodsId = +event.target.value
                              update(copy)
                           }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="okay">Okay:</label>
                    <input type="radio"
                        value="3"
                        checked={form.sessionMoodsId===3}
                        onChange={
                           (event) => {
                              const copy = {...form}
                              copy.sessionMoodsId = +event.target.value
                              update(copy)
                           }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="terrible">Terrible:</label>
                    <input type="radio"
                        value="4"
                        checked={form.sessionMoodsId===4}
                        onChange={
                           (event) => {
                              const copy = {...form}
                              copy.sessionMoodsId = +event.target.value
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
                        value={form.improvementBox}
                        onChange={
                           (event) => {
                              const copy = {...form}
                              copy.improvementBox = event.target.value
                              update(copy)
                           }
                        } />
                </div>
            </fieldset>
            <button 
            onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
            className="btn btn-primary">
                Post
            </button>
        </form>
        </>
    )
}
   