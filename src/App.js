import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import getCommits from "./store/actions/Commits";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  const commitStore = useSelector((state) => state.AppState.commitState);
  const [commitData, setCommitData] = useState(commitStore);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchCommits() {
      await dispatch(getCommits());
    }
    fetchCommits();
  }, []);
  useEffect(() => {
    setCommitData(commitStore);
  }, [commitStore]);

  const filterCommits = (hash) => {
    if (commitData && commitData.length > 0) {
      const filtered = commitData.filter((commit) => {
        if (commit.sha.toLowerCase().includes(hash.toLowerCase())) {
          return commit;
        }
      });
      setCommitData(filtered);
      if (hash === "") {
        setCommitData(commitStore);
      }
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
    </>
  );
}

export default App;
