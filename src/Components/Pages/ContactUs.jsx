import callCenter from "../../../public/call_center.jpg";
const ContactUs = () => {
  return (
    <div>
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-4 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
        <div className="flex flex-col justify-between ">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
              Contact Us!
            </h2>
            <div className="dark:text-gray-600">
              Our Team Available 24/7 . You Can Contact Us Anytime.
            </div>
          </div>
          <img src={callCenter} alt="" className="" />
        </div>
        <form noValidate="" className="space-y-6">
          <div>
            <label htmlFor="name" className="text-sm">
              Full name
            </label>
            <input
              id="name"
              type="text"
              placeholder=""
              className="w-full p-3 border border-lime-600  rounded dark:bg-gray-100"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-3 border border-lime-600 rounded dark:bg-gray-100"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm">
              Message
            </label>
            <textarea
              id="message"
              rows="3"
              className="w-full p-3 border border-lime-600  rounded dark:bg-gray-100"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 text-sm border border-lime-600  font-bold tracking-wide uppercase rounded dark:bg-violet-600 dark:text-gray-50"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
