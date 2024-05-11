import library01 from "../../../public/library-01.jpg";
import library02 from "../../../public/library-02.jpg";
import library03 from "../../../public/library-03.jpg";
import library04 from "../../../public/library-04.jpg";
import library05 from "../../../public/library-05.jpg";
import library06 from "../../../public/library-06.jpg";
import library07 from "../../../public/library-07.jpg";
const Blog = () => {
  return (
    <div>
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold text-center my-5">
            Read Our Latest Blog
          </h1>
          <p className="p-5 md:w-[70%] mx-auto pb-5 text-center font-medium">
            {" "}
            Blogs are frequently updated with fresh content, providing readers
            with the latest news, trends, and insights. They offer real-time
            information on topics of interest, keeping readers informed and
            engaged.
          </p>
        </div>
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <a
            rel="noopener noreferrer"
            href="#"
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50"
          >
            <img
              src={library01}
              alt=""
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                Librarian's Log: Managing the Literary Landscape
              </h3>
              <span className="text-xs dark:text-gray-600">
                February 19, 2024
              </span>
              <p>
                Libraries provide access to a vast array of books, journals,
                magazines, and other resources, democratizing knowledge and
                information. They serve as repositories of human wisdom,
                enabling individuals to educate themselves on a wide range of
                topics regardless of their socioeconomic status....
              </p>
            </div>
          </a>
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 dark:bg-gray-500"
                src={library02}
              />
              <div className="p-6 space-y-2 border border-lime-600 rounded">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  Bookshelf Chronicles: Navigating Library Systems
                </h3>
                <span className="text-xs dark:text-gray-600">
                  January 21, 2024
                </span>
                <p>
                  Libraries play a crucial role in promoting literacy by
                  providing resources and programs that support reading and
                  learning. They serve as community hubs where people of all
                  ages can develop their reading skills, fostering a culture of
                  literacy that is essential for personal growth and societal
                  development....
                </p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 dark:bg-gray-500"
                src={library03}
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  The Library Ledger: Insights into Book Management
                </h3>
                <span className="text-xs dark:text-gray-600">
                  January 22, 2024
                </span>
                <p>
                  Books are repositories of culture, history, and heritage.
                  Libraries preserve and protect cultural artifacts, documents,
                  and literature, ensuring that future generations have access
                  to their cultural heritage. By preserving diverse voices and
                  perspectives, libraries contribute to the richness and
                  diversity of society....
                </p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 dark:bg-gray-500"
                src={library04}
              />
              <div className="p-6 space-y-2 border border-lime-600 rounded">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  Pages & Pixels: Innovations in Library Technology
                </h3>
                <span className="text-xs dark:text-gray-600">
                  January 23, 2024
                </span>
                <p>
                  Libraries uphold the principles of intellectual freedom and
                  access to information, providing spaces where individuals can
                  explore a wide range of ideas and viewpoints. They defend
                  against censorship and promote freedom of expression,
                  fostering an environment where diverse opinions can be heard
                  and respected....
                </p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 dark:bg-gray-500"
                src={library05}
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  Bibliophile's Blueprint: Crafting Library Solutions
                </h3>
                <span className="text-xs dark:text-gray-600">
                  March 24, 2024
                </span>
                <p>
                  Libraries serve as community centers that bring people
                  together, fostering social connections and civic engagement.
                  They offer a variety of programs and services, including book
                  clubs, author readings, workshops, and educational events,
                  that enrich the lives of community members and promote a sense
                  of belonging....
                </p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 dark:bg-gray-500"
                src={library06}
              />
              <div className="p-6 space-y-2 border border-lime-600 rounded">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  Shelf Savvy: Strategies for Library Management
                </h3>
                <span className="text-xs dark:text-gray-600">May 25, 2024</span>
                <p>
                  Libraries support lifelong learning by offering resources and
                  programs that cater to individuals of all ages and
                  backgrounds. From early childhood literacy programs to adult
                  education classes, libraries provide opportunities for
                  personal and professional development throughout the lifespan
                  ....
                </p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 dark:bg-gray-500"
                src={library07}
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  Reading Room Reflections: Tales from Library Administrators
                </h3>
                <span className="text-xs dark:text-gray-600">
                  January 26, 2024
                </span>
                <p>
                  Books have the power to educate, inspire, and empower
                  individuals to effect positive change in their lives and
                  communities. They cultivate empathy by allowing readers to
                  step into the shoes of others and see the world from different
                  perspectives, fostering understanding, compassion, and
                  tolerance....
                </p>
              </div>
            </a>
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="px-6 py-3 text-lg border bg-lime-500 font-semibold rounded-md hover:underline dark:bg-gray-50 dark:text-gray-600"
            >
              Load more posts...
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
