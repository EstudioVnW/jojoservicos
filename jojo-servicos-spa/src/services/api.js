import axios from 'axios';

const sendUserSays = (text, sessionId) => {

  let url = `https://api.dialogflow.com/v1/query?v=20170712&query=${text}&lang=pt-br&sessionId=${sessionId}&timezone=America/Bahia`;
  let header = { 
    headers: { 
      Authorization: 'Bearer 71b0446678d54bbd9ae612e59e4fc023' 
    } 
  };
  return axios.get(url, header);
};

const sendEvent = (text, sessionId) => {

  let url = `https://api.dialogflow.com/v1/query?v=20170712&e=${text}&lang=pt-br&sessionId=${sessionId}&timezone=America/Bahia`;
  let header = { 
    headers: { 
      Authorization: 'Bearer 71b0446678d54bbd9ae612e59e4fc023' 
    } 
  };
  return axios.get(url, header);
};

export default {
  sendUserSays,
  sendEvent
};
