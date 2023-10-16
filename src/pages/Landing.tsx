import { useState } from "react";
import { searchCat } from "../api/phoneApi";
import { useGetContact } from "../hook/TanStack";
import { AiOutlineSearch } from "react-icons/ai";
import { MdCreateNewFolder } from "react-icons/md";
import { BiStreetView } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
const Landing = () => {
  const [state, setState] = useState<string>("");

  const { allContact } = useGetContact();

  let filteredContacts = [];

  if (allContact) {
    filteredContacts = allContact.filter((contact: any) =>
      contact.category.includes(state.toLowerCase())
    );
  }

  const validateInput = (e: any) => {
    const input = e.target;
    const inputValue = input.value;

    input.value = inputValue.replace(/\D/g, "");
  };
 
  return (
    <div className="bg-red-50 h-[100vh] small:w-full small:h-[100vh] ">
      <div className="flex items-center ml-2">
        <input
          type="text"
          placeholder="search category"
          className="w-[300px] h-[40px] rounded-md border pl-3 outline-none mt-3"
          onInput={validateInput}
          maxLength={11}
          onChange={(e: any) => {
            setState(e.target.value);
          }}
        />
        <div className="w-[40px] h-[40px] bg-red-300 flex justify-center items-center ml-1 rounded-sm">
          <AiOutlineSearch
            className="text-[30px] hover:cursor-pointer duration-300 transition-all"
            onClick={() => {
              searchCat(state);
              console.log(state)
            }}
          />
        </div>
      </div>

      <div className="flex flex-wrap">
        {filteredContacts?.map((props: any) => (
          <div
            className="w-[300px] h-[100px] border rounded-md bg-white shadow-sm p-2 flex items-center m-2"
            key={props.id}
          >
            <img
              src={props.avatar}
              alt=""
              className="w-[100px] h-[80px] object-cover rounded-sm"
            />
            <div className="ml-[5px]">
              <div className="font-bold  text-[18px]">{props.name}</div>
              <div className="font-medium text-[17px]">{props.phoneNumber}</div>
              <div className="font-light text-[14px]">{props.category}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex w-full h-[70px] bg-red-400 medium:hidden small:flex mt-[820px] rounded-b-xl items-center pl-2 justify-between pr-2">
        <Link to="/create-contact">
          <div className="text-[40px] hover:cursor-pointer transition-all duration-300">
            <MdCreateNewFolder />
          </div>
        </Link>
        <Link to="/">
          <div className="text-[40px] hover:cursor-pointer transition-all duration-300">
            <BiStreetView />
          </div>
        </Link>
        <Link to="/delete-contact">
          <div className="text-[40px] hover:cursor-pointer transition-all duration-300">
            <AiFillDelete />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
