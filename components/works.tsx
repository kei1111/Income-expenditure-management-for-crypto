import React from "react";
import { Tile, TileBackground, TileContent, TileWrapper } from "./tile";
import {
  WorkBackground,
  WorkContainer,
  WorkLeft,
  // WorkLink,
  WorkRight,
} from "./work";
import Image from "next/image";

const Works = () => (
  <TileWrapper numOfPages={3}>
    <TileBackground>
      <WorkBackground />
    </TileBackground>
    <TileContent>
      <Tile
        page={0}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div>We bult</div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                {/* <WorkLink href="https://example.com">Pink Panda</WorkLink> */}
                &apos;s app
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image
                src="/assets/pinkpanda.png"
                layout="responsive"
                width={840}
                height={1620}
                alt="PinkPanda"
              />
            </WorkRight>
          </WorkContainer>
        )}
      ></Tile>
      <Tile
        page={1}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div>We aaa</div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                Steakwallet&nbsp;faster
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image
                src="/assets/steakwallet.png"
                layout="responsive"
                width={840}
                height={1620}
                alt="SteakWallet"
              />
            </WorkRight>
          </WorkContainer>
        )}
      ></Tile>
      <Tile
        page={2}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div>We helped</div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                Showtime ship faster
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image
                src="/assets/showtime.png"
                layout="responsive"
                width={840}
                height={1620}
                alt="Showtime"
              />
            </WorkRight>
          </WorkContainer>
        )}
      ></Tile>
    </TileContent>
  </TileWrapper>
);

export default Works;
