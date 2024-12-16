import { useEffect, useState } from "react"
import { postSchema } from "../validation/postSchema"
import { useNavigate, useParams } from "react-router-dom"
import { axiosInstance } from "../../../util/axios/axios"
import { toast } from "sonner"

export function useCreatePost() {
    const {id}=useParams()
    const navigate = useNavigate()
    const [data,setData]=useState<{body:string,title:string}>({
        body: '',
        title: ''
    })
    const [errors,setErrors]=useState<{
        body?:string,
        title?:string
    }>({})
    useEffect(()=>{
        if(id){
            const posts = JSON.parse(localStorage.getItem('posts') || '[]')
            const post = posts.find((post: any) => post.id === Number(id))
            setData(post)
        }
    },[id])
    const handleSubmit = async ()=>{
        try{
            await postSchema.validate(data,{abortEarly:false})
            if(id){
                axiosInstance.put(`KerlosSoNy/database/posts/${id}`,data).then((res)=>{
                    console.log(res)
                    const posts = JSON.parse(localStorage.getItem('posts') || '[]')
                    const index = posts.findIndex((post: any) => post.id === Number(id))
                    posts[index] = res?.data
                    localStorage.setItem('posts',JSON.stringify(posts))
                    toast.success('Post updated successfully')
                    navigate(-1)
                }).catch(()=>{
                    toast.error('Something went wrong')
                })
            }else{
                axiosInstance.post(`KerlosSoNy/database/posts`,data).then((res)=>{
                    console.log(res)
                    const posts = JSON.parse(localStorage.getItem('posts') || '[]')
                    posts.push(res?.data)
                    localStorage.setItem('posts',JSON.stringify(posts))
                    toast.success('Post created successfully')
                    navigate(-1)
                }).catch(()=>{
                    toast.error('Something went wrong')
                })
            }
        }catch (err: any) {
                const validationErrors: any = {};
                err.inner.forEach((error: any) => {
                    validationErrors[error.path] = error.message;
                });
                setErrors(validationErrors);
                toast.error('Please fill in all the required fields.');
        }
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    return {
        handleChange,
        data,
        handleSubmit,
        errors
    }
}