import {useState} from 'react';
import {useGetPostsQuery,useAddPostMutation,useDeletePostMutation} from '../redux/services/postApi';

const Postlist=()=>{
    const {data:posts,error,isLoading}=useGetPostsQuery();
    const[addPost,{isLoading:isAddingpost}]=useAddPostMutation();
    const [deletePost,{isLoading:isDeletingPost}]=useDeletePostMutation();

    const [newPostTitle,setNewPostTitle]=useState('');

    const handleAddpost = async()=>{
        if(newPostTitle){
            await addPost({title:newPostTitle,id:4});
            setNewPostTitle('')
        }
    };

    const handledeletepost = async (id)=>{
        await deletePost(id);
    };
    if(isLoading) {
        return <div> is loading %%%</div>
    }
    if(error)return <div> error is {error.message} </div>
    return (
        <>
        <div> post list  </div>
        <ul>
            {
                posts.map(post=>(
                    <li key={post.id}>
                    {post.title} {"   "}
                    <button 
                    onClick={()=>{handledeletepost(post.id)}}
                    disabled={isDeletingPost}>
                    delete</button>
                    </li>
                ))
            }
        </ul>


        <div>
            <input type='text' value={newPostTitle} onChange={(e)=>setNewPostTitle(e.target.value)}/>
            <button onClick={handleAddpost} disabled={isAddingpost}>add post </button>
        </div>
        </>
    )


}
export default Postlist;