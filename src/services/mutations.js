import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addPost } from "./api";

export function useAddPost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
}
