"use client"

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"

const images = [
  '/scam-club-nft-logo-green.png',
  '/scam-club-nft-logo-blue.png', 
  '/scam-club-nft-logo-pink.png', 
];


export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-2 md:p-24">
      
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <section>
          <div>
            <motion.h1 
              className="text-6xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >PEPE PIGS</motion.h1>
            <p>50,000 NFT Collection of Pepe Pigs!</p>
            <p>Collect them all!</p>
            <p>Polygon</p>
            <button>Mint Now</button>
          </div>  
        </section>

        <section className="mt-5">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <Image className="rounded-xl w-full" src="/scam-club-nft-logo-green.png" alt="Pepe Pig" width={300} height={300} />
          </motion.div>
          <div className="flex justify-between mt-3 gap-3">
            <motion.div 
              className="w-1/3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <Image className="rounded-xl w-full" src="/pepepig1.png" alt="Pepe Pig" width={90} height={90}></Image>
            </motion.div>
            <motion.div 
              className="w-1/3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <Image className="rounded-xl w-full" src="/pepepig2.png" alt="Pepe Pig" width={90} height={90}></Image>
            </motion.div>
            <motion.div 
              className="w-1/3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <Image className="rounded-xl w-full" src="/pepepig3.png" alt="Pepe Pig" width={90} height={90}></Image>
            </motion.div>
          </div>

          <div className="flex justify-between mt-3 gap-3">
            <motion.div 
              className="w-1/3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}  
            >
              <Image className="rounded-xl w-full" src="/pepepig4.png" alt="Pepe Pig" width={90} height={90}></Image>
            </motion.div>
            <motion.div 
              className="w-1/3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <Image className="rounded-xl w-full" src="/pepepig5.png" alt="Pepe Pig" width={90} height={90}></Image>
            </motion.div>
            <motion.div 
              className="w-1/3"
              initial={{ opacity: 0}}
              whileInView={{ opacity: 1}}
            >
              <Image className="rounded-xl w-full" src="/pepepig6.png" alt="Pepe Pig" width={90} height={90}></Image>
            </motion.div>
          </div>
          
        </section>

        <section className="flex flex-col items-center my-3 border-2 border-black rounded-xl py-5">
          <h1 className=" text-2xl mb-5">Mint Pepe Pigs Here!</h1>
          <p>Connect your wallet</p>
          <p>Mint your Pepe Pig with Polygon!</p>
          <button className="bg-black text-white px-5 py-2 rounded mt-5 text-2xl">Connect</button>
          <button className="bg-black text-white px-5 py-2 rounded mt-5 text-2xl">Mint</button>
          <p className="mt-10">Socials</p>
          <div className="flex gap-4">
            <Link href="/">Telegram</Link>
            <Link href="/">X</Link>
            <Link href="/">Instagram</Link>
          </div>
        </section>

        <section>
          <div>
            <h1 className="ml-3 text-2xl">How to Buy?</h1>
          </div>
          <div className="flex w-full gap-2">
            <div className="w-1/3 border-2 border-black rounded-xl p-2">
              <p>Step 1</p>
              <p>Connect a wallet</p>
              <p>Popular Polyogn wallets</p>
              <Link href="/">Metamask</Link>
              <Link href="/">Phantom</Link>
            </div>
            <div className="w-1/3 border-2 border-black rounded-xl p-2">
              <p>Step 2</p>
              <p>Buy Polygon</p>
              <p>Buy Polygon from exchange or trusted wallet</p>
            </div>
            <div className="w-1/3 border-2 border-black rounded-xl p-2">
              <p>Step 3</p>
              <p>Buy Pepe Pigs</p>
              <p>Use Polygon to purchase Pepe Pigs</p>
            </div>
          </div>
        </section>

        <section>
          <h1 className="ml-3 text-2xl">About</h1>
          <div className="border-2 border-black rounded-xl p-2">
            <p>Learn</p>
            <p>How to Buy Pepe Pig NFT</p>
            <p>Pepe Pigs Token</p>
            <p>Polygon</p>
            <p>Airdrops</p>
            <p>Community</p>
            <p>Contact</p>
            <p>Wallets</p>
            <p>Exchanges</p>
          </div>
        </section>

        <section>
          <div>
            <h1 className="ml-3 text-2xl">Road Map</h1>
            <div className="flex w-full gap-2">
              <div className="w-1/2 border-2 border-black rounded-xl p-2">
                <h1>Phase 1</h1>
                <p>Community Building</p>
                <p>NFT Collection</p>
              </div>
              <motion.div 
                className="w-1/2"
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
              >
                <Image className="w-full rounded-xl" src="/pepepig2.png" alt="pepe pig" width={200} height={200} />
              </motion.div>
            </div>

            <div className="flex w-full gap-2 mt-2">
              <div className="w-1/2 border-2 border-black rounded-xl p-2 order-2">
                <h1>Phase 2</h1>
                <p>Token Drop</p>
              </div>
              <motion.div 
                className="w-1/2 order-1"
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
              >
                <Image className="w-full rounded-xl" src="/pepepig4.png" alt="pepe pig" width={200} height={200} />
              </motion.div>
            </div>

            <div className="flex w-full gap-2 mt-2">
              <div className="w-1/2 border-2 border-black rounded-xl p-2">
                <h1>Phase 3</h1>
                <p>DAO</p>
                <p>Staking</p>
              </div>
              <motion.div 
                className="w-1/2"
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
              >
                <Image className="w-full rounded-xl" src="/pepepig5.png" alt="pepe pig" width={200} height={200} />
              </motion.div>
            </div>

            <div className="flex w-full gap-2 mt-2">
              <div className="w-1/2 order-2 border-2 border-black rounded-xl p-2">
                <h1>Phase 4</h1>
                <p>Game</p>
              </div>
              <motion.div 
                className="w-1/2  order-1"
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
              >
                <Image className="w-full rounded-xl" src="/pepepig7.png" alt="pepe pig" width={200} height={200} />
              </motion.div>
            </div>
          </div>

        </section>
        
      </div>
    </main>
  );
}
