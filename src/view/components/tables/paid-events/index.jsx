import { useState } from "react";
import { dados } from "./mock";

export default function TablePaid() {
  const [tablePaidEvents] = useState(dados);
  return (
    <div className="p-10 ">
      <div className="overflow-x-auto">
        <h1 className="font-bold mb-2">Eventos Pago</h1>
        <table
          className="table-auto border-collapse border border-gray-300 rounded-md"
          style={{ boxShadow: "10px 10px 30px rgba(61, 68, 199, 0.4)" }}
        >
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
            {tablePaidEvents.map((linha, index) => (
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
