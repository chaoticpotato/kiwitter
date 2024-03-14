import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function PostList() {
  const { isPending, error, data } = useQuery({
    queryKey: ["postlar"],
    queryFn: () => axios.get("https://twitter-clone-node.onrender.com/posts"),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  console.log("son postlar: ", data);

  return <div>hey</div>;
}
