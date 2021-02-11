import axios from "axios";

const gitCall = async () => {
  const response = await axios.get(
    `https://api.github.com/repos/${process.env.REACT_APP_USERNAME}/${process.env.REACT_APP_REPO}/commits`
  );
  return response;
};

export default gitCall;
