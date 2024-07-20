import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Calendar, MapPin } from "lucide-react";
import { api } from "../../../api";
import Footer from "../footer";
import CourseInfo from "./components/courseInfo";

export default function PageEvents() {
  const params = useParams();
  const [event, setEvent] = useState({});
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const find = async () => {
      const { data } = await api.get(`/curso/${params.id}`);
      setEvent(data);
    };

    find();
  }, [params.id]);

  console.log("event: ", event);

  // const counts = useStore((state) => state.counts);
  // const totalCount = Object.values(counts).reduce(
  //   (acc, count) => acc + count,
  //   0
  // );

  function dataAtualFormatada() {
    var data = new Date(),
      dia = data.getDate().toString(),
      diaF = dia.length == 1 ? "0" + dia : dia,
      mes = (data.getMonth() + 1).toString(),
      mesF = mes.length == 1 ? "0" + mes : mes,
      anoF = data.getFullYear();
    return diaF + "/" + mesF + "/" + anoF;
  }

  const dataFormatada = dataAtualFormatada(event.date);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      alert("Por favor, insira um e-mail válido.");
      return;
    }

    console.log("Backend status:", import.meta.env.VITE_BACKEND_AVAILABLE);
    if (import.meta.env.VITE_BACKEND_AVAILABLE === "false") {
      console.log("Backend not available, simulating response...");
      setShowPopup(true);
      return;
    }

    const emailFrom = {
      ...formData,
      eventId: params.id,
      date: event.date,
      hour: event.hour,
    };
    console.log(emailFrom);

    try {
      const response = await api.request({
        url: "/send-mail",
        method: "POST",
        data: emailFrom,
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Email sent:", response);
      setShowPopup(true);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const localData = event.local ? JSON.parse(event.local) : null;

  return (
    <div>
      <div className="mb-10">
        <img
          src={event.backgroundImage}
          alt="banner do evento"
          className="w-full filter brightness-75"
        />

        <div className="md:max-w-[70%] mx-auto p-5">
          <div className="flex flex-col justify-center mt-5 items-center gap-10">
            <h1 className="md:text-5xl text-3xl text-purple-950 font-bold text-center ">
              {event.title}
            </h1>
            <button
              className="font-semibold cursor-pointer px-8 py-3 bg-[#db2777] rounded-sm text-white mt-5 hover:bg-[#a1255d]"
              onClick={() =>
                document
                  .getElementById("form-section")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Faça sua inscrição
            </button>
          </div>

          <div className="flex flex-col md:flex-row gap-5 mt-10">
            <div
              className="flex flex-col md:flex-row items-center gap-5 rounded-md p-5 flex-1"
              style={{
                background:
                  "linear-gradient(to bottom right, #7c3aed 20%, #3d44c7 100%)",
              }}
            >
              <div className="border-2 bg-gradient-to-r from-purple-800 to-indigo-500 p-2 rounded-full">
                <Calendar size={50} color="white" />
              </div>
              <div className="flex flex-col items-center md:items-start">
                <span className="font-bold text-white">{dataFormatada}</span>
                <span className="text-white">Confira a programação</span>
              </div>
            </div>
            <div
              className="flex flex-col md:flex-row items-center gap-5 rounded-md p-5 flex-1"
              style={{
                background:
                  "linear-gradient(to bottom right, #7c3aed 20%, #3d44c7 100%)",
              }}
            >
              <div className="border-2 p-2 rounded-full">
                <MapPin size={50} color="white" />
              </div>
              <div className="flex flex-col items-center md:items-start">
                {localData && (
                  <>
                    <span className="font-bold text-white">
                      Bairro: {localData.bairro}
                    </span>
                    <span className="font-bold text-white">
                      CEP: {localData.cep}
                    </span>
                    <span className="font-bold text-white">
                      Cidade: {localData.cidade}
                    </span>
                    <span className="font-bold text-white">
                      Estado: {localData.estado}
                    </span>
                    <span className="font-bold text-white">
                      Rua: {localData.rua}
                    </span>
                  </>
                )}
                <span className="font-bold text-white">
                  {event.descriptionLocal}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col text-center justify-center mt-20 max-w-[900px] mx-auto">
            <h1 className="text-3xl text-purple-950 font-bold mt-10">
              Sobre o Evento
            </h1>
            <div className="flex flex-col mt-10 text-left">
              <h2 className="text-xl text-purple-800 font-bold">
                Venha participar deste super evento! Faça sua inscrição em uma
                das palestras do evento
              </h2>
              <span className="mt-10 text-red-600">
                Não se esqueça! Ao se inscrever, você terá direito a uma única
                palestra avulsa!
              </span>
              <p className="md:text-lg text-sm mt-10 text-purple-600 p-5 shadow-2xl">
                {event.descriptionEvent ? (
                  <CourseInfo descriptionEvent={event.descriptionEvent} />
                ) : (
                  <p>Carregando...</p>
                )}
              </p>
            </div>

            <div className="flex flex-col mt-10 text-left">
              <h2 className="text-2xl text-purple-800 font-bold">
                Confira os palestrantes
              </h2>

              {event.speaker &&
                event.speaker.map((speaker, index) => (
                  <li className="flex items-center mt-5" key={index}>
                    <img
                      className="w-10 h-10 rounded-full"
                      src={speaker.avatar}
                      alt="Rounded avatar"
                    ></img>
                    <span className="text-lg text-purple-950 font-semibold">
                      {speaker.name}
                    </span>
                  </li>
                ))}
            </div>
          </div>

          {/* <div
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
          </div> */}

          <div className="text-center mt-10">
            {/* <h1 className="bg-gradient-to-br from-purple-800 to-indigo-500 text-transparent bg-clip-text font-bold md:text-2xl text-lg ">
              Valor da sua compra: R$ {totalCount * 80}
            </h1> */}
          </div>

          <div className="mt-10">
            <div className="bg-white p-5 shadow-md rounded-lg mt-10">
              <h2 className="text-center text-2xl text-purple-800 font-bold">
                Inscreva-se Agora!
              </h2>
              <form
                className="flex flex-col gap-5 mt-10"
                id="form-section"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  placeholder="Nome completo"
                  className="p-3 rounded-lg border-2 border-purple-500"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="p-3 rounded-lg border-2 border-purple-500"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <button
                  type="submit"
                  className="font-semibold cursor-pointer px-8 py-3 bg-[#db2777] rounded-sm text-white mt-5 hover:bg-[#a1255d]"
                >
                  CONTINUAR
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-lg text-purple-950 font-semibold mb-4">
              Formulário Enviado!
            </h2>
            <p className="text-purple-700">
              As instruções de confirmação de incrição foram enviadas por
              e-mail.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 px-4 py-2 bg-purple-800 text-white rounded"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
