import qs from "qs";
import config from "../config";

const CLIENT_ID = config.cliendId;
const ROOT_URL = "https://api.imgur.com";

export default {
  login: function() {
    const querystring = {
      client_id: CLIENT_ID,
      response_type: "token"
    };

    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`;
  }
};