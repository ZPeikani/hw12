import { Home } from "../components/home";
import { El } from "../utils/el";
export function HomePage() {
  return El({
    element: "div",
    className: "bg-yellow-300",
    children: [Home()],
  });
}
