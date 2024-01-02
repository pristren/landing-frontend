export default function Eleven() {
  return (
    <div className="flex flex-col items-center justify-center px-8  py-8 my-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center gap-10 lg:gap-20  mt-8">
        <div className="">
          <h2 className="text-2xl font-bold">HAY MÁS PARA TI</h2>
          <p className="text-xl mt-2">Y eso no es todo...</p>
          <p className="mt-4">
            HappyVecinos es más que gestión, es el núcleo de tu comunidad.
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center">
            <CheckIcon className="text-green-500 mr-2" />
            <h3 className="font-semibold">Gestión de Reservas</h3>
          </div>
          <p className="mt-2">
            {" "}
            Reserva áreas comunes y servicios en segundos, con un sistema que se
            adapta a las necesidades de tu comunidad.
          </p>
          <div className="flex items-center mt-4">
            <CheckIcon className="text-green-500 mr-2" />
            <h3 className="font-semibold">Administración de Documentos</h3>
          </div>
          <p className="mt-2">
            Acceso centralizado a todos los documentos comunitarios, desde actas
            hasta reglamentos, en un solo lugar.
          </p>
          <div className="flex items-center mt-4">
            <CheckIcon className="text-green-500 mr-2" />
            <h3 className="font-semibold">Comunicados Efectivos</h3>
          </div>
          <p className="mt-2">
            Envía avisos y notificaciones a toda la comunidad de manera
            instantánea y efectiva.
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center">
            <CheckIcon className="text-green-500 mr-2" />
            <h3 className="font-semibold">Conectividad con Servicios</h3>
          </div>
          <p className="mt-2">
            Integra HappyVecinos con otros servicios y gestiona todo desde un
            único punto de acceso.
          </p>
          <div className="flex items-center mt-4">
            <CheckIcon className="text-green-500 mr-2" />
            <h3 className="font-semibold">Gestión de Cuotas</h3>
          </div>
          <p className="mt-2">
            Automatiza el cálculo y cobro de cuotas comunitarias, ahorrando
            tiempo y mejorando la precisión.
          </p>
          <div className="flex items-center mt-4">
            <CheckIcon className="text-green-500 mr-2" />
            <h3 className="font-semibold">Encuestas y Votaciones</h3>
          </div>
          <p className="mt-2">
            Recoge la opinión de los vecinos y realiza votaciones en línea para
            tomar decisiones rápidas y democráticas.
          </p>
        </div>
      </div>
    </div>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
