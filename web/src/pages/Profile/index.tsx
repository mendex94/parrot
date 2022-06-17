import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import ProfileCard from '../../components/ProfileCard'
import { getPostsById } from '../../services/getPosts'
import { Posts } from '../../types'
import { useSelector } from 'react-redux'
import { RootStore } from '../../store'
import FeedPost from '../../components/FeedPost/FeedPost'

export default function Profile() {
  const user = useSelector((store: RootStore)=> store.usersSlice)
  const [postList, setPosts] = useState<Posts[]>([] as Posts[])
  useEffect(() => {
      const pegarPosts = async () => {
      const posts = await getPostsById(user.id)
      setPosts(posts); 

    }
    pegarPosts();
  }, [])
  return (
    <>
        <Header />
        <ProfileCard />
        {postList.map((post)=> (
          <FeedPost post={post} key={post.user_id}/> 
        )).reverse()}
    </>
  )
}
