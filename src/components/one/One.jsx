import { Button } from "@/components/ui/button";
import bg from "../../assets/img/bg.png";
export default function One() {
  return (
    <div className="bg-white container">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              El software de gestión comunitaria para una convivencia armoniosa
            </h1>
            <p className="text-gray-600 mb-4">
              HappyVecinos es la plataforma completa para la gestión
              comunitaria, accesible en todo momento y lugar
            </p>
            <div className="flex gap-2 mb-4">
              <a
                href="#contact"
                className=" px-6 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-600 hover:text-white "
              >
                Contacta con nosotros
              </a>
              {/* <Button className="bg-white text-gray-600 border border-gray-300 shadow-sm">
                Empieza gratis con Google
              </Button> */}
            </div>
            <div className="flex  flex-col  space-y-2">
              <div className="flex items-center">
                <span className="text-gray-600">Excelente</span>
                <div className="flex ml-2">
                  <StarIcon className="text-green-700 " />
                  <StarIcon className="text-green-700 " />
                  <StarIcon className="text-green-700 " />
                  <StarIcon className="text-green-700" />
                  <StarHalfIcon className="text-green-700 " />
                </div>
              </div>
              <span className="text-gray-400">
                Valoración 4,4 / de 1,200 reseñas en Trustpilot
              </span>
            </div>
          </div>
          <div className=" flex justify-center">
            <img
              alt="Dashboard screenshot"
              className="rounded-lg shadow-xl"
              height="400"
              src={bg}
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width="600"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function StarHalfIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="green"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2" />
    </svg>
  );
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="green"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
