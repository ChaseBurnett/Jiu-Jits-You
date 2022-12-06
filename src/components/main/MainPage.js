import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserNav } from "../nav/NavBar"
import { UserDetails } from "../user/userDetails";


export const MainPage = () => {

    const [posts, setPosts] = useState([])
    const [filteredPosts, setFiltered] = useState([])


    const localJjUser = localStorage.getItem("capstone_user")
    const jjUserObject = JSON.parse(localJjUser)


    useEffect(
        () => {
            const fetchData = async () => {
                const response = await fetch(`http://localhost:8088/posts`)
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
                    <p>{post.reallyGood ? "🤩" : ""}</p>
                    <p>{post.good ? "😃" : ""}</p>
                    <p>{post.okay ? "🥹" : ""}</p>
                    <p>{post.terrible ? "🤬" : "" }</p>
                    <p>{post.improvementBox}</p>
                    </section>
                }
            )
        }    
        </article>  
        </>
    )




}