import bg2 from "../../assets/img/bg2.png";
export default function TweentySix() {
  return (
    <section className="p-5 md:p-10 lg:py-10 lg:px-40 flex flex-col lg:flex-row gap-5">
      {/* About Us Text */}
      <div className="lg:w-1/2">
        <h5 className="text-blue-500 font-medium mb-2">QUIÉNES SOMOS</h5>
        <h3 className="text-4xl font-bold mb-7">Esto es solo el principio</h3>

        <p className=" text-gray-500 mb-7">
          Happy Vecinos está transformando la administración de comunidades con
          un enfoque en transparencia, rapidez y seguridad. Somos pioneros en la
          digitalización del sector, ofreciendo una gestión de calidad superior
          a un precio justo. Nuestro objetivo es crear un impacto positivo en la
          sociedad, utilizando la tecnología y la innovación para mejorar cada
          comunidad que gestionamos.
        </p>
        <p className=" text-gray-500 mb-7">
          Con un equipo diverso de expertos en tecnología, administración y
          derecho, nos dedicamos a proporcionar un servicio excepcional y
          humano. Inspirados por nuestros fundadores, nos esforzamos por ser una
          alternativa moderna a las agencias tradicionales, llevando la gestión
          de propiedades a un nuevo nivel de eficiencia y satisfacción del
          cliente. Con Happy Vecinos, experimenta la revolución de la
          administración comunitaria.
        </p>
      </div>
      {/* Image */}
      <div className="lg:w-2/4">
        <img className="my-20 max-h-screen rounded-md" src={bg2} alt="Office" />
      </div>
    </section>
  );
}
