import { useState } from "react";

export default function Tables() {
  const [dados] = useState([
    {
      funcionalidade: "Gestão de inscrição",
      descricao: "Permite aos organizadores gerenciar inscrições",
      limitacao: "Incluída",
      custo: "Grátis",
    },
    {
      funcionalidade: "Capacidade máxima",
      descricao: "Número máximo de participantes",
      limitacao: "Até 50 participantes",
      custo: "Grátis",
    },
    {
      funcionalidade: "Personalização de site",
      descricao: "Criação de uma página dedicada ao evento",
      limitacao: "Incluída",
      custo: "Grátis",
    },
    {
      funcionalidade: "Ferramenta de e-mail",
      descricao: "Envio de e-mails para participantes",
      limitacao: "Verificar disponibilidade",
      custo: "-",
    },
    {
      funcionalidade: "Submissão de trabalhos",
      descricao: "Envio e avaliação de trabalhos acadêmicos",
      limitacao: "Verificar disponibilidade",
      custo: "-",
    },
    {
      funcionalidade: "Processo de credenciamento",
      descricao: "Verificação de validação de participantes",
      limitacao: "Incluído",
      custo: "Grátis",
    },
    {
      funcionalidade: "Monitoramento de presença",
      descricao: "Controle de entrada e saída dos participantes",
      limitacao: "Incluído",
      custo: "Grátis",
    },
    {
      funcionalidade: "Ferramenta de sorteios",
      descricao: "Realização de sorteios durante o evento",
      limitacao: "Incluída",
      custo: "Grátis",
    },
    {
      funcionalidade: "Emissão de certificados",
      descricao: "Emissão de certificados de participação",
      limitacao: "Incluída",
      custo: "Grátis",
    },
    {
      funcionalidade: "Pesquisa de feedback",
      descricao: "Coleta de feedback pós-evento",
      limitacao: "Incluída",
      custo: "Grátis",
    },
    {
      funcionalidade: "Relatórios analíticos",
      descricao: "Relatórios detalhados sobre o evento",
      limitacao: "Incluídos",
      custo: "Grátis",
    },
  ]);

  return (
    <div className="p-10">
      <div className="overflow-x-auto">
        <h1 className="font-bold mb-2">Eventos Gratuitos</h1>
        <table className="table-auto border-collapse border border-gray-300 rounded-md">
          <thead>
            <tr
              className="bg-gray-200 text-white"
              style={{
                background:
                  "linear-gradient(to bottom right, #7c3aed 20%, #3d44c7 100%)",
              }}
            >
              <th className="border border-gray-300 px-4 py-2">
                Funcionalidade
              </th>
              <th className="border border-gray-300 px-4 py-2">Descrição</th>
              <th className="border border-gray-300 px-4 py-2">Limitação</th>
              <th className="border border-gray-300 px-4 py-2">Custo</th>
            </tr>
          </thead>
          <tbody>
            {dados.map((linha, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                <td className="border border-gray-300 px-4 py-2">
                  {linha.funcionalidade}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {linha.descricao}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {linha.limitacao}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {linha.custo}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}