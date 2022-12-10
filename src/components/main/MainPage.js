import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserNav } from "../nav/NavBar"
import { UserDetails } from "../user/userDetails";
import { useNavigate } from "react-router-dom";
import "./MainPage.css"


export const MainPage = () => {

    const [posts, setPosts] = useState([])
    const [filteredPosts, setFiltered] = useState([])
    const navigate = useNavigate()


    const localJjUser = localStorage.getItem("capstone_user")
    const jjUserObject = JSON.parse(localJjUser)


    useEffect(
        () => {
            const fetchData = async () => {
                const response = await fetch(`http://localhost:8088/posts?_expand=sessionMoods`)
                const postArray = await response.json()
                setPosts(postArray)
            }
            fetchData()
        },
        []
    )

    useEffect(
        () => {
            if (jjUserObject) {
                const myPosts = posts.filter(post => post.uid === jjUserObject.uid)
                setFiltered(myPosts)
            }
            else {
                    return (
                        <h3>No Post yet</h3>
                    )
            }
        },
        [posts]
    )

    const deleteButton = (id) => {
        return <button onClick={()=> {
            const deleteButtonAction = async () => {
               await fetch(`http://localhost:8088/posts/${id}`, {
                  method: "DELETE"
               })
            }
            deleteButtonAction()
            navigate("/mainPage")
         }} className="post_delete">Delete</button>
      }
    

    return (
        <>
        <UserNav />
        <UserDetails />
        <h2>Previously recorded classes</h2> 

        <article>
        {
            filteredPosts.map(
                (post) => {
                    return <section className="post">
                    <header>
                    <Link to={`/sessionForm/${post.id}/edit`}>Post {post.id}</Link>
                    </header>
                    <p>{post.date}</p>
                    <p>{post.classLocation}</p>
                    <p>{post.classDescription}</p>
                    <iframe src={post.skillUrl}></iframe>
                    <p>{post.sessionMoods.id===1 ? "🤩" : ""}</p>
                    <p>{post.sessionMoods.id===2 ? "😃" : ""}</p>
                    <p>{post.sessionMoods.id===3 ? "🥹" : ""}</p>
                    <p>{post.sessionMoods.id===4 ? "🤬" : "" }</p>
                    <p>{post.improvementBox}</p>
                    <footer>
                    {deleteButton(post.id)}
                    </footer>
                    </section>
                }
            )
        }    
        </article>  
        </>
    )




}