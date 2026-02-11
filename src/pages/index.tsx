import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import dashbit_logo from "/src/images/dashbit-logo.png";
import sourcelevel_logo from "/src/images/sourcelevel-logo.png";
import josevalim from "/src/images/josevalim.jpg";
import georgeguimaraes from "/src/images/georgeguimaraes.jpg";
import marcelopark from "/src/images/marcelopark.jpg";
import marcelopark_image from "/src/images/marcelopark-image.jpg";
import elixir_radar_logo from "/src/images/elixir-radar-logo.png";
import hugobarauna from "/src/images/hugobarauna.jpg";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="relative py-16 bg-white overflow-hidden">
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <h1>
            <span className="block text-base text-center text-ptec-blue font-semibold tracking-wide uppercase">
              Announcement  
            </span>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-ptec-blue sm:text-4xl">
              Plataformatec Has Closed Its Operations.
            </span>
          </h1>
        </div>
        <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
          <p>
            In January 2020, after 11 years delivering high quality projects in
            Ruby and Elixir to dozens of clients in Brazil, USA, and Europe,
            Plataformatec was{" "}
            <a href="https://medium.com/building-nubank/tech-perspectives-behind-nubanks-first-acquisition-deal-what-this-business-move-means-and-how-it-d7d1233c72b8">
              acqui-hired by Nubank
            </a>
            , the first{" "}
            <a href="https://labsnews.com/en/news/business/with-last-funding-nubank-is-the-first-startup-in-brazil-to-be-valued-at-10bi/">
              decacorn in Brazil
            </a>
            .
          </p>

          <p>
            You can still check the content on our blog at{" "}
            <a href="http://blog.plataformatec.com.br">
              https://blog.plataformatec.com.br
            </a>
            .
          </p>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto my-16">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-ptec-blue sm:text-4xl">
            What's next?
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Some of the Plataformatec's partners have started new companies.
            Please check them out!
          </p>
        </div>

        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-4 lg:max-w-none">
          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
              <a href="https://dashbit.co">
                <img
                  className="h-48 w-full object-contain p-7"
                  src={dashbit_logo}
                  alt="Dashbit Logo"
                />
              </a>
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <a href="https://dashbit.co" className="block mt-2">
                  <p className="text-xl font-semibold text-ptec-blue">
                    Dashbit
                  </p>
                  <p className="mt-3 text-base text-gray-500">
                    José Valim has openened a new company to help startups and
                    enterprises adopt and run Elixir in production.
                  </p>
                </a>
              </div>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <a href="https://twitter.com/josevalim">
                    <span className="sr-only">José Valim</span>
                    <img
                      className="h-10 w-10 rounded-full"
                      src={josevalim}
                      alt="José Valim picture"
                    />
                  </a>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    <a
                      href="https://twitter.com/josevalim"
                      className="hover:underline"
                    >
                      José Valim
                    </a>
                  </p>
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <a
                      href="https://twitter.com/josevalim"
                      className="hover:underline"
                    >
                      @josevalim
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
              <a href="https://sourcelevel.io">
                <img
                  className="h-48 w-full object-contain"
                  src={sourcelevel_logo}
                  alt="SourceLevel Logo"
                />
              </a>
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <a href="https://sourcelevel.io" className="block mt-2">
                  <p className="text-xl font-semibold text-ptec-blue">
                    SourceLevel
                  </p>
                  <p className="mt-3 text-base text-gray-500">
                    George Guimarães has created SourceLevel to bring
                    observability into software engineering management.
                  </p>
                </a>
              </div>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <a href="https://georgeguimaraes.com">
                    <span className="sr-only">George Guimarães</span>
                    <img
                      className="h-10 w-10 rounded-full"
                      src={georgeguimaraes}
                      alt="George Guimarães picture"
                    />
                  </a>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    <a
                      href="https://georgeguimaraes.com"
                      className="hover:underline"
                    >
                      George Guimarães
                    </a>
                  </p>
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <a
                      href="https://georgeguimaraes.com"
                      className="hover:underline"
                    >
                      georgeguimaraes.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
              <a href="https://www.marcelopark.com.br">
                <img
                  className="h-48 w-full object-cover"
                  src={marcelopark_image}
                  alt=""
                />
              </a>
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-indigo-600"></p>
                <a href="https://www.marcelopark.com.br" className="block mt-2">
                  <p className="text-xl font-semibold text-ptec-blue">
                    Marcelo Park
                  </p>
                  <p className="mt-3 text-base text-gray-500">
                    Marcelo does consulting and advisory services to cofounders
                    and heads in search for company growth.
                  </p>
                </a>
              </div>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <a href="https://www.marcelopark.com.br/">
                    <span className="sr-only">Marcelo Park</span>
                    <img
                      className="h-10 w-10 rounded-full"
                      src={marcelopark}
                      alt="Marcelo Park picture"
                    />
                  </a>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    <a
                      href="https://www.marcelopark.com.br/"
                      className="hover:underline"
                    >
                      Marcelo Park
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
              <a href="https://elixir-radar.com">
                <img
                  className="h-48 w-full object-contain"
                  src={elixir_radar_logo}
                  alt="Elixir Radar Logo"
                />
              </a>
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <a href="https://elixir-radar.com" className="block mt-2">
                  <p className="text-xl font-semibold text-ptec-blue">
                    Elixir Radar
                  </p>
                  <p className="mt-3 text-base text-gray-500">
                    Hugo Baraúna turned Elixir Radar into a new company, to keep
                    helping the Elixir ecosystem to move forward.
                  </p>
                </a>
              </div>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <a href="https://hugobarauna.com/">
                    <span className="sr-only">Hugo Baraúna</span>
                    <img
                      className="h-10 w-10 rounded-full"
                      src={hugobarauna}
                      alt="Hugo Baraúna picture"
                    />
                  </a>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    <a
                      href="https://hugobarauna.com/"
                      className="hover:underline"
                    >
                      Hugo Baraúna
                    </a>
                  </p>
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <a
                      href="https://twitter.com/hugobarauna"
                      className="hover:underline"
                    >
                      @hugobarauna
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <title>Plataformatec Has Closed Its Operations.</title>
);
