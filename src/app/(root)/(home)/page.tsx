import Footer from "../footer";
import Header from "../header";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <section
          className="relative w-full h-screen bg-cover bg-center rounded-lg"
          style={{
            backgroundImage:
              "url('https://source.unsplash.com/1600x900/?hotel')",
          }}
        >
          <div
            style={{ borderRadius: "30px" }}
            className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-4"
          >
            <h1 className="text-4xl font-bold">
              Hotel Mellow Your Gateway To Serenity
            </h1>
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Explore Rooms
            </button>
          </div>
        </section>

        {/* About Section */}
        <section className="max-w-6xl mx-auto p-6 text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Mellow: Your Gateway To Serenity
          </h2>
          <p className="text-gray-700 mb-6">
            Welcome to Hotel Mellow, where comfort meets tranquility. Nestled in
            the heart of a bustling city, our hotel offers a peaceful retreat
            for both business and leisure travelers.
          </p>
          <button className="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-900">
            Read About Us
          </button>
        </section>

        {/* Image Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
          <Image
            width={400}
            height={300}
            src="/image.png"
            className="rounded-lg shadow-lg"
            alt="Resort"
          />
          <Image
            width={400}
            height={300}
            src="/image.png"
            className="rounded-lg shadow-lg"
            alt="Hotel Room"
          />
          <Image
            width={400}
            height={300}
            src="/image.png"
            className="rounded-lg shadow-lg"
            alt="Spa"
          />
        </section>

        {/* Statistics */}
        <section className="flex justify-around bg-white py-10">
          <div className="text-center">
            <p className="text-2xl font-bold">25k</p>
            <p className="text-gray-600">Happy Clients</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">160</p>
            <p className="text-gray-600">Total Rooms</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">28</p>
            <p className="text-gray-600">Awards Won</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">100</p>
            <p className="text-gray-600">Team Members</p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
