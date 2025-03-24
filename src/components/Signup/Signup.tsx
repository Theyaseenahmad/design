import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  return (
    
    <div className="flex items-center justify-center font-rubik">
      <div className="w-[375px] h-[812px] bg-[#F7F8F9] [background-clip:padding-box] relative">
        <h1 className="font-bold absolute top-[40px] left-[20px] text-[#1D2226] text-2xl w-[188px] h-[69px]">
          Create your PopX account
        </h1>

        <div
          className="top-[140px] absolute
        left-[20px]"
        >
          <label
            className="absolute -top-[10px] left-[8px] bg-[#F7F8F9] w-[100px] h-[15px] text-left text-[13px] leading-[17px] font-normal font-rubik text-[#6C25FF]"
            htmlFor="fullname"
          >
            Full Name<span className="text-[#DD4A3D]">*</span>
          </label>
          <input
            className="border-[1px] w-[335px] px-3 py-3 h-[40px] border-[#CBCBCB] rounded-[6px] top-[204px] "
            placeholder="Marry Doe"
            name="fullname"
            type="text"
          />
        </div>

        <div
          className="top-[209px] absolute
        left-[20px]"
        >
          <label
            className="absolute -top-[10px] left-[8px] bg-[#F7F8F9] w-[100px] h-[15px] text-left text-[13px] leading-[17px] font-normal font-rubik text-[#6C25FF]"
            htmlFor="phone"
          >
            Phone number<span className="text-[#DD4A3D]">*</span>
          </label>
          <input
            className="border-[1px] w-[335px] px-3 py-3 h-[40px] border-[#CBCBCB] rounded-[6px] top-[204px] "
            placeholder="Enter Phone Number"
            name="phone"
            type="text"
          />
        </div>

        
        <div
          className="top-[278px] absolute
        left-[20px]"
        >
          <label
            className="absolute -top-[10px] left-[8px] bg-[#F7F8F9] w-[100px] h-[15px] text-left text-[13px] leading-[17px] font-normal font-rubik text-[#6C25FF]"
            htmlFor="email"
          >
            Email address<span className="text-[#DD4A3D]">*</span>
          </label>
          <input
            className="border-[1px] w-[335px] px-3 py-3 h-[40px] border-[#CBCBCB] rounded-[6px] top-[204px] "
            placeholder="Enter Email address"
            name="email"
            type="text"
          />
        </div>


        
        <div className="top-[347px] absolute 
left-[20px]">
        <label className="absolute -top-[10px] left-[8px] bg-[#F7F8F9] w-[85px] h-[15px] text-left text-[13px] leading-[17px] font-normal font-rubik text-[#6C25FF]" htmlFor="password">Password<span className="text-[#DD4A3D]">*</span></label>
        <input className="border-[1px] w-[335px] h-[40px] px-3 py-3 border-[#CBCBCB] rounded-[6px] " placeholder="Enter password" name="password" type="text" />
        </div>




        
        <div
          className="top-[416px] absolute
        left-[20px]"
        >
          <label
            className="absolute -top-[10px] left-[8px] bg-[#F7F8F9] w-[100px] h-[15px] text-left text-[13px] leading-[17px] font-normal font-rubik text-[#6C25FF]"
            htmlFor="companyname"
          >
            Company name<span className="text-[#DD4A3D]">*</span>
          </label>
          <input
            className="border-[1px] w-[335px] px-3 py-3 h-[40px] border-[#CBCBCB] rounded-[6px] top-[204px] "
            placeholder="Enter Company name"
            name="companyname"
            type="text"
          />
        </div>

        <p className="top-[474px] left-[20px] absolute">Are you an Agency?<span className="text-[#DD4A3D]">*</span></p>

      <label className="top-[502px] absolute left-[20px] ">
       <input className="text-[#6C25FF] scale-180 size-[12px] h-[12px] mr-2 accent-[#6C25FF] p-2" type="radio" name="choice" value="yes" title="yes" /> Yes
      </label>
      <label className="top-[502px] absolute  left-[100px] ">
        <input className="size-[12px] scale-180 mr-2 accent-[#6C25FF]" type="radio" name="choice" value="no" title="no" /> No
      </label>

        <button className="absolute top-[736px] text-white left-[20px] w-[335px] h-[46px] bg-[#6C25FF] rounded-[6px] transition-opacity duration-300 ease-out opacity-90 hover:opacity-100" onClick={() => navigate("/account")}>
          Create Account
        </button>
      </div>
    </div>
  );
};

export default Signup;
