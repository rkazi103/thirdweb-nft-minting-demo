import { NextComponentType } from "next";

const Mint: NextComponentType = () => {
  const mint = async () => {};

  return (
    <div>
      <a
        className="inline-flex items-center px-5 py-3 text-sm font-medium text-white transition-colors bg-[#3b5998] border-2 border-[#3b5998] rounded hover:bg-transparent hover:text-[#3b5998] focus:outline-none focus:ring active:opacity-75 cursor-pointer"
        onClick={() => mint()}
      >
        Mint Profile Picture
      </a>
    </div>
  );
};

export default Mint;
