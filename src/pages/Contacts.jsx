import Particle from "../components/Particle";

export default function Contacts() {
  return (
    <section>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      >
        <Particle />
      </div>
      <div className="h-screen flex justify-center items-center">
        <div className="rounded-2xl flex justify-center items-center flex-col-reverse lg:flex-row gap-10 lg:gap-20 bg-black bg-opacity-50 p-5 lg:p-10 w-full max-w-7xl">
          <div>
            {" "}
            <h1 className="text-white text-4xl">Let's work together</h1>
            <p className="text-white md:max-w-[600px] lg:max-w-[400px] font-sans text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
              labore corporis vitae in tempora voluptates quas laudantium
              impedi.
            </p>
            <form action="">
              <label></label>
              <input type="text" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
