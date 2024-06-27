export default function PageEnd() {
  return (
    <div className="w-full overflow-hidden hidden md:block">
      <div className="relative w-full flex justify-center">
        <img
          src="/medicos-end.png"
          alt="medicos"
          className="w-full h-auto object-contain"
          style={{
            maxHeight: "200px",
            mixBlendMode: "multiply",
          }}
        />
      </div>
    </div>
  );
}
