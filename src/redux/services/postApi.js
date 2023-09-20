import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const postApi = createApi({
    reducerPath :'postApi',
    baseQuery:fetchBaseQuery({baseUrl :"http://localhost:3032"}),
    endpoints:(builder)=>({
        ////////////////////////////////////////////////////
        getPosts:builder.query({
            query:()=>'posts',
            providesTags:['posts']
        }),
        ////////////////////////////////////////////////////
        addPost:builder.mutation({
            query:(newPost)=>({
                url:'posts',
                method:"POST",
                body:newPost

            }),
            invalidateTags:['posts']
        }),
        ////////////////////////////////////////////////////
        deletePost:builder.mutation({
            query:(postId)=>({
                url:`posts/${postId}`,
                method:"DELETE",
            }),
            invalidateTags:['posts']
        })
        ////////////////////////////////////////////////
    })
})
export const {useGetPostsQuery,useAddPostMutation,useDeletePostMutation} = postApi;
