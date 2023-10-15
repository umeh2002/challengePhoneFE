import { AiTwotoneCamera } from "react-icons/ai";
import pix from "../../assets/react.svg";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { createContact } from "../../api/phoneApi";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(pix);
  const [avatar, setAvatar] = useState("");
  const model = yup.object({
    category: yup.string().required(),
    name: yup.string().required(),
    phoneNumber: yup.string().required(),
  });

  const handleImage = (e: any) => {
    try {
      const file = e.target.files[0];
      const realImage = URL.createObjectURL(file);
      setAvatar(file);
      setImage(realImage);
    } catch (error) {
      console.log(error);
    }
  };

  const {
    reset,
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({
    resolver: yupResolver(model),
  });

  const onSubmit = handleSubmit(async (data: any) => {
    const { name, category, phoneNumber } = data;
    const formData = new FormData();

    formData.append("name", name);
    formData.append("category", category);
    formData.append("phoneNumber", phoneNumber);
    formData.append("avatar", avatar);

    createContact(formData).then((res) => {
      if (res) {
        Swal.fire({
          icon: "success",
          title: "Created Successfully",
          text: "you have added a contact to your list",
          timerProgressBar: true,
          timer: 5000,
        });
        navigate("/");
      } else {
        Swal.fire({
          icon: "error",
          title: "not created",
          timerProgressBar: true,
          timer: 5000,
        });
        navigate("/create-contact");
      }
    });
    reset();
  });
  return (
    <div className="w-full h-[100vh] flex justify-center items-center bg-red-50">
      <form
        onSubmit={onSubmit}
        className="w-[600px] h-[350px] bg-white shadow-md rounded-md flex  small:w-full small:h-full small:flex-col"
      >
        <div className="w-[50%] h-full p-[5px] relative small:w-full">
          <img
            src={image}
            className="w-full h-full objsct-cover border rounded-md absolute top-0 left-0 small:w-full small:p-[10px]"
          />
          <input
            type="file"
            id="pix"
            className="hidden"
            onChange={handleImage}
          />
          <label
            htmlFor="pix"
            className="absolute bottom-[5px] right-[5px] hover:cursor-pointer transition-all duration-300 w-50px h-50px rounded-[50px] bg-red-100 flex justify-center items-center"
          >
            <AiTwotoneCamera className="text-[20px]" />
          </label>
        </div>
        <div className="w-[50%] h-full p-[10px] small:w-full small:mt-[30px]">
          <div className="mb-2">
            <div className="mb-1 font-semibold">Name</div>
            <input
              type="text"
              placeholder="enter contact name"
              className="w-full h-[40px] rounded-sm outline-none border pl-[10px]"
              {...register("name")}
            />
            {errors.name && (
              <div className="text-[12px] text-red-500 flex justify-end">
                please input name
              </div>
            )}
          </div>

          <div className="mb-2">
            <div className="mb-1 font-semibold">phone number</div>
            <input
              type="text"
              placeholder="enter contact number"
              className="w-full h-[40px] rounded-sm outline-none border pl-[10px]"
              {...register("phoneNumber")}
            />
            {errors.phoneNumber && (
              <div className="text-[12px] text-red-500 flex justify-end">
                please input contact
              </div>
            )}
          </div>
          <div className="mb-2">
            <div className="mb-1 font-semibold">describe contact</div>
            <select
              className="w-full h-[40px] border outline-none rounded-sm"
              {...register("category")}
            >
              <option>choose</option>
              <option value="family">family</option>
              <option value="friend">friend</option>
              <option value="loved">loved</option>
            </select>
          </div>
          <button
            className="w-full h-[40px] bg-purple-500 font-bold mt-2 text-[17px] hover:cursor-pointer duration-300 transition-all rounded-md "
            type="submit"
          >
            Save
          </button>
          <Link to="/">
            <span className="text-[20px] font-semibold hover:cursor-pointer duration-300 transition-all mt-4 medium:hidden small:flex">
              Go back
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Create;
