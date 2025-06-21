import { useForm } from "react-hook-form";
import { useAddPost } from "../services/mutations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWandSparkles } from "@fortawesome/free-solid-svg-icons";
import { useAI } from "../hooks/useAI";

function NewPost() {
  const { register, handleSubmit, reset, setValue, getValues } = useForm();
  const mutation = useAddPost();

  const { askAI } = useAI(
    "Convert this text to spanish. do not use markdown. only return translated text."
  );

  function submitFn(data) {
    mutation.mutate(data);
    reset();
  }

  if (mutation.error) return <p>{mutation.error.message}</p>;

  return (
    <form
      className="h-36 w-full bg-slate-200 flex justify-between flex-wrap p-4 gap-2"
      onSubmit={handleSubmit(submitFn)}
    >
      <textarea
        className="w-full"
        rows={3}
        placeholder="What's happening?"
        {...register("title")}
      />
      <input type="hidden" value={5} {...register("userId")} />
      <div
        onClick={async () => {
          const res = await askAI(getValues().title);
          setValue("title", res);
        }}
      >
        <FontAwesomeIcon icon={faWandSparkles} />
      </div>
      <button className="bg-blue-400 rounded-full px-6 text-white">
        {mutation.isPending ? "Saving..." : "Tweet"}
      </button>
    </form>
  );
}

export default NewPost;
