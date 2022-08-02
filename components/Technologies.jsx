import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";

const Technologies = () => {
  return (
    <div className="flex flex-row">
      <div
        className="flex flex-row items-center py-2 px-1 mr-5"
        style={{ backgroundColor: "#FAF9F6", borderRadius: 10 }}>
        <FaReact size={30} />
        <div className="pl-2 text-black">React Native</div>
      </div>
      <div
        className="flex flex-row items-center py-2 px-1 mr-5"
        style={{ backgroundColor: "#FAF9F6", borderRadius: 10 }}>
        <FaPython size={30} />
        <div className="pl-2 text-black">Flask</div>
      </div>
    </div>
  );
};

export default Technologies;
