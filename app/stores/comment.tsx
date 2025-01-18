import { create } from 'zustand' ;
import {persist, devtools, createJSONStorage } from 'zustand/middleware'
import { CommentsWithProfile } from '../types';
import useGetCommentsByPostId from '../hooks/useGetCommentsByPostId';


interface CommentStore {
    commentsByPost: CommentsWithProfile[]
    setCommentsByPost: (postId: string) => void;
}

export const useCommentStore =create<CommentStore>()(
    devtools(
        persist(
            (set) =>({
                commentsByPost: [],

                setCommentsByPost: async (postId: string) => {
                    const result = await useGetCommentsByPostId(postId)
                    set ({ commentsByPost: result });
                }
            }),
            {
                name:'store',
                storage: createJSONStorage(()=> localStorage)
            }
        )
    )
)

function setPostsByUser(userId?: string) {
    throw new Error('Function not implemented.');
}
function setPostsById(postId: string) {
    throw new Error('Function not implemented.');
}

