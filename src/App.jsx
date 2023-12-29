import { useEffect, useState } from "react";
import { AccordionDemo } from "./AccordionDemo";
import first from "./assets/1.png";
import second from "./assets/2.png";
import third from "./assets/3.png";
import { Progress } from "./components/ui/progress";
import { AlignJustify } from "lucide-react";
import logo from "./assets/logo.webp";

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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!loading ? (
        <div className=" bg-white flex flex-col  p-0">
          <div className=" flex w-full flex-col justify-center   items-start ">
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
          )}
          {/* another */}
          <div className="flex-col overflow-hidden relative flex min-h-[596px] w-full px-20 py-12 max-md:max-w-full max-md:px-5">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fc6b8946310baa10d5af47e7bafebe2f3e8c45d2a95bb433736a6fa29a83ae84?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fc6b8946310baa10d5af47e7bafebe2f3e8c45d2a95bb433736a6fa29a83ae84?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fc6b8946310baa10d5af47e7bafebe2f3e8c45d2a95bb433736a6fa29a83ae84?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fc6b8946310baa10d5af47e7bafebe2f3e8c45d2a95bb433736a6fa29a83ae84?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fc6b8946310baa10d5af47e7bafebe2f3e8c45d2a95bb433736a6fa29a83ae84?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fc6b8946310baa10d5af47e7bafebe2f3e8c45d2a95bb433736a6fa29a83ae84?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fc6b8946310baa10d5af47e7bafebe2f3e8c45d2a95bb433736a6fa29a83ae84?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fc6b8946310baa10d5af47e7bafebe2f3e8c45d2a95bb433736a6fa29a83ae84?apiKey=8ebeea0f4ca14c9780c31fc1db4899ea&"
              className="absolute h-full w-full object-cover object-center inset-0"
            />
            <div className="relative text-white text-2xl font-semibold leading-8 whitespace-nowrap justify-center items-stretch self-center ml-12 mt-24 px-5 py-2.5 rounded-[42px] max-md:mt-10 max-md:pr-5">
              NUESTROS SERVICIOS
            </div>
            <div className="relative text-white text-center text-6xl font-semibold leading-[72px]  mr-3.5 mt-2 self-end max-md:max-w-full max-md:text-3xl max-md:leading-[50px] max-md:mr-2.5">
              Representando una comunidad feliz y moderna
            </div>
            <div className="relative text-white text-center text-xl font-medium leading-7 self-center ml-12 max-md:max-w-full">
              Gestión Comunitaria Efectiva y Transparente
            </div>
            <button className="relative text-white text-xl font-medium uppercase whitespace-nowrap rounded border  mt-6 mb-16 px-4 py-2.5 w-min  border-white mx-auto">
              Solicita una Demo
            </button>
          </div>
          <div className="text-black text-center text-4xl font-semibold leading-[49.2px] self-center mt-12 max-md:max-w-full ">
            ¿Qué es Happy Vecinos?
          </div>
          {/* start */}
          <div className="flex flex-col lg:flex-row px-5 lg:ps-12 gap-8 mt-5 h-full items-center">
            <div className=" text-left w-full lg:w-2/4 h-auto">
              <span className="font-medium text-[#D5615F]">
                ¿QUIÉNES SOMOS?
              </span>{" "}
              <br />
              <span className="font-semibold text-4xl mt-2">
                Descubre <br />
                HappyVecinos
              </span>{" "}
              <br />
              <p className="mt-2 text-gray-800 flex items-center ">
                HappyVecinos es un software avanzado que simplifica y mejora la
                gestión de comunidades de vecinos. Nuestra plataforma intuitiva
                y completa es la herramienta ideal para administradores y
                residentes, asegurando una gestión transparente y eficiente.
              </p>
            </div>
            <div className="flex justify-end w-full lg:w-2/4 items-center">
              <img src={first} className="w-5/6 " alt="" />
            </div>
          </div>
          <div className=" flex flex-col lg:flex-row px-5 lg:pe-12 gap-8 mt-16 h-full items-center">
            <div className="order-2 text-left w-full lg:w-2/4 h-auto">
              <span className="font-medium text-[#D5615F]">
                ¿QUÉ PUEDES CONSEGUIR?
              </span>{" "}
              <br />
              <span className="font-semibold text-4xl mt-2">
                Beneficios
              </span>{" "}
              <br />
              <ul
                className="mt-2 text-gray-800 list-disc px-5
  "
              >
                <li>Información Completa de la Comunidad</li>
                <li>Gestión de Incidencias</li>
                <li>Administración de Presupuestos</li>
                <li>
                  Directorio de Proveedores con Seguimiento de Comunicaciones
                </li>
                <li>Archivo Digital de Juntas</li>
                <li>Control de Movimientos Financieros</li>
              </ul>
            </div>
            <div className="order-1 flex justify-start w-full lg:w-2/4 items-center">
              <img src={third} className="w-5/6 " alt="" />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row px-5 lg:px-12 gap-8 mt-16 h-full items-center">
            <div className=" text-left w-full lg:w-2/4 h-auto">
              <span className="font-semibold text-2xl lg:text-3xl mt-2">
                ¿Por qué Happy <br /> Vecinos?
              </span>{" "}
              <br />
              <p className="mt-2 text-gray-800  ">
                HappyVecinos es la solución perfecta para una gestión
                comunitaria más fácil, transparente y eficiente. Diseñado para
                satisfacer las necesidades tanto de administradores como de
                residentes, nuestro software garantiza una experiencia de
                usuario superior y una gestión comunitaria efectiva. Con
                HappyVecinos, estarás al frente de la revolución en la gestión
                de comunidades.
              </p>
            </div>
            <div className="flex justify-end w-full lg:w-2/4 items-center">
              <img src={second} className="w-5/6 " alt="" />
            </div>
          </div>
          {/* anotehr */}
          <div className="text-black text-xl lg:text-3xl font-light leading-[49px]  px-5 lg:px-12 mt-48 max-md:max-w-full">
            Características Happy Vecinos Administrador NormalPortal de
            SeguimientosSí, con seguimiento de incidencias en el ascensor.No
            existe. Notificaciones por WhatsApp sobre incidencias.Como mucho,
            notificaciones por correo.Reuniones con Account ManagerTrimestrales
            para buscar proveedores más económicos.Las juntas pueden costar
            1000€.CostoPrecios ajustados por vivienda (dejar 3 huecos para
            especificar).Costo estándar de 33,000€/anual entre
            administradores.Gestión de EmergenciasCentralita disponible y
            contacto con account manager de 09.00h a 18.00h.Solo contacto con el
            administrador.Seguimiento en Tiempo RealSeguimiento en tiempo real
            de las cuentas de la comunidad.Necesidad de asistir a juntas para
            conocer las cuentas.Adaptación TecnológicaTrabajando en autoconsumo
            y soluciones energéticas a través del portal de “energía”.No se
            adaptan a la tecnología.
          </div>
          <div className="text-black text-4xl font-semibold leading-[49.2px] self-center whitespace-nowrap mt-16 ">
            ¿Cómo lo hacemos?
          </div>
          <div className="text-black text-xl lg:text-3xl font-light leading-[49px] self-center px-5 lg:px-12 mt-10 max-md:max-w-full ">
            ¿Cómo lo hacemos en Happy Vecinos?
            <br />
            Innovación en Gestión Comunitaria: En Happy Vecinos revolucionamos
            la gestión comunitaria ofreciendo un enfoque proactivo, moderno y
            transparente. Nuestro compromiso es simplificar la administración de
            comunidades, haciendo la vida más fácil tanto para administradores
            como para residentes.
            <br />
            1. Asesoramiento Expertizado: Contamos con un equipo de
            profesionales experimentados en la administración de fincas y
            comunidades de vecinos. Te asesoramos y acompañamos en cada paso del
            proceso, desde el cambio de administrador hasta la optimización
            continua de la gestión.
            <br />
            2. Tecnología de Vanguardia: Nuestra plataforma online,
            MiHappyVecinos, es el corazón de nuestra gestión. Aquí tendrás
            acceso inmediato a toda la información de tu comunidad,
            comunicaciones, documentación, votaciones online y seguimiento de
            incidencias, todo accesible desde cualquier lugar y dispositivo.
            <br />
            3. Transparencia y Comunicación: Promovemos una gestión clara y
            abierta. Con reportes mensuales, seguimiento detallado de
            incidencias y juntas virtuales, aseguramos que estés siempre
            informado y en control de lo que sucede en tu comunidad.
            <br />
            4. Eficiencia Económica: Nos convertimos en expertos del ahorro para
            tu comunidad. Analizamos los gastos actuales, buscamos las mejores
            ofertas y negociamos con proveedores para maximizar el ahorro,
            compartiendo los beneficios de las reducciones conseguidas.
            <br />
            5. Compromiso con la Calidad: Nuestra tarifa fija sin sorpresas
            garantiza un servicio integral de calidad. Apostamos por una gestión
            transparente y eficiente, donde el único foco sea el bienestar de tu
            comunidad.
            <br />
            6. Apoyo Constante: Estamos aquí para facilitar el camino. Desde el
            seguimiento continuo hasta la resolución proactiva de problemas,
            nuestro equipo está dedicado a mantener tu comunidad en perfecto
            estado.
            <br />
            7. Innovación Continua: Nos mantenemos al día con las últimas
            tendencias y regulaciones en gestión de comunidades para asegurarnos
            de ofrecer las soluciones más eficientes y sostenibles.
            <br />
            En Happy Vecinos, redefinimos la administración de propiedades con
            un servicio que se adapta a tus necesidades, mejora continuamente y
            pone la tecnología e innovación al servicio de una gestión
            comunitaria más inteligente, sencilla y efectiva.
            <br />
            ¡Transforma la gestión de tu comunidad con nosotros!
          </div>
          <div className="bg-red-400 bg-opacity-30 self-stretch flex w-full flex-col justify-center items-center mt-52 px-16 py-12 max-md:max-w-full max-md:mt-10 max-md:px-5">
            <div className="flex w-full max-w-[953px] flex-col items-center mt-4 mb-2.5 max-md:max-w-full">
              <div className="text-black text-center text-3xl font-semibold leading-[49.2px] whitespace-nowrap">
                ¿Quiénes somos?
              </div>
              <div className="justify-center text-black text-center text-2xl font-light leading-7 self-stretch mt-11 max-md:max-w-full max-md:mt-10">
                Happy Vecinos está transformando la administración de
                comunidades con un enfoque en transparencia, rapidez y
                seguridad. Somos pioneros en la digitalización del sector,
                ofreciendo una gestión de calidad superior a un precio justo.
                Nuestro objetivo es crear un impacto positivo en la sociedad,
                utilizando la tecnología y la innovación para mejorar cada
                comunidad que gestionamos.
                <br />
                Con un equipo diverso de expertos en tecnología, administración
                y derecho, nos dedicamos a proporcionar un servicio excepcional
                y humano. Inspirados por nuestros fundadores, nos esforzamos por
                ser una alternativa moderna a las agencias tradicionales,
                llevando la gestión de propiedades a un nuevo nivel de
                eficiencia y satisfacción del cliente. Con Happy Vecinos,
                experimenta la revolución de la administración comunitaria.
              </div>
            </div>
          </div>
          <div className="text-black text-3xl font-semibold leading-[49.2px] self-center mt-40 max-md:max-w-full max-md:mt-10">
            Preguntas frecuentes
          </div>
          <div className="px-10 mt-8">
            <AccordionDemo />
          </div>

          <div className="items-center  mt-24 flex max-w-[600px] mx-auto flex-col px-5 lg:px-0">
            <div className="text-black text-4xl font-semibold leading-10 self-stretch w-full max-md:max-w-full">
              Conoce más sobre nosotros{" "}
            </div>
            <div className="text-red-400 text-lg leading-7 self-stretch w-full mt-1.5 max-md:max-w-full">
              <span className="">Liamanos al </span>
              <span className="font-medium text-red-400">684 083 197</span>
              <span className=""> o contacta a través del </span>
              <span className="font-semibold text-red-400">formulario</span>
              <span className="">.</span>
            </div>
            <div className="text-black text-xl leading-7 uppercase self-stretch w-full mt-8 max-md:max-w-full">
              NOMBRE y APELLIDOS
            </div>
            <input className="px-4 border self-stretch flex min-h-[61px] w-full flex-col mt-2.5 rounded-sm border-solid border-lime-600 max-md:max-w-full outline-none" />
            <div className="text-black text-xl leading-7 uppercase self-stretch w-full mt-3 max-md:max-w-full">
              Email
            </div>
            <input className="px-4 border self-stretch flex min-h-[61px] w-full flex-col mt-2.5 rounded-sm border-solid border-lime-600 max-md:max-w-full outline-none" />
            <div className="text-black text-xl leading-7 uppercase self-stretch w-full mt-3 max-md:max-w-full">
              teléfono
            </div>
            <input className="px-4 border self-stretch flex min-h-[61px] w-full flex-col mt-2.5 rounded-sm border-solid border-lime-600 max-md:max-w-full outline-none" />
            <button
              onClick={() => alert("submitted!")}
              className="text-white text-xl font-medium uppercase text-center  rounded border bg-red-400  w-full mt-10 px-16 py-5 border-solid border-red-400 max-md:max-w-full max-md:px-5"
            >
              ENVIAR
            </button>
            <div className="text-black text-sm leading-7 uppercase underline self-center mt-4 max-md:max-w-full">
              <span className="">Al hacer clic en Enviar, acepto los </span>
              <a
                href="https://www.somosmesta.es/politica-de-privacidad"
                className="underline"
                target="_blank"
                rel="noreferrer"
              >
                Terminos de Privacidad
              </a>
            </div>
          </div>

          {/* footer */}
          <div className="bg-neutral-800 self-stretch flex w-full flex-col mt-40 px-5 py-7 max-md:max-w-full max-md:mt-10">
            <div className="items-stretch self-center flex w-full max-w-[1039px] justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
              <div className="text-white text-lg capitalize">Nosotros</div>
              <div className="text-white text-lg capitalize">Unete</div>
              <div className="text-white text-lg capitalize">
                Area de Clientes
              </div>
              <div className="text-white text-lg capitalize">Contacto</div>
            </div>
            <div className="text-white text-lg capitalize self-center mt-4 max-md:max-w-full">
              Happy Vecinos S.L. Calle del Pinar 17 28006, Madrid- España,
              info@happyvecinos.com
            </div>
            <div className="bg-white bg-opacity-30 self-stretch min-h-[1px] w-full mt-14 max-md:max-w-full max-md:mt-10" />
            <div className="items-stretch self-center flex w-[827px] max-w-full justify-between gap-5 mt-3 max-md:flex-wrap">
              <div className="text-neutral-400 text-lg capitalize">
                Aviso legal
              </div>
              <div className="text-neutral-400 text-lg capitalize">
                Política de cookies
              </div>
              <div className="text-neutral-400 text-lg capitalize">
                Condiciones generales
              </div>
            </div>
          </div>
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
