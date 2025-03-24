import { useNavigate } from "react-router-dom"

// border: 1px solid #CBCBCB;
const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center font-rubik">
    <div className="w-[375px] h-[812px] bg-[#F7F8F9] [background-clip:padding-box] relative">
        <h1 className="font-bold absolute top-[40px] left-[20px] text-[#1D2226] text-2xl w-[188px] h-[69px]">Signin to your PopX account</h1>

        
        <p className="absolute text-[#1D2226] top-[123px] left-[20px] font-normal opacity-[0.6] w-[232px] h-[48px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

        <div className="top-[204px] absolute
left-[20px]">
            <label className="absolute -top-[10px] left-[8px] bg-white w-[85px] h-[15px] text-left text-[13px] leading-[17px] font-normal font-rubik text-[#6C25FF]"
 htmlFor="email">Email address</label>
      <input className="border-[1px] w-[335px] px-3 py-3 h-[40px] border-[#CBCBCB] rounded-[6px] top-[204px] " placeholder="Enter email address" name="email" type="text" />
        </div>
        
        <div className="top-[267px] absolute 
left-[20px]">
        <label className="absolute -top-[10px] left-[8px] bg-white w-[85px] h-[15px] text-left text-[13px] leading-[17px] font-normal font-rubik text-[#6C25FF]" htmlFor="password">Password</label>
        <input className="border-[1px] w-[335px] h-[40px] px-3 py-3 border-[#CBCBCB] rounded-[6px] " placeholder="Enter password" name="password" type="text" />
        </div>

        <button className="absolute w-[335px] h-[46px] top-[321px] left-[20px] rounded-[6px] text-white bg-[#CBCBCB] transition-opacity duration-300 ease-out opacity-90 hover:opacity-100" onClick={() => navigate("/account")}>Login</button>
    </div>
    </div>
  )
}

export default Login