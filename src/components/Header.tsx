import { Logo } from "./Logo"

export function Header (){
    return <>
    <header className="w-full flow  bg-gray-700 border-b border-gray-600">
        <div className="py-5 flex items-center justify-center">
            <Logo/>
         </div>
    </header>
    </>
}