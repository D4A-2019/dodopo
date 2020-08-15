function get_user_doc(usrId: any) {
  const axios = require("axios");

  return axios
    .post("http://localhost:7071/api/getUser", {
      id: usrId,
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
    });
}

get_user_doc("666").then((data) => {
  console.log("Usr Doc : ", data);
});
