const Testimonials = () => {
  return (
    <section className="text-center text-base my-16 space-y-12 lg:text-lg">
      <h3 className="uppercase text-lg text-grayish-blue tracking-[0.15rem] font-serif font-bold">
        Client Testimonials
      </h3>
      <div className="flex flex-col gap-16 md:flex-row md:justify-around md:gap-2 lg:gap-0">
        <Testimonial
          image={"image-emily"}
          reviewName="Emily R."
          reviewJob="Marketing Director"
        >
          We put our trust in Sunnyside and they delivered, making sure our
          needs were met and deadlines were always hit.
        </Testimonial>
        <Testimonial
          image={"image-thomas"}
          reviewName="Thomas S."
          reviewJob="Chief Operating Officer"
        >
          Sunnyside's enthusiasm coupled with their keen interest in our brand's
          success made it a satisfying and enjoyable experience.
        </Testimonial>
        <Testimonial
          image={"image-jennie"}
          reviewName="Jennie F."
          reviewJob={"Business Owner"}
        >
          Incredible end result! Our sales increased over 400% when we worked
          with Sunnyside. Highly recommended!
        </Testimonial>
      </div>
    </section>
  );
};

const Testimonial = ({ children, image, reviewName, reviewJob }) => {
  return (
    <div className="flex flex-col items-center gap-8 px-10 md:px-0 lg:px-6 xl:px-12">
      <img
        src={`/sunnyside-agency-landing-page/images/${image}.jpg`}
        alt={`${reviewName} profile picture`}
        className="w-16 h-16 rounded-full"
      />
      <p className="opacity-60 leading-8 md:text-xs md:leading-5 lg:text-sm xl:text-base">
        {children}
      </p>
      <div>
        <h4 className="text-lg text-very-dark-desaturated-blue font-serif font-bold md:text-base xl:text-lg">
          {reviewName}
        </h4>
        <h5 className="text-grayish-blue mt-1 md:text-base xl:text-lg">
          {reviewJob}
        </h5>
      </div>
    </div>
  );
};

export default Testimonials;
