import PostPage from "@/components/PostPage";
import {FC} from "react";


interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const fetchData = async (id : string): Promise<PostProps> => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return await res.json();
  };

interface Props {
    params: { id: string };
}

const Post : FC<Props> = async ({params}) => {
    const post = await fetchData(params.id);
  return <PostPage post={post}/>
}

export default Post