import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserNav } from "../nav/NavBar"
import { UserDetails } from "../user/userDetails";
import { useNavigate } from "react-router-dom";
import "./MainPage.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const MainPage = () => {

    const [posts, setPosts] = useState([])
    const [filteredPosts, setFiltered] = useState([])
    const navigate = useNavigate()


    const localJjUser = localStorage.getItem("capstone_user")
    const jjUserObject = JSON.parse(localJjUser)

    const getPosts = async () => {
        const response = await fetch(`http://localhost:8088/posts?_expand=sessionMoods`)
        const postArray = await response.json()
        setPosts(postArray)
    }

    useEffect(
        () => {
            const fetchData = async () => {
                getPosts();
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
        return <Button variant="primary" onClick={()=> {
            const deleteButtonAction = async () => {
               await fetch(`http://localhost:8088/posts/${id}`, {
                  method: "DELETE"
               })
               getPosts();
            }
            deleteButtonAction()
            navigate("/mainPage")
         }} className="post_delete">Delete</Button>
      }
    

    return (
        <>
        <main className="background">
        <UserNav />
        <div className="userDetails">
        <UserDetails />
        </div>
        <h2>Previously recorded classes</h2> 
        <div>
        <article>
        {
            filteredPosts.map(
                (post) => {
                    return (
                    <Card className="main-cards">
                    <Card.Body>
                    <header>
                    <Link to={`/sessionForm/${post.id}/edit`}>Post {post.id}</Link>
                    </header>
                    <Card.Text>
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
                    </Card.Text>
                    </Card.Body>
                    </Card>
                    )
                }
            )
        }    
        </article>  
        </div>
        </main>
        </>
    )




}