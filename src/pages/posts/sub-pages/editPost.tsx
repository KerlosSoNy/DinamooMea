import { Link } from "react-router-dom";
import Header from "../../../components/header/header";
import InputAndLabel from "../../../components/input/inputAndLabel";
import { useCreatePost } from "../hook/useCreatePost";

export default function EditPost() {
    const { handleChange, data, errors, handleSubmit } = useCreatePost()
    return (
        <div className="p-6 w-full flex flex-col gap-4">
            <Header name="Add New Post" />
            <InputAndLabel error={errors?.title} label="Post Title" name="title" value={data?.title} onChange={handleChange} type="text" />
            <InputAndLabel error={errors?.body} label="Post Body" name="body" value={data?.body} onChange={handleChange} type="text" />
            <div className="flex flex-row justify-end gap-2">
                <Link to={'/posts'} className="bg-[#f52a2a] text-white py-2 px-4 rounded-[1.2rem] hover:scale-105 duration-500 transition-all">Cancel</Link>
                <button type="button" onClick={handleSubmit} className="bg-[#0E4E5D] text-white py-2 px-4 rounded-[1.2rem] hover:scale-105 duration-500 transition-all">Submit</button>
            </div>
        </div>
    )
}
