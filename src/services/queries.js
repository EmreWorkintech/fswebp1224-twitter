import { useQuery } from "@tanstack/react-query";
import { getPostList } from "./api";

export function usePosts() {
  return useQuery({
    queryKey: ["posts"],
    queryFn: getPostList,
    staleTime: 1000 * 10,
  });
}
