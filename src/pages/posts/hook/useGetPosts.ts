import { toast } from "sonner";
import { axiosInstance } from "../../../util/axios/axios";
import { useEffect, useState } from "react";

export function useGetPosts(){
    const [posts, setPosts] = useState([])
    const promise = () => new Promise((resolve) => setTimeout(() => resolve({ name: 'Sonner' }), 2000));
    useEffect(() => {
        if(localStorage.getItem('posts')){
            const posts = JSON.parse(localStorage.getItem('posts') || '[]')
            setPosts(posts)
        }else{
            axiosInstance.get('KerlosSoNy/database/posts').then((res)=>{
                setPosts(res.data)
                localStorage.setItem('posts',JSON.stringify(res.data))
            }).catch((err)=>{
                console.log(err)
                toast.error('Something went wrong')
            })
        }
    }, [])

    const handleDelete = (postId: number) => {
        toast.promise(promise, {
            loading: 'Loading...',
            success: () => {
                const filteredPosts = posts.filter((post: any) => post.id !== postId)
                localStorage.setItem('posts', JSON.stringify(filteredPosts))
                setPosts(filteredPosts)
                return `Item have been deleted`;
            },
            error: 'Error',
        });
    }
    return{
        posts,
        handleDelete
    }
}