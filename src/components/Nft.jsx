import React from 'react'

const Nft = () => {
    return (
      <div className="bg-nftBg bg-center bg-cover bg-no-repeat h-[869px] max-lg:h-full">
        <div className="container">
          <div className="flex items-center gap-[187px] max-xl:gap-24 max-lg:gap-20 max-md:gap-16 max-sm:gap-10 max-lg:flex-wrap pt-[105px] max-lg:pt-20 max-md:pt-14 max-sm:pt-10">
            <div className="w-6/12 max-lg:w-full">
              <h2 className="text-5xl font-josefin max-lg:text-4xl max-md:text-3xl max-sm:text-2xl font-bold leading-[61.2px] text-white mb-4">
                <span className="text-[#7664CD]">NFT</span> Utility
              </h2>
              <p className="text-xl font-normal leading-[35px] text-white max-w-[649px] opacity-70 max-lg:max-w-none">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                curabitur iaculis id cursus dignissim. Volutpat placerat
                volutpat commodo id ultricies volutpat vestibulum. Egestas
                venenatis dignissim fames maecenas. Blandit orci consectetur
                mauris, ipsum viverra quisque. Vulputate sollicitudin tellus
                eget consequat lectus dignissim integer in vitae. Commodo
                integer dis tortor cras maecenas sit. Et nunc et platea
                elementum, cursus morbi. Placerat molestie nibh parturient
                lectus magna sed fusce diam urna. Quam magna duis imperdiet
                posuere iaculis.
              </p>
            </div>
            <div className="w-6/12 max-lg:w-full">
              <img
                src="/assets/images/webp/girl-with-stagger.webp"
                alt="player"
                className="w-full max-w-[369px] h-[638px] pointer-events-none"
              />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Nft