import { ThirdwebSDK } from "@3rdweb/sdk";
import { ethers } from "ethers";
import { v4 as uuidv4 } from "uuid";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { address } = req.body;

  const nftModule = new ThirdwebSDK(
    new ethers.Wallet(
      process.env.PRIVATE_KEY as string,
      ethers.getDefaultProvider("<your alchemy url>")
    )
  ).getNFTModule("0x114fc8292e67ccFB7472fa55891A7FC054b54FD4");

  await nftModule
    .mintTo(address, {
      name: `#${Math.floor(1000 + Math.random() * 9000)}`,
      description: "Cool Robot",
      image: `https://avatars.dicebear.com/api/bottts/${uuidv4()}.svg`,
    })
    .then((metadata) => res.status(200).json(metadata))
    .catch((error) =>
      res.status(404).json({ msg: "Error minting NFT", error })
    );
}
