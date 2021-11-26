import { Handler } from "@netlify/functions"
import faunadb, { query as q, values as v } from "faunadb"
import { storedProgrammeSchema } from "../validators"
import { nanoid } from "nanoid"
import { Programme, StoredProgramme } from "../types"
import { FAUNADB_COLLECTION, FAUNADB_INDEX } from "../config"

export const handler: Handler = async (event, context) => {
  try {
    // if (event.headers["Referrer"]?.startsWith(process.env.URL as string))
    //   return {
    //     statusCode: 400,
    //     body: "Unauthorised",
    //   }

    const db = new faunadb.Client({
      secret: process.env.FAUNADB_SECRET as string,
      domain: "db.eu.fauna.com",
    })

    switch (event.httpMethod) {
      // find a result by key/id
      case "GET": {
        const { id } = event.queryStringParameters as { id?: string }

        if (!id)
          return {
            statusCode: 404,
            body: "You must supply a valid ID",
          }

        const result: v.Document<StoredProgramme> = await db.query(
          q.Get(q.Match(q.Index(FAUNADB_INDEX), id))
        )

        return {
          statusCode: 200,
          body: JSON.stringify(result.data),
          headers: {
            "content-type": "application/json",
          },
        }
      }
      // save a new result
      case "POST": {
        const data = JSON.parse(event.body as string) as Programme

        await storedProgrammeSchema.validate(data)

        const result: v.Document<StoredProgramme> = await db.query(
          q.Create(q.Collection(FAUNADB_COLLECTION), {
            data: {
              publicId: nanoid(10),
              createdAt: new Date().toString(),
              ...data,
            },
          })
        )

        return {
          statusCode: 201,
          body: JSON.stringify(result.data),
        }
      }
      default: {
        return {
          statusCode: 405,
          body: JSON.stringify({
            message: "Method not supported on this endpoint",
          }),
        }
      }
    }
  } catch (e) {
    console.error(e)
    return {
      statusCode: 500,
      body: JSON.stringify(e),
    }
  }
}
