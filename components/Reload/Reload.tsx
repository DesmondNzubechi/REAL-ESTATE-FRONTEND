import { IoReloadCircle } from "react-icons/io5";

export const ReloadPage = ({reload} : {reload : () => void}) => {

    return <div className="h-[50vh] w-full flex flex-col justify-center items-center">
        <div className="flex flex-col gap-5 items-center text-center ">
            <p className="text-[20px] capitalize font-bold">Failed to load page</p>
            <button onClick={reload} className="flex bg-btn-primary px-[20px] rounded text-white py-[10px] gap-5 items-center">Reload page <IoReloadCircle className="text-[30px] "/></button>
</div>
    </div>
}