import useSWR, { SWRResponse } from "swr"
import { Programme } from "../types"

/** using a unique shareable key, retrieve a stored programme from the api */
export const useStoredProgramme = (
  shareableKey: string
): SWRResponse<Programme, Error> =>
  useSWR(`/.netlify/functions/stored-programme?id=${shareableKey}`)

export default useStoredProgramme
