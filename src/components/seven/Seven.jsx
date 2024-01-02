import one from "../../assets/img/1.png";
import two from "../../assets/img/2.png";
import three from "../../assets/img/3.png";
import four from "../../assets/img/4.png";
import five from "../../assets/img/5.png";
import six from "../../assets/img/6.png";

export default function Seven() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4  py-12">
        <h1 className="text-4xl font-bold text-gray-900">
          Tu tiempo es valioso
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          Maximiza tu eficiencia automatizando la administración de tu
          comunidad.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="flex flex-col items-start">
            {/* <InboxIcon className="text-blue-500 w-8 h-8 mb-4" /> */}
            <img src={one} className="mb-4 w-16" />
            <h2 className="text-lg font-semibold text-gray-900">
              Gestión de Incidencias
            </h2>
            <p className="text-gray-600 mt-2">
              Registra y clasifica automáticamente todas las incidencias y
              solicitudes de la comunidad en un solo lugar
            </p>
          </div>
          <div className="flex flex-col items-start">
            {/* <BanknoteIcon className="text-blue-500 w-8 h-8 mb-4" /> */}
            <img src={two} className="mb-4 w-16" />

            <h2 className="text-lg font-semibold text-gray-900">
              Conciliación de Cuentas
            </h2>
            <p className="text-gray-600 mt-2">
              Sincroniza automáticamente la contabilidad de la comunidad con las
              transacciones bancarias para una gestión financiera sin esfuerzo.
            </p>
          </div>
          <div className="flex flex-col items-start">
            {/* <PresentationIcon className="text-blue-500 w-8 h-8 mb-4" /> */}
            <img src={four} alt="" className="mb-4 w-16" />
            <h2 className="text-lg font-semibold text-gray-900">
              Convocatorias Automatizadas{" "}
            </h2>
            <p className="text-gray-600 mt-2">
              Envía convocatorias y actas de reuniones de vecinos de forma
              automática y gestiona las respuestas en tiempo real.
            </p>
          </div>
          <div className="flex flex-col items-start">
            {/* <BookTemplateIcon className="text-blue-500 w-8 h-8 mb-4" /> */}
            <img src={three} alt="" className="mb-4 w-16" />

            <h2 className="text-lg font-semibold text-gray-900">
              Documentación Centralizada
            </h2>
            <p className="text-gray-600 mt-2">
              Accede y gestiona de manera eficiente todos los documentos y
              comunicaciones de la comunidad desde un único repositorio digital.
            </p>
          </div>
          <div className="flex flex-col items-start">
            {/* <ReceiptIcon className="text-blue-500 w-8 h-8 mb-4" /> */}
            <img src={five} alt="" className="mb-4 w-16" />

            <h2 className="text-lg font-semibold text-gray-900">
              Reservas de Espacios Comunes
            </h2>
            <p className="text-gray-600 mt-2">
              Organiza y reserva espacios comunes con un sistema de gestión y
              confirmación automatizado.
            </p>
          </div>
          <div className="flex flex-col items-start">
            {/* <ReceiptIcon className="text-blue-500 w-8 h-8 mb-4" /> */}
            <img src={six} alt="" className="mb-4 w-16" />

            <h2 className="text-lg font-semibold text-gray-900">
              Cuotas y Pagos
            </h2>
            <p className="text-gray-600 mt-2">
              Programa las cuotas de la comunidad y gestiona los pagos
              recurrentes, asegurando un proceso sin errores y a tiempo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
