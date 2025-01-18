import { database,storage } from "@/libs/AppWriteClient"
import useGetLikesByPostId from "./useGetLikesByPostId"
import useDeleteLike from "./useDeleteLike"
import useGetCommentsByPostId from "./useGetCommentsByPostId"
import useDeleteComment from "./useDeleteComment"


const useDeletePostByld = async (postId: string, currentImage: string) => {
    try {
        const likes = await useGetLikesByPostId(postId)
        likes.forEach(async like =>{ await useDeleteLike(like?.id) })

        const commnets = await useGetCommentsByPostId(postId)
        commnets.forEach(async comments => { await useDeleteComment(comments?.id) })

        
        await database.deleteDocument(
            String(process.env.NEXT_PUBLIC_DATABASE_ID),
            String(process.env.NEXT_PUBLIC_COLLECTION_POST),
            postId
        )

        await storage.deleteFile(
            String(process.env.NEXT_PUBLIC_BUCKET_ID),
            currentImage
        )
    } catch (error) {
        throw error
    }

}

export default useDeletePostByld


