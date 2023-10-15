import { AiFillDelete } from "react-icons/ai";
import { deleteContact } from "../../api/phoneApi";
import { useGetContact } from "../../hook/TanStack";
import { useNavigate, Link } from "react-router-dom";


const Delete = () => {
  const navigate = useNavigate();
  const { allContact } = useGetContact();
  return (
    <div className="bg-red-50 h-[100vh] p-3">
        <Link to="/">
            <span className="text-[20px] font-semibold hover:cursor-pointer duration-300 transition-all mt-4 medium:hidden small:flex">
              Go back
            </span>
          </Link>
      <div className="flex flex-wrap">
        {allContact?.map((props: any) => (
          <div
            className="w-[300px] h-[100px] border rounded-md bg-white shadow-sm p-2 items-center m-2"
            key={props.id}
          >
            <div className="flex items-center">
              <img
                src={props.avatar}
                alt=""
                className="w-[100px] h-[80px] object-cover rounded-sm"
              />
              <div className="ml-[5px]">
                <div className="font-bold  text-[18px]">{props.name}</div>
                <div className="font-medium text-[17px]">
                  {props.phoneNumber}
                </div>
                <div className="font-light text-[14px]">{props.category}</div>
              </div>

              <div className="text-[20px] flex justify-end mt-[60px] ml-[20px] hover:cursor-pointer duration-300 transition-all">
                <AiFillDelete
                onClick={()=>{
                  deleteContact(props.id)
                  navigate("/")
                }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Delete;
