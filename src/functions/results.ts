import { Handler } from "@netlify/functions"
import faunadb, { query as q } from "faunadb"
import { savedResultSchema } from "../validators"

const handler: Handler = async (event, context) => {
  try {
    const db = new faunadb.Client({
      secret: process.env.FAUNADB_SECRET as string,
    })

    switch (event.httpMethod) {
      case "GET": {
        const query = event.queryStringParameters

        const result = await db.query(
          q.Get(q.Ref(q.Collection("results"), query?.ref))
        )

        return {
          statusCode: 200,
          body: JSON.stringify(result),
        }
      }
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
    return {
      statusCode: 500,
      body: JSON.stringify(e),
    }
  }
}

export { handler }
