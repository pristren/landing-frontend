import second from "../../assets/img/bg.jpg";
const Contact = () => {
  return (
    <section className="my-28">
      {/* contact info  */}
      <div className="text-center">
        <h2 className="font-semibold text-3xl">Contacta con nosotros</h2>
        <h5>| info@happyvecinos.com|</h5>
      </div>
      {/* contact form  */}
      <div
        style={{
          backgroundImage: `url(${second})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right top",
          backgroundSize: "cover",
        }}
        className="flex justify-center items-center mt-8 max-w-3xl mx-auto p-20 opacity-80"
      >
        <form
          //   style={{
          //     backgroundImage:
          //       "url(https://img.freepik.com/free-photo/view-electronic-product-balancing-podium_23-2150141330.jpg?size=626&ext=jpg&ga=GA1.1.374244276.1703126606&semt=ais)",
          //     backgroundRepeat: "no-repeat",
          //     backgroundSize: "cover",
          //   }}
          className=" p-5 md:p-20 mt-8 mb-5 border-2 bg-white border-[#85d1d4] rounded-lg bg-top"
        >
          <input
            className="block p-1 w-full my-2 border-[#85d1d4] border rounded-lg outline-none  placeholder:text-[#6a95b0]"
            type="text"
            placeholder="Nombre x apellidos"
          />
          <input
            className="block p-1 w-full my-2 border-[#85d1d4] border rounded-lg outline-none  placeholder:text-[#6a95b0]"
            type="text"
            placeholder="Comunidad de Propictanes"
          />
          {/* email and phone  */}
          <div className="flex gap-3 my-3">
            <input
              className="block p-1 w-full my-2 border-[#85d1d4] border rounded-lg outline-none  placeholder:text-[#6a95b0]"
              type="email"
              placeholder="Email"
            />
            <input
              className="block p-1 w-full my-2 border-[#85d1d4] border rounded-lg outline-none  placeholder:text-[#6a95b0]"
              type="number"
              placeholder="Teléfono"
            />
          </div>

          <input
            className="block p-1 w-full my-2 border-[#85d1d4] border rounded-lg outline-none  placeholder:text-[#6a95b0]"
            type="text"
            placeholder="Asunto"
          />
          <textarea
            className="w-full my-2 placeholder:text-[#6a95b0] p-1 border-[#85d1d4] border rounded-lg outline-none "
            name=""
            id=""
            cols="10"
            rows="4"
            placeholder="En que podemos ayudar?"
          ></textarea>
          {/* terms */}
          <div className="flex gap-3">
            <input type="checkbox" />
            <h5 className="font-medium text-lg">
              Acepto las términos y condiciones{" "}
              <a href="#">Ver Términos de Uso</a>
            </h5>
          </div>
          {/* button  */}
          <div className="flex  flex-col md:flex-row justify-center gap-2 md:gap-5 lg:my-3 text-[#85d1d4]">
            <button
              type="button"
              className="p-1 font-medium text-lg bg-[#f7f7f7]"
            >
              Cargar fato
            </button>
            <button
              type="button"
              className="p-1 font-medium text-lg bg-[#f7f7f7]"
            >
              Subir archive
            </button>
          </div>
          {/* submit button  */}
          <button
            className="bg-[#fe145d] text-white font-semibold rounded-tl-full rounded-tr-full rounded-br-full py-2 px-8 block mx-auto text-xl"
            type="button"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
