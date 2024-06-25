export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-purple-800 to-indigo-500 text-white py-4 -mt-2">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          Todos os direitos reservados &copy; {currentYear}
        </p>
      </div>
    </footer>
  );
}
