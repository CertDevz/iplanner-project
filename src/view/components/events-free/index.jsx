import Card from "./components/card";

export default function EventsFree() {
  return (
    <div
      className="flex justify-center items-center "
      style={{
        background:
          "linear-gradient(to bottom right, #7c3aed 20%, #3d44c7 100%)",
      }}
    >
      <div className="flex flex-col">
        <Card
          title="Eventos Gratuitos"
          subtitle="Sem Custos"
          items={[
            "Inscrições Gratuitas.",
            "Participantes limitados (50 participantes)",
            "Importação de Participantes Site Personalizado",
            "E-mails limitados",
          ]}
        />
        <Card
          title="Eventos Pagos"
          subtitle="8,5% por Inscrição"
          items={[
            "Inclusão de Todos os Benefícios Gratuitos",
            "Taxa de Serviço de 8,5% por Inscrição",
            "Emissão de certificados Sem Limites",
            "Gestão das formas de pagamento",
          ]}
        />
      </div>
      <img
        src="/enfermeira-cirurgia.png"
        alt=""
        className="max-w-[1000px] hidden xl:block"
      />
    </div>
  );
}
