import { useState } from "react";

import { CheckOutlined } from "@mui/icons-material";
import "./posts.css";

const Posts = ({ posts }) => {
  console.log(posts);
  const [active, setActive] = useState(false);
  return (
    <div className="posts grid grid-cols-4 gap-4">
      {posts?.map((post) => (
        <div key={post.id} className="post flex flex-col gap-4">
          <div className="post__header flex items-center gap-2">
            <div className="checkbox checked">
              <CheckOutlined />
              <input type="checkbox" />
            </div>
            <h5 className="font-semibold text-lg cursor-pointer">username</h5>
          </div>

          <div>
            <p className="text-lg">{post.title.slice(0, 20)}</p>
            <p className="text-[var(--clr-gray)]">{post.body.slice(0, 150)}</p>
          </div>

          <div className="post__footer flex items-center gap-3 justify-end">
            <i className="far fa-comment"></i>
            <i className="fas fa-pen"></i>
            <i className="far fa-trash-can"></i>
            <i
              className={`${
                active
                  ? "fas fa-bookmark text-[var(--clr-icon)]"
                  : "far fa-bookmark"
              }`}
              onClick={() => setActive(!active)}
            ></i>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
