import { FaLinkedin } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

const Contacts = () => {
  return (
    <div className="flex mt-20 gap-20 text-4xl">
      <a href="#" className="flex flex-col items-center">
        <FaLinkedin />
        <h2 className="text-sm text-gray-300">LinkedIn</h2>
      </a>
      <a href="#" className="flex flex-col items-center">
        <FiInstagram />
        <h2 className="text-sm text-gray-300">Instagram</h2>

      </a>
      <a href="#" className="flex flex-col items-center">
        <MdEmail />
        <h2 className="text-sm text-gray-300">Email</h2>

      </a>
    </div>
  );
};

export default Contacts;
