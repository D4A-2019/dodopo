import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { CosmosClient } from "@azure/cosmos";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.log("Got a Request to get a user");

  if (!!req.body.id) {
    try {
      const client = new CosmosClient(process.env.CONNECTION_STRING);

      const database = client.database("user");
      const collection = database.container("users");

      const query = 'SELECT * FROM u WHERE u.id="' + req.body.id + '"';
      var result = await collection.items.query(query).fetchNext();

      context.res = {
        status: result.resources[0] == undefined ? 500 : 200,
        body: result.resources[0],
      };
    } catch (err) {
      context.log("Got an error : " + err.message);
      context.res = {
        status: 500,
        body: err.message,
      };
    }
  } else {
    context.res = {
      status: 400,
      body: "Unknown Request.",
    };
  }
};

export default httpTrigger;
