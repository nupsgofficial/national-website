const Footer = () => {
  return (
    <section className=" text-color-1 px-8 pt-8 pb-12 bg-[#191A2B] md:px-12 font-poppins  space-y-8 ">
      <div className="md:flex items-center justify-between md:px-10">
        <p className="uppercase text-lg font-medium text-center py-4">
          subscribe to our news letter
        </p>

        <form
          action="#"
          className="space-y-4 md:space-y-0 md:flex items-center gap-3"
        >
          <label htmlFor="email" className="block">
            <input
              type="email"
              name="email"
              id="email"
              className="rounded-full w-full h-10  px-4 focus:outline-none md:text-sm"
              placeholder="Email: example@gmail.com"
            />
          </label>
          <button
            type="submit"
            className="uppercase block bg-[#6E49FF] w-full md:w-auto px-5 py-2 rounded-full font-semibold text-sm"
          >
            submit
          </button>
        </form>
      </div>
      <div className="border-t-2 pt-5 md:border-t-2 md:grid grid-cols-3 gap-x-5 justify-center md:pt-8 space-y-6 md:space-y-0">
        <div className="space-y-6">
          <h3 className="uppercase font-medium text-xl md:text-sm">
            about our union
          </h3>
          <p className="md:text-sm">
            The Union is primarily made up of Presbyterian Students in Senior
            High and Tertiary Institutions.
          </p>
        </div>
        <div className="space-y-6">
          <h3 className="uppercase font-medium text-xl md:text-sm ">
            quick links
          </h3>
          <ul className="space-y-8 divide-y-reverse divide-y md:text-sm">
            <li>Our History</li>
            <li>Our History</li>
            <li>Our History</li>
            <li>Our History</li>
            <li>Our History</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="uppercase font-medium text-xl md:text-sm">
            coordinating branch
          </h3>
          <ul className="space-y-8 divide-y-reverse divide-y md:text-sm">
            <li>Our History</li>
            <li>Our History</li>
            <li>Our History</li>
            <li>Our History</li>
            <li>Our History</li>
          </ul>
        </div>

        {/* <div>
          <h3 className="uppercase font-medium text-xl">donate/branch</h3>
        </div> */}
      </div>
    </section>
  );
};

export default Footer;
