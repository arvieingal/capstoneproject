import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen w-screen bg-background">
      <div className="static">
        <img
          src="./images/top-left-image.png"
          alt="Small Image"
          className="absolute w-[60px] h-[60px] md:w-[90px] md:h-[90px] mt-3 ml-4 xl:w-[100px] xl:h-[100px] lg:mt-6 lg:ml-8"
        />
        <img
          src="./images/top-left-image-big.png"
          alt="Big Image"
          className="absolute w-[100px] h-[100px] md:w-[200px] md:h-[200px] mt-[36px] ml-4 xl:w-[240px] xl:h-[240px] xl:mt-[72px] xl:ml-6"
        />
        <img
          src="./images/right-bottom-image.png"
          alt=""
          className="absolute w-[160px] h-[110px] md:w-[300px] md:h-[210px] xl:w-[358.66px] xl:h-[240px] bottom-0 right-0"
        />
      </div>

      <div className="flex flex-col justify-center items-center h-screen">
        <div className="flex flex-row justify-center text-[40px] md:text-[80px] xl:text-[110px] mb-5 tracking-widest">
          <div className="">W</div>
          <div className="">E</div>
          <div className="">L</div>
          <div className="">C</div>
          <div className="">O</div>
          <div className="">M</div>
          <div className="">E</div>
        </div>
        <div className="text-[12px] md:text-[20px] xl:text-[30px] flex justify-center items-center">
          <p className="w-1/2 text-[#07565A] text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className="flex flex-col justify-center items-center mt-10">
          <h1 className="text-[20px] md:text-[35px] xl:text-[50px] tracking-wide font-medium">
            MyCommunityHQ
          </h1>
          <div className="flex flex-col items-center text-[16px] md:text-[22px]">
            <a href="/dashboard/login">
              <button className="bg-[#D4F9FE] text-[#07565A] border-4 border-[#AAF8FD] rounded-2xl w-24 md:w-32 xl:w-48 mt-4">
                Login
              </button>
            </a>
            <a href="/dashboard/register">
              <button className="bg-[#AAF8FD] text-[#07565A] rounded-2xl w-24 md:w-32 xl:w-48 mt-5">
                Sign up
              </button>
            </a>
          </div>
        </div>
      </div>
    </main>
    
  );
}

  {/* <div className="flex flex-row justify-center text-[40px] xl:text-[110px] h-2/6 xl:h-1/2 tracking-widest">
    <div className="pt-[38%] xl:pt-[16%]">W</div>
    <div className="pt-[36%] xl:pt-[14%]">E</div>
    <div className="pt-[39%] xl:pt-[17%]">L</div>
    <div className="pt-[38%] xl:pt-[16%]">C</div>
    <div className="pt-[37%] xl:pt-[15%]">O</div>
    <div className="pt-[39%] xl:pt-[17%]">M</div>
    <div className="pt-[39%] xl:pt-[17%]">E</div>
  </div>
  <div className="text-[12px] xl:text-[30px] flex justify-center items-center">
    <p className="flex justify-center w-1/2 text-[#07565A] text-justify">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua
    </p>
  </div>
  <div className="flex flex-col justify-center text-center mt-[10%] xl:mt-[5%]">
    <h1 className="text-[20px] xl:text-[50px] tracking-wide font-medium">MyCommunityHQ</h1>
    <div className="flex flex-col items-center justify-center mt-8 xl:mt-10 text-[16px] xl:text-[22px]">
      <button className="bg-[#D4F9FE] text-[#07565A] border-4 border-[#AAF8FD] rounded-2xl flex justify-center w-24 xl:w-48 xl:py-0.5">
        Login
      </button>
      <button className="bg-[#AAF8FD] text-[#07565A] rounded-2xl flex justify-center w-24 xl:w-48 xl:py-0.5 mt-3 xl:mt-6">
        Sign up
      </button>
    </div>
  </div> */}  