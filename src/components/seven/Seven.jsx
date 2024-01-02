import one from "../../assets/img/1.png";
import two from "../../assets/img/2.png";
import three from "../../assets/img/3.png";
import four from "../../assets/img/4.png";
import five from "../../assets/img/5.png";
import six from "../../assets/img/6.png";

export default function Seven() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900">
          Tu tiempo es importante
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          Ahorra horas de trabajo automatizando tareas cotidianas.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="flex flex-col items-start">
            {/* <InboxIcon className="text-blue-500 w-8 h-8 mb-4" /> */}
            <img src={one} className="mb-4 w-16" />
            <h2 className="text-lg font-semibold text-gray-900">Inbox</h2>
            <p className="text-gray-600 mt-2">
              Organiza y clasifica todas las facturas y gastos que recibas de
              una fuente externa en un solo lugar.
            </p>
          </div>
          <div className="flex flex-col items-start">
            {/* <BanknoteIcon className="text-blue-500 w-8 h-8 mb-4" /> */}
            <img src={two} className="mb-4 w-16" />

            <h2 className="text-lg font-semibold text-gray-900">
              Conciliación bancaria
            </h2>
            <p className="text-gray-600 mt-2">
              Conecta Holded con tu banco de forma segura para conciliar tus
              facturas con tus movimientos bancarios.
            </p>
          </div>
          <div className="flex flex-col items-start">
            {/* <PresentationIcon className="text-blue-500 w-8 h-8 mb-4" /> */}
            <img src={three} alt="" className="mb-4 w-16" />
            <h2 className="text-lg font-semibold text-gray-900">
              Presentación de modelos
            </h2>
            <p className="text-gray-600 mt-2">
              Holded puede rellenar algunos modelos de IVA e IRPF de forma
              automática y enviarlos telemáticamente.
            </p>
          </div>
          <div className="flex flex-col items-start">
            {/* <BookTemplateIcon className="text-blue-500 w-8 h-8 mb-4" /> */}
            <img src={four} alt="" className="mb-4 w-16" />

            <h2 className="text-lg font-semibold text-gray-900">
              Plantillas de documentos y emails
            </h2>
            <p className="text-gray-600 mt-2">
              Elige entre más de 40 plantillas editables para personalizar las
              facturas, documentos y emails que envía tu empresa.
            </p>
          </div>
          <div className="flex flex-col items-start">
            {/* <ReceiptIcon className="text-blue-500 w-8 h-8 mb-4" /> */}
            <img src={five} alt="" className="mb-4 w-16" />

            <h2 className="text-lg font-semibold text-gray-900">Remesas</h2>
            <p className="text-gray-600 mt-2">
              Automatiza la generación de remesas a través de un archivo XML con
              tus facturas, descárgalas y súbelas al banco.
            </p>
          </div>
          <div className="flex flex-col items-start">
            {/* <ReceiptIcon className="text-blue-500 w-8 h-8 mb-4" /> */}
            <img src={six} alt="" className="mb-4 w-16" />

            <h2 className="text-lg font-semibold text-gray-900">
              Facturas recurrentes
            </h2>
            <p className="text-gray-600 mt-2">
              Programa tus facturas recurrentes cuando quieras para que no
              tengas que enviar la misma factura una y otra vez.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
