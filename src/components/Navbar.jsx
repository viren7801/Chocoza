import Image from "next/image"
import logo from "../public/Images/logo.png"

export default function Navbar() {
    return(
        <div className="flex items-center justify-between p-2 bg-gray-100">
            <div className="flex-1">
                <h1>MenuBar</h1>
            </div>
            <div className="justify-center flex flex-1">
            <Image src={logo} alt="logo" className="w-48 h-48" />
            </div>
            <div className="justify-end flex flex-1">
                <h1>search</h1>
            </div>
        </div>
    )
}