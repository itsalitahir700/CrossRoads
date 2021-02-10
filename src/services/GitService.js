import axios from "axios";

const gitCall = async () => {
  const response = await axios.get(
    `https://api.github.com/repos/octocat/hello-world/commits`
  );
  return response;
};

export default gitCall;
