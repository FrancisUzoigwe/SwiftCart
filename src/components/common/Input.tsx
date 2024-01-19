import { useEffect, useRef, useState } from "react";

const Input = () => {
  const [focused, setFocused] = useState<boolean>(false);
  const [hasContent, setHasContent] = useState<boolean>(false);
  const myRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  const handleChange = () => {
    setHasContent(!!myRef?.current?.value);
  };

  useEffect(() => {
    setHasContent(!!myRef?.current?.value);
  }, []);
  return (
    <div>
      <div
        className={`relative h-auto border transition-all duration-300 rounded-md ${
          focused || hasContent ? "border-blue-500" : "border-black"
        }`}
      >
        <input
          onFocus={handleFocus}
          onChange={handleChange}
          onBlur={handleBlur}
          ref={myRef}
          type="text"
          className={` outline-none rounded-md pl-3`}
        />
        <label
          className={`absolute left-3 transition-all duration-300 ${
            focused || hasContent ? "-top-3 px-[6px] bg-white " : "top-[8px]"
          }`}
        >
          Email
        </label>
      </div>
      <div className="flex justify-end w-[90%] text-[14px] font-bold text-red-400 ">
        Provide email address
      </div>
    </div>
  );
};

export default Input;
