import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const APIURL = "https://strangers-things.herokuapp.com/api/2309-FTB-ET-WEB-FT/";

function AllPosts() {
  const [allPosts, setAllPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(`${APIURL}posts`);
        const data = await response.json();

        setAllPosts(data.data.posts);
      } catch (err) {
        console.log("error fetching posts");
      }
    }
    fetchPosts();
  }, []);

  console.log(allPosts);

  return (
    <>
      {allPosts.map((p, index) => (
        <div
          key={index}
          className="posts"
          onClick={() => navigate(`/${p.title}`)}
        >
          <h1>{p.title}</h1>
        </div>
      ))}
    </>
  );
}
export default AllPosts;
