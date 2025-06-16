import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";

function ThreeColumnLayout({ children }) {
  return (
    <div className="flex w-2/3 mx-auto gap-2 h-screen">
      <LeftSide className="w-1/4" />
      <div className="border-l border-r border-slate-200 w-2/4">{children}</div>
      <RightSide className="w-1/4" />
    </div>
  );
}

export default ThreeColumnLayout;
