import { ChildProps } from "../types";
import { Navbar } from "./components";

export default function Homelayout({ children }: ChildProps) {
  return (
    <div className="h-full">
      <Navbar />
      <main className="h-full pt-40">{children}</main>
    </div>
  );
}
