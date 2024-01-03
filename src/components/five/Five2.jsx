import { FaQuoteLeft } from "react-icons/fa6";
export default function Five2() {
  return (
    <section className="py-20 px-10 lg:px-0">
      <div className="min-h-80 lg:relative bg-[#0e234c]">
        <div className="md:pl-[50%] p-5 pt-[5%] flex items-center justify-center">
          <div>
            {/* <img className="w-10 fill-white" src={second} alt="" /> */}
            <FaQuoteLeft className="text-white w-12 h-12" />
            <h2 className="text-white font-bold text-3xl">
              Con HappyVecinos, finalmente todo tiene sentido. La gestión de la
              comunidad se ha vuelto más sencilla y puedo descansar tranquilo
              sabiendo que todo está bajo control.
            </h2>
            <p className="text-white mt-4">Carlos Ruiz,</p>
            <p className="text-[#92c5fd] font-medium">
              Presidente de la Comunidad Jardines del Valle
            </p>
          </div>
        </div>
        {/* img  */}
        <div className="h-96 lg:w-80 lg:absolute -top-7 left-[15%]">
          <img
            className="w-full h-full object-cover md:rounded-md"
            src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
