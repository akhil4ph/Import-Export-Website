import { useNavigate } from "react-router-dom";
import { postService } from "../../service/axios";
import { Toaster, toast } from "react-hot-toast";

export default function Header() {

  const navigate = useNavigate();
  const signout = async () => {
    const apiResponse = await postService("/signout");

    if (!apiResponse.ok) {
      console.log(apiResponse.message)
      toast.error("Signout Failed");
      return
    }

    toast.success("Signout");
    localStorage.clear();

    setTimeout(() => {
      navigate("/")
    }, 1000)
  }

  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between">
      <Toaster />
      <h2 className="font-semibold text-gray-700">
        Import Export Admin
      </h2>

      <button
        onClick={signout}
        className="text-red-600 font-medium"
      >
        Logout
      </button>
    </header>
  );
}
