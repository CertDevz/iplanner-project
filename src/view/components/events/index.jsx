export default function Events() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2s lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 py-36">
      <div className=" relative overflow-hidden rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-500">
        <img
          src="/public/events/event1.jpg"
          alt="Foto 1"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      <div className="relative overflow-hidden rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-500">
        <img
          src="/public/events/event2.jpg"
          alt="Foto 2"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      <div className="relative overflow-hidden rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-500">
        <img
          src="/public/events/event3.jpg"
          alt="Foto 3"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      <div className="relative overflow-hidden rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-500">
        <img
          src="/public/events/event4.jpg"
          alt="Foto 4"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>
    </div>
  );
}
