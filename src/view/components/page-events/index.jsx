import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Calendar, MapPin } from "lucide-react";
import MapContainer from "./components/map-container";
import useStore from "../../../store/useCount";
import { api } from "../../../api";
import EventCard from "./components/eventCard";
import CouponSection from "./components/couponSection";
import Footer from "../footer";

export default function PageEvents() {
  const params = useParams();
  const [event, setEvent] = useState({});
  useEffect(() => {
    const find = async () => {
      const { data } = await api.get(`/curso/${params.id}`);
      setEvent(data);

      console.log(data);
    };

    find();
  }, [params.id]);

  const counts = useStore((state) => state.counts);
  const totalCount = Object.values(counts).reduce(
    (acc, count) => acc + count,
    0
  );

  return (
    <div>
      <div className="mb-10">
        <img
          src={event.backgroundImage}
          alt="banner do evento"
          className="w-full  filter brightness-75"
        />

        <div className="md:max-w-[70%] mx-auto p-5">
          <div className="flex flex-col justify-center mt-5 items-center">
            <h1 className="md:text-5xl text-3xl text-purple-950 font-bold text-center ">
              {event.title}
            </h1>
            <span className="text-center mt-5 text-2xl text-purple-600">
              {event.descriptionEvent}
            </span>
            <button className="font-semibold cursor-pointer px-8 py-3 bg-[#db2777] rounded-sm text-white mt-5 hover:bg-[#a1255d]">
              Faça sua incrição
            </button>
          </div>

          <div className="flex flex-col gap-5 md:gap-0 md:flex-row justify-around mt-10">
            <div
              className="flex flex-col md:flex-row items-center gap-5 md:px-14 md:py-10 rounded-md p-5"
              style={{
                background:
                  "linear-gradient(to bottom right, #7c3aed 20%, #3d44c7 100%)",
              }}
            >
              <div className="border-2 bg-gradient-to-r from-purple-800 to-indigo-500 p-2 rounded-full">
                <Calendar size={50} color="white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white">{event.date}</span>
                <span className="text-white">Confira a programação</span>
              </div>
            </div>
            <div
              className="flex flex-col md:flex-row items-center gap-5 md:px-14 md:py-10 rounded-md p-5"
              style={{
                background:
                  "linear-gradient(to bottom right, #7c3aed 20%, #3d44c7 100%)",
              }}
            >
              <div className="border-2 bg-gradient-to-r from-purple-800 to-indigo-500 p-2 rounded-full">
                <MapPin size={50} color="white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white">{event.local}</span>
                <span className="text-white">Avenida Shunji Nishimura</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col text-center justify-center mt-20 max-w-[700px] mx-auto">
            <h1 className="text-3xl text-purple-950 font-bold mt-10">
              Sobre o Evento
            </h1>
            <div className="flex flex-col mt-10   text-left">
              <h2 className="text-xl text-purple-800 font-bold ">
                Venha participar deste super evento! Faça sua inscrição em uma
                das palestras do evento
              </h2>
              <span className="mt-10 text-red-600">
                Não se esqueça! Ao se inscrever, você terá direito a uma única
                palestra avulsa!
              </span>
              <p className="text-sm mt-10 text-purple-600">
                A Conferência INOVEDUCA é uma grande oportunidade para reunir
                mantenedores, gestores, professores, coordenadores pedagógicos,
                acadêmicos e demais profissionais interessados em educação e sua
                interface com a inovação, possibilitando a integração entre eles
                em um processo de reflexão e atualização sobre temáticas e
                desafios contemporâneos da educação, recebendo convidados de
                renome para discutir variados assuntos de interesse da área.
              </p>
            </div>

            <div className="flex flex-col mt-10 text-left">
              <h2 className="text-2xl text-purple-800 font-bold">
                Confira as palestras:
              </h2>

              <div className="mt-10">
                <h2 className="text-purple-800 font-bold">
                  INCLUSÃO NO TEA: A PERSPECTIVA DE UM AUTISTA
                </h2>
                <span className=" text-purple-600">Guilherme de Almeida</span>
              </div>

              <div className="mt-10">
                <h2 className="text-purple-800 font-bold">
                  O PREJUÍZO DO USO EXCESSIVO DE TELAS
                </h2>
                <span className="text-purple-600">Cecília Antipoff</span>
              </div>

              <div className="mt-10">
                <h2 className="text-purple-800 font-bold">
                  AS DIFERENÇAS NO CÉREBRO DE QUEM TEM AUTISMO E TDAH
                </h2>
                <span className=" text-purple-600">
                  Dr. Marcone de Souza Oliveira
                </span>
              </div>
            </div>
          </div>

          <div
            className="flex flex-col gap-7 justify-center mt-20 bg-white shadow-lg p-6 rounded-md pb-20"
            style={{
              backgroundColor: "rgb(243, 243, 243)",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
            }}
          >
            <EventCard
              id="palestra1"
              title="PALESTRA 1 - INCLUSÃO NO TEA: A PERSPECTIVA DE UM AUTISTA (GUILHERME DE ALMEIDA)"
              price={90}
            />

            <EventCard
              id="palestra2"
              title="PALESTRA 2 - O PREJUÍZO DO USO EXCESSIVO DE TELAS (CECÍLIA ANTIPOFF)"
              price={80}
            />

            <EventCard
              id="palestra3"
              title="PALESTRA 3 - AS DIFERENÇAS NO CÉREBRO DE QUEM TEM AUTISMO E TDAH (DR. MARCONE DE SOUZA OLIVEIRA)"
              price={80}
            />
            <CouponSection />

            <div className="flex flex-col items-center justify-center mt-10">
              <h1 className="bg-gradient-to-br from-purple-800 to-indigo-500 text-transparent bg-clip-text font-bold md:text-2xl text-lg ">
                Valor da sua compra: R$ {totalCount * 80}
              </h1>
              <form className="flex flex-col md:flex-row gap-5 mt-5 ">
                <input
                  type="text"
                  placeholder="Nome completo do comprador"
                  className="w-[250px] px-4 py-2 md:py-0 focus:outline-none"
                  required
                />
                <input
                  type="text"
                  placeholder="E-mail do comprador"
                  className="w-[250px] px-4 py-2 md:py-0 focus:outline-none"
                  required
                />
                <button className="font-semibold cursor-pointer px-4 py-3 bg-[#db2777] rounded-sm text-white  hover:bg-[#a1255d]">
                  CONTINUAR
                </button>
              </form>
            </div>
          </div>

          <div className="flex flex-col text-center justify-center md:mt-20 items-center">
            <h1 className="text-5xl text-purple-950 font-bold mt-10">Local</h1>
            <div className="flex flex-col mt-10 md:text-left">
              <h2 className="text-purple-600 font-black">
                Avenida Shunji Nishimura - 17580-050, Avenida Shunji Nishimura,
                Distrito Industrial, Pompéia, São Paulo,
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <MapContainer />
      </div>

      <div className="md:max-w-[70%] mx-auto p-5 mb-10">
        <div className="flex flex-col text-center justify-center md:mt-20 items-center">
          <h1 className="text-5xl text-purple-950 font-bold mt-10">
            Organizador
          </h1>
          <div className="flex flex-col md:flex-row mt-10 gap-5">
            <img src="/evento.jpg" alt="logo-evento" />
            <div className="text-left max-w-[600px]">
              <h2 className="text-purple-800 font-black mb-2">
                Colégio Shunji Nishimura
              </h2>
              <span className="text-purple-600 font-bold">
                A Conferência INOVEDUCA é uma grande oportunidade para reunir
                mantenedores, gestores, professores, coordenadores pedagógicos,
                acadêmicos e demais profissionais interessados em educação e sua
                interface com a inovação, possibilitando a integração entre eles
                em um processo de reflexão e atualização sobre temáticas e
                desafios contemporâneos da educação, recebendo convidados de
                renome para discutir variados assuntos de interesse da área.
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
