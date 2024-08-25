export const PropertySkeleton = () => {

   

    const featuredProps = [1, 1, 1, 1, 1, 1, 1]

    return <div className="py-[100px] px-[30px] ">
        <div className="grid animate-skeleton-loading grid-cols-1 gap-[50px] md:grid-cols-2 lg:grid-cols-3">
            {
                featuredProps.map((property: number, index: number) => {
                    return <div  key={index} className="border">
                    <div className="relative">
                            <div className="h-[300px] w-full bg-slate-200"></div>
                            <h1 className="bg-whiteTp h-[50px] w-[150px] text-light font-medium px-[20px] py-[5px] absolute top-[30px] right-[30px] uppercase "></h1>
                            <div className=" absolute bottom-0  flex justify-between w-full py-[10px] px-[20px] ">
                                <p className="flex items-center text-[12px] md:text-[15px] lg:text-[20px] bg-whiteTp px-[20px] h-[30px] w-[100px] gap-3 rounded text-secondaryText "> </p>
                                <div className="flex items-center gap-[10px] ">
                                    <p className="flex items-center text-textTitle items-center font-bold bg-whiteTp p-2 rounded-full h-[40px] w-[40px]"></p>
                                      <p className="flex items-center text-textTitle items-center font-bold bg-whiteTp p-2 h-[40px] w-[40px] px-[10px] rounded-full "></p>
                                </div>
                            </div>
</div>
                    <div className="flex flex-col gap-[10px] px-[20px] py-[20px] ">
                            <h1 className="text-btn-primary bg-slate-200 rounded font-medium text-[12px] md:text-[15px] lg:text-[20px] w-[150px] h-[30px] "></h1>
                            <h1 className="text-btn-primary bg-slate-200 rounded font-medium text-[12px] md:text-[15px] lg:text-[20px] w-[150px] h-[30px] "></h1>
                        <div className=" gap-2 grid grid-cols-2 md:grid-col-3">
                                <h1 className="text-btn-primary bg-slate-200 rounded font-medium text-[12px] md:text-[15px] lg:text-[20px] w-[100px] h-[30px] "></h1>
                                <h1 className="text-btn-primary bg-slate-200 rounded font-medium text-[12px] md:text-[15px] lg:text-[20px] w-[100px] h-[30px] "></h1>
                                <h1 className="text-btn-primary bg-slate-200 rounded font-medium text-[12px] md:text-[15px] lg:text-[20px] w-[100px] h-[30px] "></h1>
                            </div>
                    </div>  
                </div>
                })
}
        </div>


    </div>
}