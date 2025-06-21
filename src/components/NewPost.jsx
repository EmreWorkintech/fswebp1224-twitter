import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";

function NewPost() {
  const { register, handleSubmit, reset } = useForm();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (postData) => {
      return axios
        .post("https://dummyjson.com/posts/add", postData)
        .then((res) => res.data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  function submitFn(data) {
    mutation.mutate(data);
    reset();
  }

  if (mutation.error) return <p>{mutation.error.message}</p>;

  return (
    <form
      className="h-36 w-full bg-slate-200 flex justify-end flex-wrap p-4 gap-2"
      onSubmit={handleSubmit(submitFn)}
    >
      <textarea
        className="w-full"
        rows={3}
        placeholder="What's happening?"
        {...register("title")}
      />
      <input type="hidden" value={5} {...register("userId")} />
      <button className="bg-blue-400 rounded-full px-6 text-white">
        {mutation.isPending ? "Saving..." : "Tweet"}
      </button>
    </form>
  );
}

export default NewPost;
