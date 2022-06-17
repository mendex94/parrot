import { useEffect, useState } from "react"
import FeedPost from "../../components/FeedPost/FeedPost"
import Header from "../../components/Header"
import PostForm from "../../components/PostForm"
import { getPosts } from "../../services/getPosts"
import { Posts } from "../../types"

export default function Feed() {
  const [postList, setPosts] = useState<Posts[]>([] as Posts[])
  useEffect(() => {
      const pegarPosts = async () => {
      const posts = await getPosts()
      setPosts(posts); 

    }
    pegarPosts();
  }, [])
  return (
    <>
        <Header />
        <PostForm setPosts={setPosts}/>
        {postList.map((post)=> (
          <FeedPost post={post}/> 
        )).reverse()}
    </>
  )
}
