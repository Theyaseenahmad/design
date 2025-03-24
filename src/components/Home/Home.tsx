
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center font-rubik">
    <div className="w-[375px] h-[812px] bg-[#F7F8F9] [background-clip:padding-box] relative">
      <h1 className="w-[231px] h-[33px] absolute top-[549px] left-[20px] text-[#1D2226]   text-left text-2xl font-bold">Welcome to PopX</h1>
      <p className="top-[592px] left-[20px] w-[232px] h-[48px] absolute text-[#1D2226]  text-left opacity-[0.6]">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

      <button className="absolute top-[669px] text-white left-[20px] w-[335px] h-[46px] bg-[#6C25FF] rounded-[6px] transition-opacity duration-300 ease-out opacity-90 hover:opacity-100"  onClick={() => navigate("/signup")}>Create Account</button>


      <button className="absolute top-[725px]  left-[20px] w-[335px] h-[46px] bg-[#6C25FF4B] rounded-[6px] text-[#1D2226]  transition-opacity duration-300 ease-out opacity-80 hover:opacity-100" onClick={() => navigate("/login")}>Already Registered? Login</button>
    </div>
    </div>
  )
}

export default Home

