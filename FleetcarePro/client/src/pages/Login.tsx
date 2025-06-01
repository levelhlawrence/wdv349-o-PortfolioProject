import { useState } from "react";
// importing components
import busesBgImg from "../assets/images/login_images/main_schoolbuses.jpg";
import maintLogo1 from "../assets/maintLogo1.svg";
// shadcn ui
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { useApi } from "@/components/ApiContext";

export default function LoginForm() {
  const { loginUser } = useApi();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!loginData.email || !loginData.password) {
      alert("Both fields are required.");
      return;
    }

    loginUser(loginData);
    console.log("Login Data Submitted:", loginData);
  };

  return (
    <section className="flex justify-between absolute right-0 left-0 z-50 top-0 bg-white">
      <aside className="flex flex-col left-0 right-0 mx-auto w-fit bottom-1/2 top-1/2 justify-center items-center z-50 absolute md:relative shadow-lg md:shadow-none md:w-full">
        {/* Form Section */}
        <div className="max-w-1/2 bg-white rounded-lg shadow-md md:shadow-none p-10">
          <h2 className="text-3xl font-bold mb-8">Login</h2>
          <form onChange={handleInputChange} className="flex flex-col w-full">
            <label className="text-sm" htmlFor="email">
              Email
            </label>
            <Input id="email" type="email" name="email" required />
            <label className="mt-8 text-sm" htmlFor="password">
              Password
            </label>
            <Input id="password" type="password" name="password" required />
            <Button onClick={handleSubmit} type="submit" className="w-fit mt-6">
              Submit
            </Button>
          </form>
        </div>
      </aside>
      {/* background image section*/}
      <div className="bg-gradient-to-t from-emerald-600 to-emerald-400 h-screen w-full md:relative z-10 flex flex-col justify-between overflow-hidden">
        <div className=" flex flex-row-reverse justify-center items-center mt-10 md:flex-col md:justify-between md:h-[60%]">
          <h1 className=" drop-shadow-sm text-white z-20 relative text-center md:mt-10 text-4xl font-bold ">
            Fleet<span className="font-light">Care</span> Pro
          </h1>
          <div className="z-20 relative ">
            <img
              id="bus-logo"
              className="drop-shadow-md w-20 mr-4 md:w-64 "
              src={maintLogo1}
              alt="fleet care pro logo"
            />
          </div>
        </div>
        <p className="text-white text-center z-20 mb-10">
          CCPS{" "}
          <span className="font-light text-sm">Closed Beta &copy;2025</span>
        </p>
        <div>
          <img
            className="z-10 absolute blur-[1px] object-cover bottom-0 top-0 left-0 right-0 h-full w-full brightness-50"
            src={busesBgImg}
            alt="fleet of buses"
          />
        </div>
      </div>
    </section>
  );
}
