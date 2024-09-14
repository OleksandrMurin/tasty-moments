import PostPage from "@/components/PostPage";


interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function fetchData(id : string): Promise<PostProps> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const result = await res.json();
    return result;
  }

const Post = async ({params} : {params :{id: string}}) => {
    const post = await fetchData(params.id);
  return (
    <PostPage post={post}/>
  )
}

export default Post