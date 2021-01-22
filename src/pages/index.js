import * as React from "react"
import dashbit_logo from "/src/images/dashbit-logo.png"
import sourcelevel_logo from "/src/images/sourcelevel-logo.png"
import josevalim from "/src/images/josevalim.jpg"
import georgeguimaraes from "/src/images/georgeguimaraes.jpg"
import marcelopark from "/src/images/marcelopark.jpg"
import marcelopark_image from "/src/images/marcelopark-image.jpg"
import elixir_radar_logo from "/src/images/elixir-radar-logo.png"
import hugobarauna from "/src/images/hugobarauna.jpg"

export default function Index() {
  return (
    <div class="relative py-16 bg-white overflow-hidden">
      <div class="relative px-4 sm:px-6 lg:px-8">
        <div class="text-lg max-w-prose mx-auto">
          <h1>
            <span class="block text-base text-center text-ptec-blue font-semibold tracking-wide uppercase">Announcement</span>
            <span class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-ptec-blue sm:text-4xl">Plataformatec Has Closed Its Operations.</span>
          </h1>
        </div>
        <div class="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
          <p>In January 2020, after 11 years delivering high quality projects in Ruby and Elixir to dozens of clients in Brazil, USA, and Europe, Plataformatec was <a href="https://medium.com/building-nubank/tech-perspectives-behind-nubanks-first-acquisition-deal-what-this-business-move-means-and-how-it-d7d1233c72b8">acqui-hired by Nubank</a>, the first <a href="https://labsnews.com/en/news/business/with-last-funding-nubank-is-the-first-startup-in-brazil-to-be-valued-at-10bi/">decacorn in Brazil</a>.</p>

          <p>You can still check the content on our blog at <a href="http://blog.plataformatec.com.br">https://blog.plataformatec.com.br</a>.</p>
        </div>
      </div>


      <div class="relative max-w-7xl mx-auto my-16">
        <div class="text-center">
          <h2 class="text-3xl tracking-tight font-extrabold text-ptec-blue sm:text-4xl">
            What's next?
          </h2>
          <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Some of the Plataformatec's partners have started new companies. Please check them out!
          </p>
        </div>

        <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-4 lg:max-w-none">
          <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div class="flex-shrink-0">
              <a href="https://dashbit.co">
                <img class="h-48 w-full object-contain p-7" src={dashbit_logo} alt="Dashbit Logo" />
              </a>
            </div>
            <div class="flex-1 bg-white p-6 flex flex-col justify-between">
              <div class="flex-1">
                <a href="https://dashbit.co" class="block mt-2">
                  <p class="text-xl font-semibold text-ptec-blue">
                    Dashbit
                  </p>
                  <p class="mt-3 text-base text-gray-500">
                    José Valim has openened a new company to help startups and enterprises adopt and run Elixir in production.
                  </p>
                </a>
              </div>
              <div class="mt-6 flex items-center">
                <div class="flex-shrink-0">
                  <a href="https://twitter.com/josevalim">
                    <span class="sr-only">José Valim</span>
                    <img class="h-10 w-10 rounded-full" src={josevalim} alt="José Valim picture" />
                  </a>
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-gray-900">
                    <a href="https://twitter.com/josevalim" class="hover:underline">
                      José Valim
                    </a>
                  </p>
                  <div class="flex space-x-1 text-sm text-gray-500">
                    <a href="https://twitter.com/josevalim" class="hover:underline">
                      @josevalim
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div class="flex-shrink-0">
              <a href="https://sourcelevel.io">
                <img class="h-48 w-full object-contain" src={sourcelevel_logo} alt="SourceLevel Logo" />
              </a>
            </div>
            <div class="flex-1 bg-white p-6 flex flex-col justify-between">
              <div class="flex-1">
                <a href="https://sourcelevel.io" class="block mt-2">
                  <p class="text-xl font-semibold text-ptec-blue">
                    SourceLevel
                  </p>
                  <p class="mt-3 text-base text-gray-500">
                    George Guimarães has created SourceLevel to bring observability into software development by bringing metrics on process and quality.
                  </p>
                </a>
              </div>
              <div class="mt-6 flex items-center">
                <div class="flex-shrink-0">
                  <a href="https://twitter.com/georgeguimaraes">
                    <span class="sr-only">George Guimarães</span>
                    <img class="h-10 w-10 rounded-full" src={georgeguimaraes} alt="George Guimarães picture" />
                  </a>
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-gray-900">
                    <a href="https://twitter.com/georgeguimaraes" class="hover:underline">
                      George Guimarães
                    </a>
                  </p>
                  <div class="flex space-x-1 text-sm text-gray-500">
                    <a href="https://twitter.com/georgeguimaraes" class="hover:underline">
                      @georgeguimaraes
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div class="flex-shrink-0">
              <a href="https://www.marcelopark.com.br">
                <img class="h-48 w-full object-cover" src={marcelopark_image} alt="" />
              </a>
            </div>
            <div class="flex-1 bg-white p-6 flex flex-col justify-between">
              <div class="flex-1">
                <p class="text-sm font-medium text-indigo-600">
                </p>
                <a href="https://www.marcelopark.com.br" class="block mt-2">
                  <p class="text-xl font-semibold text-ptec-blue">
                    Marcelo Park
                  </p>
                  <p class="mt-3 text-base text-gray-500">
                    Marcelo does consulting and advisory services to cofounders and heads in search for company growth.
                  </p>
                </a>
              </div>
              <div class="mt-6 flex items-center">
                <div class="flex-shrink-0">
                  <a href="https://www.marcelopark.com.br/">
                    <span class="sr-only">Marcelo Park</span>
                    <img class="h-10 w-10 rounded-full" src={marcelopark} alt="Marcelo Park picture" />
                  </a>
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-gray-900">
                    <a href="https://www.marcelopark.com.br/" class="hover:underline">
                      Marcelo Park
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div class="flex-shrink-0">
              <a href="https://elixir-radar.com">
                <img class="h-48 w-full object-contain" src={elixir_radar_logo} alt="Elixir Radar Logo" />
              </a>
            </div>
            <div class="flex-1 bg-white p-6 flex flex-col justify-between">
              <div class="flex-1">
                <a href="https://elixir-radar.com" class="block mt-2">
                  <p class="text-xl font-semibold text-ptec-blue">
                    Elxir Radar
                  </p>
                  <p class="mt-3 text-base text-gray-500">
                    Hugo Baraúna turned Elixir Radar into a new company, to keep helping the Elixir ecosystem to move forward.
                  </p>
                </a>
              </div>
              <div class="mt-6 flex items-center">
                <div class="flex-shrink-0">
                  <a href="https://hugobarauna.com/">
                    <span class="sr-only">Hugo Baraúna</span>
                    <img class="h-10 w-10 rounded-full" src={hugobarauna} alt="Hugo Baraúna picture" />
                  </a>
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-gray-900">
                    <a href="https://hugobarauna.com/" class="hover:underline">
                      Hugo Baraúna
                    </a>
                  </p>
                  <div class="flex space-x-1 text-sm text-gray-500">
                    <a href="https://twitter.com/hugobarauna" class="hover:underline">
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
  )
}
