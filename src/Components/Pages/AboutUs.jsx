import road from "../../../public/road.jpg";
import mission from "../../../public/mission.jpg";
import philosophy from "../../../public/philosophy.jpg";
const AboutUs = () => {
  return (
    <div>
      <section className="p-4 lg:p-8 dark:bg-gray-100 dark:text-gray-800">
        <h2 className="text-xl md:text-3xl font-semibold text-center my-5 pb-5 text-lime-600">
          About Us
        </h2>
        <div className="container mx-auto space-y-12">
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img
              src={road}
              alt=""
              className="h-80 dark:bg-gray-500 aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
              <h3 className="text-3xl font-bold">Our Journey</h3>
              <p className="my-6 dark:text-gray-600">
                Embarking on a difficult journey is akin to stepping into the
                unknown, where uncertainty looms large, and challenges await at
                every turn. It's a path fraught with obstacles, demanding
                resilience, courage, and unwavering determination. As the
                journey unfolds, it becomes a testament to the human spirit's
                capacity for resilience and perseverance. It's a journey of
                self-discovery, where one learns the depths of their own
                strength and the boundless potential within.
              </p>
              <button className="text-lime-600">Read More...</button>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
            <img
              src={mission}
              alt=""
              className="h-80 dark:bg-gray-500 aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
              <h3 className="text-3xl font-bold">Our Mission</h3>
              <p className="my-6 dark:text-gray-600">
                A strong mission serves as the guiding star, the north on the
                compass of an organization's journey. It encapsulates the
                purpose, values, and aspirations that drive every action and
                decision, uniting individuals in a shared vision of impact and
                change. A mission is more than just words on paper; it's a call
                to action, a rallying cry that ignites passion and commitment.
                It imbues every endeavor with meaning and significance,
                providing a sense of direction and clarity amidst uncertainty
                and complexity.
              </p>
              <button className="text-lime-600">Read More...</button>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img
              src={philosophy}
              alt=""
              className="h-80 dark:bg-gray-500 aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
              <h3 className="text-3xl font-bold">Our Philosophy</h3>
              <p className="my-6 dark:text-gray-600">
                Philosophy provides a framework for ethical reasoning and moral
                decision-making. It explores questions of right and wrong,
                justice and fairness, and the nature of the good life. By
                examining ethical theories and principles, philosophy helps us
                develop a moral compass to guide our actions and choices.
                Philosophy encourages tolerance and open-mindedness by exposing
                us to diverse perspectives and worldviews. It teaches us to
                engage with ideas that may challenge our own beliefs, fostering
                intellectual humility and empathy.
              </p>
              <button className="text-lime-600">Read More...</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
