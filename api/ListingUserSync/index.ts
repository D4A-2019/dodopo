import { AzureFunction, Context } from "@azure/functions";
import { CosmosClient } from "@azure/cosmos";

async function get_user_doc(usrId: any) {
  const axios = require("axios");

  return axios({
    method: "post",
    url:
      "https://dodopo.azurewebsites.net/api/getUser?code=rnht5jaPujeB%2F4I7HVaUco76sm1S3GyV1gZ4AkU83fnDGUpBSgSyeA%3D%3D",
    data: { id: usrId },
  }).then((res) => JSON.parse(JSON.stringify(res.data)));
}

const cosmosDBTrigger: AzureFunction = async function (
  context: Context,
  documents: any[]
): Promise<void> {
  context.log("New Update on listing");
  const client = new CosmosClient(process.env.CONNECTION_STRING);

  const database = client.database("user");
  const collection = database.container("users");

  if (!!documents && documents.length > 0) {
    for (let i = 0; i < documents.length; i++) {
      const element = documents[i];
      context.log("Seller ID : ", element.sellerId);

      var usrDoc = await get_user_doc(String(element.sellerId));

      context.log("Usr Doc : ", usrDoc);

      usrDoc.listing.push(String(element.id));
      context.log("Got user doc : ", usrDoc);

      let { resource } = await collection
        .item(String(usrDoc.id))
        .replace(usrDoc);
      context.log("Done with : ", resource);
    }
  }
};

export default cosmosDBTrigger;
