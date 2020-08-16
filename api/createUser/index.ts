import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { CosmosClient } from "@azure/cosmos";

function is_request_valid(req: HttpRequest) {
  return !!req.body.id && !!req.body.name && !!req.body.email;
}

function create_user_item(req: HttpRequest) {
  return {
    id: req.body.id,
    email: req.body.email,
    name: req.body.name,
    location: {
      address: "",
      city: "",
      state: "",
      postcode: "",
      country: "",
    },
    listing: [],
    purchase: [],
  };
}

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.log("Got a Request to get a user");

  if (is_request_valid(req)) {
    try {
      const client = new CosmosClient(process.env.CONNECTION_STRING);

      const database = client.database("user");
      const collection = database.container("users");

      const user_item = create_user_item(req);
      let { resource } = await collection.items.create(user_item);

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
      body: "Unknown Request.",
    };
  }
};

export default httpTrigger;
