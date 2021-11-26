import useSWR, { SWRResponse } from "swr"
import { StoredProgramme } from "../types"

/** using a unique shareable key, retrieve a stored programme from the api */
export const useStoredProgramme = (
  publicId: string
): SWRResponse<StoredProgramme, Error> =>
  useSWR(`/.netlify/functions/stored-programme?id=${publicId}`)

export default useStoredProgramme
