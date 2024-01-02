export default function Eleven() {
  return (
    <div className="flex flex-col items-center justify-center px-8 lg:px-24 py-8 my-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center gap-10 lg:gap-20  mt-8">
        <div className="">
          <h2 className="text-2xl font-bold">TENEMOS MÁS</h2>
          <p className="text-xl mt-2">Y eso no es todo...</p>
          <p className="mt-4">
            Sea cual sea tu negocio, Holded tiene la herramienta que buscas.
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center">
            <CheckIcon className="text-green-500 mr-2" />
            <h3 className="font-semibold">Soporte de múltiples divisas</h3>
          </div>
          <p className="mt-2">
            Crea facturas en cualquier moneda cambiando la divisa en tus
            configuraciones.
          </p>
          <div className="flex items-center mt-4">
            <CheckIcon className="text-green-500 mr-2" />
            <h3 className="font-semibold">Cálculo de impuestos</h3>
          </div>
          <p className="mt-2">
            Elige qué impuesto quieres añadir a tus facturas y Holded hará las
            cuentas por ti.
          </p>
          <div className="flex items-center mt-4">
            <CheckIcon className="text-green-500 mr-2" />
            <h3 className="font-semibold">Gestión de nóminas</h3>
          </div>
          <p className="mt-2">
            Gestiona nóminas con toda la información que necesitas: salario
            base, suplementos, IRPF, etc.
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center">
            <CheckIcon className="text-green-500 mr-2" />
            <h3 className="font-semibold">Envío de presupuestos</h3>
          </div>
          <p className="mt-2">
            Prepara presupuestos y envíalos desde Holded para ser aprobados por
            tu cliente.
          </p>
          <div className="flex items-center mt-4">
            <CheckIcon className="text-green-500 mr-2" />
            <h3 className="font-semibold">Integraciones</h3>
          </div>
          <p className="mt-2">
            Conecta todas tus aplicaciones con Holded de forma sencilla a través
            de la Holded Store.
          </p>
          <div className="flex items-center mt-4">
            <CheckIcon className="text-green-500 mr-2" />
            <h3 className="font-semibold">Gestión de proformas</h3>
          </div>
          <p className="mt-2">
            Personalízalas para que especifiquen los detalles sobre futuras
            facturas con tus clientes.
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
