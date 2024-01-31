import type { MetaFunction, LinksFunction } from "@remix-run/node";
import stylesheet from "~/tailwind.css";
export const meta: MetaFunction = () => {
  return [
    { title: "Remix Tutorial 2023" },
    { name: "description", content: "Welcome to my tutorial" },
  ];
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export default function Index() {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen px-4 md:px-8 ">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Top Trending Movies
          </h2>
        </div>
        <div className="grid gap-4 sm:Grid-cols-2 md:gap-6 lg:grid-cols-3 cl:grid-cols-4 xl:gap-8"></div>
      </div>
    </div>
  );
}
