import { SiHtml5, SiCss3, SiJavascript, SiReact, SiMongodb } from 'react-icons/si';
import { IoLogoNodejs } from 'react-icons/io';

export const Portfolio = () => {
  return (
    <section className="bg-slate-50 min-h-screen">
      <div className="hero pt-20 lg:pt-20 max-w-5xl mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://avatars.githubusercontent.com/u/63452472?s=400&u=00322a7b2bddc38001c8d0958bd4821635ae3767&v=4"
            className="max-w-xs w-full rounded-lg shadow-2xl"
            alt="profile"
          />
          <div className="px-2 lg:px-8">
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-700">Hi there! 👋</h1>
            <p className="py-3">
              My name is Arif. I am doing my Bachelors in technology from Sylhet Metropolitan
              university and my specialization is in Computer Science and Engineering.
            </p>
            <p className="py-3">
              I have a deep interest in Development and I have made number of projects using HTML,
              CSS, JS, and React.
            </p>
            <p className="py-3">
              I've always been fascinated by computers, so I started developing. As a developer I
              want to be able to create web sites that can effectively display information, provide
              interactivity, and are visually appealing.
            </p>
            <div className="flex gap-2 items-center  mt-4 ">
              <a href="#projects" className="btn-sm btn btn-primary">
                Projects
              </a>
              <a
                className="btn-sm btn btn-outline btn-primary"
                href="mailto:muhammadarif9416@yahoo.com"
              >
                Send me a mail
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* List of technologies */}
      <div className="max-w-5xl mx-auto pt-20">
        <h2 className="text-center text-3xl text-bold text-gray-700 py-16">
          Technologies that I have worked with so far
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-6">
          <div className="flex flex-col gap-4 items-center">
            <SiHtml5 className="text-[80px] text-[#E65100]" />
            Html 5
          </div>
          <div className="flex flex-col gap-4 items-center">
            <SiCss3 className="text-[80px] text-[#2062AF]" />
            Css 3
          </div>
          <div className="flex flex-col gap-4 items-center">
            <SiJavascript className="text-[80px] text-[#e6c211]" />
            Javascript
          </div>
          <div className="flex flex-col gap-4 items-center">
            <SiReact className="text-[80px] text-[#61DAFB]" />
            React
          </div>
          <div className="flex flex-col gap-4 items-center">
            <IoLogoNodejs className="text-[80px] text-[#4CAF50]" />
            NodeJs
          </div>
          <div className="flex flex-col gap-4 items-center">
            <SiMongodb className="text-[80px] text-[#4CAF50]" />
            MongoDb
          </div>
        </div>
      </div>

      <div id="projects" className="max-w-5xl mx-auto py-20 px-4">
        <h2 className="text-2xl font-semibold lg:py-10 px-4 lg:px-0">
          Few Projects with Live Site Demo...
        </h2>

        <div className="flex gap-2 items-center flex-wrap px-4 lg:px-0 mt-10 lg:mt-0 mb-4 shadow py-6 lg:py-0 lg:shadow-none">
          <p className="text-primary text-xl font-semibold">ZenFitness </p>
          <p>MERN Stack warehouse management project.</p>
          <p>
            <a href="https://zenfitness-46154.web.app/" className="link hover:link-primary">
              Click here
            </a>
          </p>
        </div>
        <div className="flex gap-2 items-center flex-wrap px-4 lg:px-0 mb-4 shadow lg:shadow-none py-6 lg:py-0">
          <p className="text-primary text-xl font-semibold">Eurasia</p>
          <p>HTML CSS based frontend design project for e-com site.</p>
          <a href="https://eurasia.netlify.app/" className="link hover:link-primary">
            Click here
          </a>
        </div>
        <div className="flex gap-2 items-center flex-wrap px-4 lg:px-0 lg:shadow-none shadow py-6 lg:py-0">
          <p className="text-primary text-xl font-semibold">unLens</p>
          <p>Photography as a service portfolio website</p>
          <a href="https://unlens.web.app/" className="link hover:link-primary">
            Click here
          </a>
        </div>
      </div>
    </section>
  );
};
