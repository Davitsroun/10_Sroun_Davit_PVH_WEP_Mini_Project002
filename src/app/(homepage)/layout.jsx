import Logo from "@/components/logo";
import "../globals.css";
import Sidebarecom from "./_components/Sidebarecom";
import Header from "./_components/Header1";
import Header2 from "./_components/Header2";

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <div className="grid grid-cols-6 h-screen w-full ">
          <div className="col-span-1 pl-3">
            <div className="pt-25 ml-10 pb-10">
              <Logo />
            </div>
            <Sidebarecom />
          </div>

          <div className="col-span-5 grid grid-rows-10 h-full">
            <div className="row-span-1">
              <Header />
            </div>
            <div className="row-span-1">
              <Header2 />
            </div>

            <div className="row-span-8 flex flex-col overflow-hidden">
              <div className="flex-grow overflow-scroll">
                {children}
              </div>
            </div>
           
          </div>
        </div>
      </body>
    </html>
  );
}
