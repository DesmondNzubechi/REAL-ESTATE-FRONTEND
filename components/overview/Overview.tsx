import Link from "next/link"

export const Overview = () => {

    return <>
        <div className="bg-primaryBg w-full  py-[100px] px-[40px] ">
            <div className="bg-secondaryBg shadow-xl w-full grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 border py-[50px] md:py-[100px] p-[20px] ">
                <select name="" id="" className=" px-[25px] outline-0 text-center shadow font-medium text-[15px] px-[20px] md:text-[25px] py-[20px] ">
                    <option>Choose Location</option>
                    <option value="Enugu">Enugu</option>
                    <option value="Enugu">Enugu</option>
                    <option value="Enugu">Enugu</option>
                    <option value="Enugu">Enugu</option>
                </select>
                <select name="" id="" className=" px-[25px] outline-0 text-center shadow font-medium text-[15px] px-[20px] md:text-[25px] py-[20px] ">
                    <option>Choose Location</option>
                    <option value="Enugu">Enugu</option>
                    <option value="Enugu">Enugu</option>
                    <option value="Enugu">Enugu</option>
                    <option value="Enugu">Enugu</option>
                </select>
                <select name="" id="" className=" px-[25px] outline-0 text-center shadow font-medium text-[15px] px-[20px] md:text-[25px] py-[20px] ">
                    <option>Choose Location</option>
                    <option value="Enugu">Enugu</option>
                    <option value="Enugu">Enugu</option>
                    <option value="Enugu">Enugu</option>
                    <option value="Enugu">Enugu</option>
                </select>
                <Link href='' className="bg-btn-primary text-[15px] md:text-[20px] text-light hover:text-[#FFFFFF] hover:bg-textTitle px-[25px] text-center w-full py-[20px] ">Search</Link>
</div>
        </div>
    </>
}