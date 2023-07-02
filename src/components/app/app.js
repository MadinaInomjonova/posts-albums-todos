import "./app.css";
import { Albums, Header, Posts, Todos } from "../";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        await axios
          .get("https://jsonplaceholder.typicode.com/posts")
          .then((res) => setPosts(res.data));
      } catch (err) {
        console.log(err.message);
      }
    }
    getData();
  }, []);

  return (
    <div>
      <Header />

      <div className="content">
        <Routes>
          <Route path="/" element={<Posts posts={posts} />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/todos" element={<Todos />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
