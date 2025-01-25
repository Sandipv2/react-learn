import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  //   const [data, setData] = useState({});
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/sandipv2")
  //       .then((res) => res.json())
  //       .then((res) => {
  //         setData(res);
  //       });
  //   }, []);

  const data = useLoaderData();

  return (
    <div className="container bg-slate-800 text-white p-3 flex justify-center items-center flex-col">
      Followers: {data.followers}
      <img src={data.avatar_url} alt="" />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/sandipv2");
  return response.json();
};
