import { database, Query } from "@/libs/AppWriteClient"
import useGetProfileByUserId from "./useGetProfileByUserId"

const useGetCommentsByPostId = async (postId: string) => {

    try {
        const commentResult = await database.listDocuments(
            String(process.env.NEXT_PUBLIC_DATDBDSE_ID),
            String(process.env.NEXT_PUBLIC_COLLECTION_ID_COMMENT),
            [
                Query.equal('post_id', postId),
                Query.orderDesc('$id')
            ]
        )

        const objPromises = commentResult.documents.map(async comment =>{
            const profile = await useGetProfileByUserId(comment.user_id)

            return{
                id: comment?.id,
                user_id: comment?.user_id,
                post_id: comment?.post_id,
                text: comment?.text,
                created_at: comment?.created_at,
                profile: {
                    user_id: profile?.user_id,
                    name: profile?.name,
                    image: profile?.image,
                }
            }
        })

        const result = await Promise.all(objPromises)
        return result

        } catch (error) {
            throw error
    }

}

export default useGetCommentsByPostId