import { useState } from "react";

export default function Form() {
  const [value, setValue] = useState("");
  const [status, setStatus] = useState("empty");
  const [loading, setLoading] = useState(false);
  if (status === "success") {
    return <h1>That's right!</h1>;
  }

  const handleOnChangeValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    setStatus("typing");
  };

  const handleOnClickAnswer = () => {
    setLoading(true);
    setTimeout(() => {
      if (value === "young") {
        setStatus("success");
      } else {
        alert("오답");
        setValue("");
      }
      setLoading(false);
    }, 1000);
  };

  if (loading) {
    return <p>답 확인중</p>;
  }

  console.log("value", value);
  return (
    <>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={handleOnClickAnswer}>
        {/* 제출중 비활성화 */}
        <textarea
          disabled={status === "submitting"}
          onChange={handleOnChangeValue}
          value={value}
        />
        <br />
        {/* 공백이거나 제출중 비활성화 */}
        <button disabled={status === "empty" || status === "submitting"}>
          Submit
        </button>
        {status === "error" && (
          <p className="Error">Good guess but a wrong answer. Try again!</p>
        )}
      </form>
    </>
  );
}
