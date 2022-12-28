import React, { useEffect, useState } from "react";
import ExpCard from "../Components/Card/ExpCard";
import HomeCard from "../Components/Card/HomeCard";
import Spinner from "../Components/Spinner/Spinner";

const Home = () => {
  const { loading, setLoading } = useState(false);
  const [allExp, setAllExp] = useState([]);
  useEffect(() => {
    fetch("expdata.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllExp(data);
      });
  }, []);
  return (
    <>
      <div className="px-6 md:px-10 lg:px-20">
        <div>Search</div>
        <div></div>
        <div className="flex justify-between px-4">
          {allExp.slice(0, 4).map((exp, i) => (
            <ExpCard key={i} exp={exp}></ExpCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
