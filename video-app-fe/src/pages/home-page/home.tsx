import axios from "axios";
import React, { useEffect, useState } from "react";

export const HomePage = () => {
  const [video, setVideo] = useState<any>({});
  useEffect(() => {
    // try {
    //   const response = async () => {
    //     const { data } = await axios.get("http://localhost:3001/api/video");
    //     setVideo([...data]);
    //   };
    //   response();
    //   // const data = await response.json();
    // } catch (error) {
    //   console.log(error);
    // }
  }, []);
  return (
    <div className="App">
      <video controls muted autoPlay>
        <source src="http://localhost:3001/api/video" type="video/mp4"></source>
      </video>
    </div>
  );
};
