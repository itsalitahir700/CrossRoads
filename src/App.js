import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import getCommits from "./store/actions/Commits";
import { useDispatch } from "react-redux";
import "./App.css";

function App() {
  const [commitData, setCommitData] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchCommits() {
      setCommitData(await dispatch(getCommits()));
    }
    fetchCommits();
  }, []);

  return (
    <div className="container p-4">
      {commitData &&
        commitData.map((commit, index) => <Card commit={commit} key={index} />)}
    </div>
  );
}

export default App;
