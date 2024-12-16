import Header from "../../components/header/header";
import TableOfPages from "../../components/table/table";
import { useGetPosts } from "./hook/useGetPosts";

export default function Posts() {
    const { posts, handleDelete } = useGetPosts()
    return (
        <div className="p-6 w-full flex flex-col gap-4">
            <Header newTitle='Post' name="Posts" length={posts?.length} />
            <TableOfPages handleDelete={handleDelete} data={posts} columns={[{ title: 'Title', dataIndex: 'title', key: 'title' }, { title: 'Body', dataIndex: 'body', key: 'body' }]} />
        </div>
    )
}
