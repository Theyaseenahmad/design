
const Account = () => {
  return (
    <div className="flex items-center justify-center font-rubik">
    <div className="w-[375px] h-[812px] bg-[#F7F8F9] [background-clip:padding-box] relative">
        <div className="w-full h-[68px] bg-white p-6">Account Settings</div>
        <div className="flex gap-4  justify-start p-6">
            <div className="rounded-full  size-14  relative">
                <img className="h-full w-full object-cover" src="/dp.png" alt="" />
                <img className="absolute size-6 -right-1 -bottom-1" src="/cam.svg" alt="" />
            </div>

            <div className="flex flex-col justify-start">
                <div>Marry Doe</div>
                <div>Marry@Gmail.com</div>
            </div>
        </div>
        <p className="w-full pl-6 pt-3 text-sm pb-6 border-[#CBCBCB] border-b-[1px] border-dashed opacity-[0.6]">Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
        </div>
        </div>
  )
}

export default Account