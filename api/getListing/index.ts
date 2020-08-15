import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { CosmosClient } from "@azure/cosmos";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.log("Get a request to get a listing.");
  context.log(req.body);
  if (!!req.body.n) {
    const client = new CosmosClient(process.env.CONNECTION_STRING);

    const database = client.database("user");
    const collection = database.container("listing");
    const iter = collection.items.readAll().getAsyncIterator();

    var i = 0;
    var items = [];
    for await (const iterator of iter) {
      i = i + 1;
      items.push(iterator.resources);

      if (i >= parseInt(req.body.n)) {
        break;
      }
    }

    context.res = {
      status: 200,
      body: JSON.stringify(items),
    };
  }
  else if (!!req.body.id) {
    try {
      const client = new CosmosClient(process.env.CONNECTION_STRING);

      const database = client.database("user");
      const collection = database.container("listing");

      const query = 'SELECT * FROM c WHERE c.id="' + req.body.id + '"';
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
