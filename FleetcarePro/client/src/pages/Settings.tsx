import { Button } from "@/components/ui/button";
import { useApi } from "@/components/ApiContext";
import { useNavigate } from "react-router-dom";

export default function Settings() {
  const navigate = useNavigate();
  const { logout } = useApi();
  const logoutHandler = async () => {
    await logout();
    navigate(`/login`);
    alert("Logout successful");
  };

  return (
    <section className="relative md:ml-64">
      <aside>
        <h1 className="pl-8 py-5 text-2xl font font-bold text-gray-500 border-b-2">
          Settings
        </h1>
        <div>
          <Button onClick={logoutHandler}>Logout</Button>
        </div>
        <input
          className="border rounded-xl mt-8 border-emerald-600"
          type="text"
        />
      </aside>
    </section>
  );
}
