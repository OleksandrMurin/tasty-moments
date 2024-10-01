import {Link} from '@/i18n/routing';
import React from 'react'

interface PostType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const PostPage = ({post} : {post : PostType}) => {
  return (
    <div>
        <div className="post">
        <Link href={'/'}>Back</Link>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <h4> AuthorID: {post.userId}</h4>
    </div>
    </div>
  )
}

export default PostPage