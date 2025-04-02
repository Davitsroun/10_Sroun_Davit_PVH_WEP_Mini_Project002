import Logo from "@/components/logo";
import "../globals.css";
import Sidebarecom from "./_components/Sidebarecom";
import Header from "./_components/Header1";
import Header2 from "./_components/Header2";
import NewTaskPopup from "./_components/AsideAddTask";
export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <div className="grid grid-cols-6 h-screen  w-full  overflow-scroll ">
        <></>
        <div className="col-span-1 pl-3  ">
          <div className="pt-25 ml-10 pb-10 ">
            <Logo />
          </div>
          <Sidebarecom />
        </div>

        <div className="col-span-5  grid grid-rows-10 ">
          <></>
          <div className="row-span-1 ">
            <Header />
          </div>
          <></>
          <div className="row-span-1 ">
            <Header2 />
          </div>
          <body>
            <div className="row-span-8  overflow-auto relative">
              {children}
            </div>
          </body>
          <div className="absolute bottom-5 right-5">
              <NewTaskPopup />
            </div>


        </div>

      </div>
    </html>
  );
}