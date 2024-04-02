import { Task } from "../components/tasks";
import { El } from "../utils/el";

export function TaskPage() {
  return El({
    element: "div",
    className: "bg-gray-500",
    children: [Task()],
  });
}
