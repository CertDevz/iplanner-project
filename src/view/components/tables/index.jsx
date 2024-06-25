import TableFree from "./events-free";
import TablePaid from "./paid-events";

export default function Tables() {
  return (
    <div className="flex flex-col">
      <img src="/icon.svg" alt="" width={70} />
      <div className="flex flex-col md:flex-row">
        <TableFree />
        <TablePaid />
      </div>
    </div>
  );
}
