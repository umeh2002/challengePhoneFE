import { MdCreateNewFolder } from "react-icons/md";
import { BiStreetView } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const Sider = () => {
  return (
    <div className="w-[200px] h-[100vh] bg-red-400 text-black p-[10px] fixed small:hidden">
      <div className="text-[30px] hover:text-white hover:cursor-pointer duration-300 transition-all">
        Logo
      </div>
      <br />
      <br />
      <br />
      <br />
      <Link to="/">
        <div className="flex mb-3 items-center hover:cursor-pointer duration-300 transition-all hover:px-[8px] hover:py-[5px] hover:bg-white hover:rounded-md">
          <div className="text-[20px] mr-1">
            <BiStreetView />
          </div>
          <div className="text-[17px]">View contact</div>
        </div>
      </Link>
      <Link to="/create-contact">
        <div className="flex mb-3 items-center hover:cursor-pointer duration-300 transition-all hover:px-[8px] hover:py-[5px] hover:bg-white hover:rounded-md">
          <div className="text-[20px]  mr-1">
            <MdCreateNewFolder />
          </div>
          <div className="text-[17px]">Create contact</div>
        </div>
      </Link>

      <Link to="/delete-contact">
        <div className="flex mb-3 items-center hover:cursor-pointer duration-300 transition-all hover:px-[8px] hover:py-[5px] hover:bg-white hover:rounded-md">
          <div className="text-[20px] mr-1">
            <AiFillDelete />
          </div>
          <div className="text-[17px]">Delete contact</div>
        </div>
      </Link>
    </div>
  );
};

export default Sider;
