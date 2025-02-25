function SelectPageButton({ role, text }) {
  return (
    <>
      <button
        type="button"
        className={`w-[240px] h-[64px] text-[30px] font-bold self-end border-black border-4 rounded-[10px] ${
          role === "write" ? "bg-lionYellow" : "bg-lionBlue"
        }`}
      >
        {text}
      </button>
    </>
  );
}

export default SelectPageButton;
