import { Calendar, MapPin } from "lucide-react";
import Footer from "../footer";
import Header from "../header";

export default function PageEvents() {
  return (
    <div>
      <Header />
      <div className="mb-10">
        <img
          src="/evento-banner.jpeg"
          alt="banner do evento"
          className="w-full max-h-[450px] filter brightness-75"
        />
        <div className="max-w-[70%] mx-auto p-5">
          <div className="flex flex-col justify-center mt-5 items-center">
            <h1 className="text-5xl bg-gradient-to-br from-purple-800 to-indigo-500 text-transparent bg-clip-text font-bold">
              INOVEDUCA 2024 (Palestras Avulsas)
            </h1>
            <span className="text-center mt-5 text-2xl bg-gradient-to-br from-purple-900 to-indigo-300 text-transparent bg-clip-text">
              Conferência Inovação Educacional 2024 da Alta Paulista
            </span>
            <button className="font-semibold cursor-pointer px-8 py-3 bg-[#db2777] rounded-sm text-white mt-5 hover:bg-[#a1255d]">
              Faça sua incrição
            </button>
          </div>

          <div className="flex justify-around mt-10">
            <div
              className="flex items-center gap-5 px-14 py-10 rounded-md"
              style={{
                background:
                  "linear-gradient(to bottom right, #7c3aed 20%, #3d44c7 100%)",
              }}
            >
              <div className="border-2 bg-gradient-to-r from-purple-800 to-indigo-500 p-2 rounded-full">
                <Calendar size={50} color="white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white">
                  De 27 a 28 de junho
                </span>
                <span className="text-white">Confira a programação</span>
              </div>
            </div>
            <div
              className="flex items-center gap-5 px-14 py-10 rounded-md"
              style={{
                background:
                  "linear-gradient(to bottom right, #7c3aed 20%, #3d44c7 100%)",
              }}
            >
              <div className="border-2 bg-gradient-to-r from-purple-800 to-indigo-500 p-2 rounded-full">
                <MapPin size={50} color="white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white">Pompéia, SP</span>
                <span className="text-white">Avenida Shunji Nishimura</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col text-center justify-center mt-20">
            <h1 className="text-3xl bg-gradient-to-br from-purple-800 to-indigo-500 text-transparent bg-clip-text font-bold mt-10">
              Sobre o Evento
            </h1>
            <div className="flex flex-col mt-10 max-w-[700px] text-left">
              <h2 className="text-xl bg-gradient-to-br from-purple-800 to-indigo-500 text-transparent bg-clip-text font-bold ">
                Venha participar deste super evento! Faça sua inscrição em uma
                das palestras do evento
              </h2>
              <span className="mt-10 text-red-600">
                Não se esqueça! Ao se inscrever, você terá direito a uma única
                palestra avulsa!
              </span>
              <p className="text-sm mt-10 bg-gradient-to-br from-purple-900 to-indigo-400 text-transparent bg-clip-text">
                A Conferência INOVEDUCA é uma grande oportunidade para reunir
                mantenedores, gestores, professores, coordenadores pedagógicos,
                acadêmicos e demais profissionais interessados em educação e sua
                interface com a inovação, possibilitando a integração entre eles
                em um processo de reflexão e atualização sobre temáticas e
                desafios contemporâneos da educação, recebendo convidados de
                renome para discutir variados assuntos de interesse da área.
              </p>
            </div>

            <div className="flex flex-col mt-10 max-w-[700px] text-left font-bold">
              <h2 className="bg-gradient-to-br from-purple-800 to-indigo-500 text-transparent bg-clip-text font-bold">
                Confira as palestras:
              </h2>

              <div className="mt-10">
                <h2 className="bg-gradient-to-br from-purple-800 to-indigo-500 text-transparent bg-clip-text font-bold">
                  INCLUSÃO NO TEA: A PERSPECTIVA DE UM AUTISTA
                </h2>
                <span className=" bg-gradient-to-br from-purple-900 to-indigo-400 text-transparent bg-clip-text">
                  Guilherme de Almeida
                </span>
              </div>

              <div className="mt-10">
                <h2 className="bg-gradient-to-br from-purple-800 to-indigo-500 text-transparent bg-clip-text font-bold">
                  O PREJUÍZO DO USO EXCESSIVO DE TELAS
                </h2>
                <span className=" bg-gradient-to-br from-purple-900 to-indigo-400 text-transparent bg-clip-text">
                  Cecília Antipoff
                </span>
              </div>

              <div className="mt-10">
                <h2 className="bg-gradient-to-br from-purple-800 to-indigo-500 text-transparent bg-clip-text font-bold">
                  AS DIFERENÇAS NO CÉREBRO DE QUEM TEM AUTISMO E TDAH
                </h2>
                <span className=" bg-gradient-to-br from-purple-900 to-indigo-400 text-transparent bg-clip-text">
                  Dr. Marcone de Souza Oliveira
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
