import { createBrowserRouter } from "react-router-dom";
import Posts from "../../pages/posts/posts";
import App from "../../App";
import Home from "../../pages/home/home";
import AddPost from "../../pages/posts/sub-pages/addPost";
import EditPost from "../../pages/posts/sub-pages/editPost";


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/posts",
                element: <Posts />,
            },
            {
                path: "/posts/add",
                element: <AddPost />
            },
            {
                path: "/posts/edit/:id",
                element: <EditPost />
            }
        ]
    }
])