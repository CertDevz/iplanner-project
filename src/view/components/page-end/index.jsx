export default function PageEnd() {
  return (
    <div className="w-full overflow-hidden hidden md:block">
      <div className="relative w-full flex">
        <img
          src="/medicos-end.png"
          alt="medicos"
          className="max-w-[45%] h-auto"
          style={{
            mixBlendMode: "multiply",
            marginRight: "-10px",
          }}
        />
        <img
          src="/medicos-end2.png"
          alt="medicos"
          className="max-w-[60%] h-auto mb-2"
          style={{
            mixBlendMode: "multiply",
          }}
        />
      </div>
    </div>
  );
}
