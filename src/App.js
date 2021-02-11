import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import getCommits from "./store/actions/Commits";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "./components/SearchBar";
import Loader from "./components/Loader";
import "./App.css";

function App() {
  const commitStore = useSelector((state) => state.AppState.commitState);
  const [commitData, setCommitData] = useState(commitStore);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(async () => {
    setLoading(true);
    await fetchCommits();
    setLoading(false);
  }, []);

  useEffect(() => {
    setCommitData(commitStore);
  }, [commitStore]);

  const fetchCommits = async () => {
    await dispatch(getCommits());
  };

  const filterCommits = (hash) => {
    const filtered = commitData.filter((commit) => {
      if (commit.sha.toLowerCase().includes(hash.toLowerCase())) {
        return commit;
      }
    });
    setCommitData(filtered);
    if (hash === "") {
      setCommitData(commitStore);
    }
  };
  return (
    <>
      <SearchBar search={filterCommits} />
      <div className="container p-4">
        {commitData &&
          commitData.map((commit, index) => (
            <Card commit={commit} key={index} />
          ))}
      </div>
      {loading ? <Loader /> : ""}
    </>
  );
}

export default App;
