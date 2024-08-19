import { MdEdit } from "react-icons/md";

export default function EditProfileSkeleton() {


    return (
        <>
                    <div className="col-span-9 lg:col-span-2 flex flex-col px-[20px] gap-5 h-fit py-[30px]">
                        <h1 className="bg-titleBg w-[200px] h-[50px] w-fit px-[20px] py-[10px] text-btn-primary text-[15px] md:text-[20px] uppercase font-semibold">
                           
                        </h1>
                        <form  className="grid grid-cols-1 md:grid-cols-2 w-full gap-5">
                            <div className=" bg-slate-50 flex w-full justify-between px-[20px] py-[20px]">
                                <input
                                    type="text"
                                    name="firstName"
                                   
                                    className="text-btn2 w-full bg-transparent outline-0 text-[15px] md:text-[20px]"
                                />
                            </div>
                            <div className=" bg-slate-50 w-full flex justify-between px-[20px] py-[20px]">
                                <input
                                    type="text"
                                    name="lastName"
                                  
                                    className="text-btn2 w-full bg-transparent outline-0 text-[15px] md:text-[20px]"
                                />
                            </div>
                            <div className=" bg-slate-50 flex w-full justify-between px-[20px] py-[20px]">
                                <input
                                    type="text"
                                    name="userName"
                                  
                                    className="text-btn2 w-full bg-transparent outline-0 text-[15px] md:text-[20px]"
                                />
                            </div>
                            <div className=" bg-slate-50 flex w-full justify-between px-[20px] py-[20px]">
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                   
                                    className="text-btn2 w-full bg-transparent outline-0 text-[15px] md:text-[20px]"
                                />
                            </div>
                            <div className=" bg-slate-50 flex w-full justify-between px-[20px] py-[20px]">
                                <input
                                    type="text"
                                    name="country"
                                   
                                    className="text-btn2 w-full bg-transparent outline-0 text-[15px] md:text-[20px]"
                                />
                            </div>
                            <div className=" bg-slate-50 flex w-full justify-between px-[20px] py-[20px]">
                                <input
                                    type="text"
                                    name="state"
                                   
                                    className="text-btn2 w-full bg-transparent outline-0 text-[15px] md:text-[20px]"
                                />
                            </div>
                            <div className=" bg-slate-50 flex w-full justify-between px-[20px] py-[20px]">
                                <input
                                    type="email"
                                    name="email"
                                   
                                    className="text-btn2 w-full bg-transparent outline-0 text-[15px] md:text-[20px]"
                                />
                            </div>
                            <div className="items-center flex  relative">
                                <div className="rounded-full h-[200px] w-[200px]">

                                </div>
                               
                                {/* <input
                                    type="file"
                                    name="user profile pic"
                                    className="hidden"
                                    id="user profile pic"
                                    disabled
                                /> */}
                                <label
                                    htmlFor="user profile pic"
                                    className="absolute text-[25px] rounded-full bottom-0"
                                >
                                    <MdEdit className="bg-secondaryBg border text-slate-500 rounded-full" />
                                </label>
                            </div>
                            <button  disabled className="text-light w-[200px] h-[50px] md:col-span-2 text-[15px] md:text-[20px] uppercase w-fit bg-slate-50 px-[30px] py-[15px] font-bold hover:bg-textTitle hover:text-light">
                              
                            </button>
                        </form>
                    </div>
            
        </>
    );
}
