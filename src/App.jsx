import { useEffect, useState } from "react";
import { AccordionDemo } from "./AccordionDemo";
// import first from "./assets/1.png";
// import second from "./assets/2.png";
// import third from "./assets/3.png";
import { Progress } from "./components/ui/progress";

import Seven from "./components/seven/Seven";
import Eleven from "./components/eleven/Eleven";
import Fourteen from "./components/fourteen/Fourteen";
import TwentyFour from "./components/twentyFour/TwentyFour";
import TweentySix from "./components/tweentySix/TweentySix";
import One from "./components/one/One";
import Five from "./components/five/Five";
import Five2 from "./components/five/Five2";
import Footer from "./components/footer/Footer";

function App() {
  const [progress, setProgress] = useState(13);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setProgress(35), 500);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => setProgress(65), 1500);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => setProgress(75), 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => setProgress(100), 2500);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => setLoading(false), 1100);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [progress]);
  // const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!loading ? (
        <div className=" bg-white flex flex-col container p-0">
          {/* <div className=" flex w-full flex-col justify-center   items-start ">
            <div className="justify-between items-center flex w-full py-3 px-3 gap-5  max-md:flex-wrap bg-[#D5615F]">
              <div className="items-stretch flex gap-2 my-auto">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/270d343ea6976354542dc8916585da10b97a0cc75a73606adc69ee6612f94d54?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&"
                  className="aspect-square object-contain object-center w-[25px] overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-white text-base font-semibold grow whitespace-nowrap self-start">
                  +34 684 083 197
                </div>
              </div>
              <div className="items-stretch self-stretch flex justify-between gap-2">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/58e5f009955411c8b3c45f4f13114414d1d0a40859da7d95b59944ec4e8a92b2?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&"
                  className="aspect-square object-contain object-center w-[29px] overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-white text-base font-semibold self-center grow whitespace-nowrap my-auto">
                  info@happyvecinos.com
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex  gap-5 p-4 ">
            <img
              loading="lazy"
              src={logo}
              className="aspect-[1.01] object-contain object-center w-[69px] overflow-hidden shrink-0 max-w-full"
            />
            <div className="flex justify-between w-full">
              <div className="items-center  flex justify-between gap-3 my-auto max-md:max-w-full max-md:flex-wrap">
                <div className=" flex gap-3 my-auto px-5 max-md:max-w-full max-md:flex-wrap">
                  <div className="text-lime-600 text-base font-semibold whitespace-nowrap">
                    Inicio
                  </div>
                  <div className="text-neutral-500 text-base">
                    ¿Cómo lo hacemos?
                  </div>
                  <div className="text-neutral-500 text-base">
                    Solicita presupuesto
                  </div>
                  <div className="text-neutral-500 text-base">
                    Quienes somos
                  </div>
                  <div className="text-neutral-500 text-base">
                    Preguntas Frecuentes
                  </div>
                  <div className="text-neutral-500 text-base whitespace-nowrap">
                    Contacto
                  </div>
                </div>
              </div>
              <div className="text-white text-lg font-medium whitespace-nowrap   rounded  px-14 py-5 max-md:px-5 bg-[#D5615F] ">
                CLIENTES
              </div>
            </div>
          </div>
          <div className="flex lg:hidden justify-between items-center py-4  gap-5 px-4 ">
            <img
              loading="lazy"
              src={logo}
              className="aspect-[1.01] object-contain object-center w-[69px] overflow-hidden shrink-0 max-w-full"
            />
            <AlignJustify
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
              className="cursor-pointer"
            />
          </div>
          {menuOpen && (
            <div className="flex  lg:hidden py-4  gap-5 px-4 ">
              <div className="flex flex-col justify-start items-start w-full">
                <div className="items-center  flex flex-col justify-center gap-3 my-auto  ">
                  <div className=" flex flex-col gap-3 my-auto space-y-1 ">
                    <div className="text-lime-600 text-base font-semibold whitespace-nowrap">
                      Inicio
                    </div>
                    <div className="text-neutral-500 text-base">
                      ¿Cómo lo hacemos?
                    </div>
                    <div className="text-neutral-500 text-base">
                      Solicita presupuesto
                    </div>
                    <div className="text-neutral-500 text-base">
                      Quienes somos
                    </div>
                    <div className="text-neutral-500 text-base">
                      Preguntas Frecuentes
                    </div>
                    <div className="text-neutral-500 text-base whitespace-nowrap pb-2">
                      Contacto
                    </div>
                  </div>
                </div>
                <div className="text-white text-lg font-medium whitespace-nowrap   rounded w-full text-center px-14 py-5 max-md:px-5 bg-[#D5615F] ">
                  CLIENTES
                </div>
              </div>
            </div>
          )} */}
          <One />
          <Seven />
          <Eleven />
          <Five />
          <Five2 />
          <Fourteen />
          <div className="px-10 mt-8">
            <p className="text-center text-3xl font-bold mb-16 mt-6">
              Preguntas frecuentes
            </p>
            <AccordionDemo />
          </div>
          <TwentyFour />
          <TweentySix />
          <Footer />
        </div>
      ) : (
        <div className="bg-white w-full h-screen flex flex-col items-center justify-center">
          <div className="w-[60%]">
            <Progress value={progress} className=" w-full" />
            <div className="flex justify-between">
              <p className="mt-2">intrando al club</p>
              <p className="mt-2">{progress}%</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
