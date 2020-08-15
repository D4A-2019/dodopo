import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { CosmosClient } from "@azure/cosmos";

function is_request_valid(req: HttpRequest) {
  return (
    !!req.body.sellerId &&
    !!req.body.name &&
    !!req.body.closeDate &&
    !!req.body.quota &&
    !!req.body.price
  );
}

function create_listing_item(req: HttpRequest) {
  let randomID = Math.random().toString(36).substr(7);

  return {
    id: req.body.sellerId + randomID,
    sellerId: req.body.sellerId,
    quota: req.body.quota,
    price: req.body.price,
    closeDate: req.body.closeDate,
    name: req.body.name,
    buyers: [],
    updates: [],
  };
}

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.log("Get a request to add a listing.");

  if (is_request_valid(req)) {
    try {
      const client = new CosmosClient(process.env.CONNECTION_STRING);

      const database = client.database("user");
      const collection = database.container("listing");

      const listing_item = create_listing_item(req);
      let { resource } = await collection.items.create(listing_item);

      context.res = {
        status: 200,
        body: resource,
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
      body: "Unknown Query.",
    };
  }
};

export default httpTrigger;
