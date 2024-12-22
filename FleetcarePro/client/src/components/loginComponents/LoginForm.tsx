import busesBgImg from "../../assets/images/login_images/main_schoolbuses.jpg"
import maintLogo1 from "../../assets/maintLogo1.svg"
// shadcn ui
import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"

export default function LoginForm() {
    return (
        <section className="flex justify-between">
            <aside className="flex flex-col w-full justify-center items-center">
                {/* Form Section */}
                <div className="max-w-1/2 w-80">
                    <h2 className="text-3xl font-bold mb-8">Login Form</h2>
                    <form className="flex flex-col w-full">
                        <label className="text-sm" htmlFor="username">Username</label>
                        <Input id="username" type="text"/>
                        <label className="mt-8 text-sm" htmlFor="pw-key">Password</label>
                        <Input id="pw-key" type="password"/>
                        <Button type="submit" className="w-fit mt-6">Submit</Button>
                    </form>
                </div>
            </aside>
            {/* background image section*/}
            <div
                className="bg-gradient-to-t from-emerald-600 to-emerald-400 h-screen w-2/3 relative overflow-hidden">
                <h1 className=" drop-shadow-sm text-white z-40 relative text-center mt-10 text-4xl font-bold">Fleet<span
                    className="font-light">Care</span> Pro
                </h1>
                <div className="relative z-40 flex flex-col items-center justify-center h-full">
                    <img id="bus-logo" className="drop-shadow-md max-w-52 min-w-52 mb-40" src={maintLogo1}
                         alt="fleet care pro logo"/>
                    <p className="text-white text-center">CCPS <span
                        className="font-light text-sm">Closed Beta &copy;2025</span></p>
                </div>
                <img
                    className="z-10 absolute object-cover bottom-0 top-0 left-0 right-0 h-full w-full opacity-50 blur-sm brightness-50"
                    src={busesBgImg}
                    alt="fleet of buses"/>
            </div>
        </section>
    )
}