const ServiceGrid = () => {
  return (
    <div>
      <ServiceSection image={"image-transform"}>
        <h3 className="text-4xl text-center font-serif font-bold md:text-2xl md:text-start md:pr-16 lg:text-4xl">
          Transform your brand
        </h3>
        <p className="text-grayish-blue text-center md:text-base md:text-start xl:text-lg">
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
        <div className="flex justify-center md:justify-start">
          <a className="cursor-pointer uppercase font-serif font-bold flex flex-col items-center after:w-[110%] after:h-2 after:bg-sunny-yellow/50 after:-mt-2.5 after:-z-10 after:rounded-full hover:after:bg-sunny-yellow md:text-base xl:text-lg">
            Learn more
          </a>
        </div>
      </ServiceSection>
      <ServiceSection image={"image-stand-out"} orderSwap>
        <h3 className="text-4xl text-center font-serif font-bold md:text-2xl md:text-start lg:text-4xl">
          Stand out to the right audience
        </h3>
        <p className="text-grayish-blue text-center md:text-base md:text-start xl:text-lg">
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we'll build and extend
          your brand in digital places.
        </p>
        <div className="flex justify-center md:justify-start">
          <a className="cursor-pointer uppercase font-serif font-bold flex flex-col items-center after:w-[110%] after:h-2 after:bg-soft-red/50 after:-mt-2.5 after:-z-10 after:rounded-full hover:after:bg-soft-red md:text-base xl:text-lg">
            Learn more
          </a>
        </div>
      </ServiceSection>
      <div className="flex flex-col md:flex-row">
        <ServiceSectionTwo
          image={"image-graphic-design"}
          className="text-dark-desaturated-cyan"
        >
          <h3 className="text-3xl font-serif font-bold md:text-2xl lg:text-3xl">
            Graphic Design
          </h3>
          <p className="md:text-xs lg:text-base">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients'
            attention.
          </p>
        </ServiceSectionTwo>
        <ServiceSectionTwo
          image={"image-photography"}
          className="text-dark-blue"
        >
          <h3 className="text-3xl font-serif font-bold md:text-2xl lg:text-3xl">
            Photography
          </h3>
          <p className="md:text-xs lg:text-base lg:px-8 xl:px-0">
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </ServiceSectionTwo>
      </div>
    </div>
  );
};

const ServiceSection = ({ children, image, orderSwap }) => {
  return (
    <div
      className={`flex flex-col ${
        orderSwap ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div className="w-full md:w-1/2">
        <img
          src={`/images/mobile/${image}.jpg`}
          alt="Egg"
          className="block md:hidden"
        />
        <img
          src={`/images/desktop/${image}.jpg`}
          alt="Egg"
          className="hidden  md:block"
        />
      </div>
      <div className="py-12 px-6 space-y-12 md:w-1/2 md:space-y-0 md:py-8 md:px-8 md:flex md:flex-col md:justify-around lg:p-14 xl:p-24">
        {children}
      </div>
    </div>
  );
};

const ServiceSectionTwo = ({ children, image, className }) => {
  return (
    <div className="relative">
      <div>
        <img
          src={`/images/mobile/${image}.jpg`}
          alt=""
          className="block md:hidden"
        />
        <img
          src={`/images/desktop/${image}.jpg`}
          alt=""
          className="hidden md:block"
        />
      </div>
      <div
        className={`absolute inset-x-0 bottom-0 text-center text-base px-3 pb-16 space-y-8 md:px-16 md:pb-8 md:space-y-4 lg:px-14 xl:pb-16 xl:px-36 ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default ServiceGrid;
