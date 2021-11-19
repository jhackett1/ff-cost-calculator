import { Handler } from "@netlify/functions"
import faunadb, { query as q } from "faunadb"
import { savedResultSchema } from "../validators"

export const handler: Handler = async (event, context) => {
  try {
    const db = new faunadb.Client({
      secret: process.env.FAUNADB_SECRET as string,
      domain: "db.eu.fauna.com",
    })

    switch (event.httpMethod) {
      // find a result by key/id
      case "GET": {
        const { ref } = event.queryStringParameters as { ref?: string }

        if (!ref || !parseInt(ref))
          return {
            statusCode: 404,
            body: "You must supply a valid ref",
          }

        const result = await db.query(
          q.Get(q.Ref(q.Collection("results"), ref)),
          {}
        )

        return {
          statusCode: 200,
          body: JSON.stringify(result),
          headers: {
            "content-type": "application/json",
          },
        }
      }
      // save a new result
      case "POST": {
        const data = JSON.parse(event.body as string)

        await savedResultSchema.validate(data)

        const result = await db.query(
          q.Create(q.Collection("results"), { data })
        )

        return {
          statusCode: 201,
          body: JSON.stringify(result),
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
