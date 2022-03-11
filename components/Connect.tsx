import { useWeb3 } from "@3rdweb/hooks";
import { NextComponentType } from "next";

const Connect: NextComponentType = () => {
  const { connectWallet } = useWeb3();

  return (
    <div>
      <a
        className="inline-block p-[2px] rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:text-white active:text-opacity-75 focus:outline-none focus:ring cursor-pointer"
        onClick={() => connectWallet("injected")}
      >
        <span className="block px-8 py-3 text-sm font-medium bg-white rounded-full hover:bg-transparent">
          Connect Wallet
        </span>
      </a>
    </div>
  );
};

export default Connect;
