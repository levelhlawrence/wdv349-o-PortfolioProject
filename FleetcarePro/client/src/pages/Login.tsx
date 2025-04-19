// importing components
import busesBgImg from "../assets/images/login_images/main_schoolbuses.jpg";
import maintLogo1 from "../assets/maintLogo1.svg";
// shadcn ui
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const formDataHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    if (id === "username") {
      setFormData((prevState) => ({
        ...prevState,
        username: value,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        password: value,
      }));
    }
  };

  const submitHandler = (e) => {
    const pwValidation = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (formData.username.length < 3) {
      alert("Username must be at least 3 characters long.");
      return;
    } else if (formData.password.match(pwValidation) === null) {
      alert(
        "Password must be at least 8 characters long and contain at least one letter and one number."
      );
      return;
    }

    e.preventDefault();
    console.log("formData:", formData);
  };

  return (
    <section className="flex justify-between">
      <aside className="flex flex-col left-0 right-0 mx-auto bottom-1/2 top-1/2 justify-center items-center z-50 absolute md:relative shadow-lg md:shadow-none md:w-full">
        {/* Form Section */}
        <div className="max-w-1/2 bg-white rounded-lg shadow-md md:shadow-none p-10 md:w-[20rem]">
          <h2 className="text-3xl font-bold mb-8">Login Form</h2>
          <form id="login-form" className="flex flex-col w-">
            <label className="text-sm" htmlFor="username">
              Username
            </label>
            <Input
              required
              onChange={formDataHandler}
              id="username"
              type="text"
            />
            <label className="mt-8 text-sm" htmlFor="pw-key">
              Password
            </label>
            <Input
              onChange={formDataHandler}
              id="pw-key"
              type="password"
              required
            />
            <Button
              onClick={submitHandler}
              type="submit"
              className="w-fit mt-6"
            >
              Submit
            </Button>
          </form>
        </div>
      </aside>
      {/* background image section*/}
      <aside className="bg-gradient-to-t from-emerald-600 to-emerald-400 h-screen w-full md:relative z-10 flex flex-col justify-between overflow-hidden ">
        <div className=" flex flex-row-reverse justify-center items-center mt-10">
          <h1 className=" drop-shadow-sm text-white z-20 relative text-center md:mt-10 text-4xl font-bold">
            Fleet<span className="font-light">Care</span> Pro
          </h1>
          <div className="z-20 relative md:absolute md:h-full md:w-full md:top-0 md:flex md:justify-center">
            <img
              id="bus-logo"
              className="drop-shadow-md w-20 md:w-[16rem] mr-4"
              src={maintLogo1}
              alt="fleet care pro logo"
            />
          </div>
        </div>
        <p className="text-white text-center z-20 mb-10">
          CCPS
          <span className="font-light text-sm">Closed Beta &copy;2025</span>
        </p>
        <img
          className="z-10 absolute blur-[1px] object-cover bottom-0 top-0 left-0 right-0 h-full w-full opacity-50 brightness-50"
          src={busesBgImg}
          alt="fleet of buses"
        />
      </aside>
    </section>
  );
}
