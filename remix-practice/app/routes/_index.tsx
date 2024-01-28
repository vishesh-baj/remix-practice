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
  return <div>Hello from the index</div>;
}
