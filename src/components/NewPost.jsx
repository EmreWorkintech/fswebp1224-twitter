import { useForm } from "react-hook-form";
import { useAddPost } from "../services/mutations";
import { GoogleGenAI } from "@google/genai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWandSparkles } from "@fortawesome/free-solid-svg-icons";

function NewPost() {
  const { register, handleSubmit, reset, setValue, getValues } = useForm();

  const mutation = useAddPost();

  function submitFn(data) {
    mutation.mutate(data);
    reset();
  }

  async function translate() {
    const ai = new GoogleGenAI({
      apiKey: "AIzaSyCEVRuuy0aIR2BBQ7lT7XrW0QzC9kyF8P4",
    });
    const chat = ai.chats.create({ model: "gemini-2.0-flash" });

    const response = await chat.sendMessage({
      message: "Convert these text to english: " + getValues().title,
    });
    setValue("title", response.text);
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
      <div onClick={translate}>
        <FontAwesomeIcon icon={faWandSparkles} />
      </div>
      <button className="bg-blue-400 rounded-full px-6 text-white">
        {mutation.isPending ? "Saving..." : "Tweet"}
      </button>
    </form>
  );
}

export default NewPost;
