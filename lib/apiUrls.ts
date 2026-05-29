import { CODEBLOOMS_API } from "./apiLists"
import { fetchApiResponse, POST_METHOD } from "./fetchApiResponse"

export const startProject = async (data: any) => {
  fetchApiResponse(
    POST_METHOD,
    CODEBLOOMS_API.START_PROJECT,
    false,
    data
  )
}
export const readyToOutperforms = async (data: any) => {
  fetchApiResponse(
    POST_METHOD,
    CODEBLOOMS_API.READY_TO_OUTPERFORMS,
    false,
    data
  )
}