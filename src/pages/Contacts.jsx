import Particle from "../components/Particle";

export default function Contacts() {
  const inputStyle =
    "bg-gray-800 bg-opacity-50 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green focus:ring-opacity-50 font-sans h-10 w-full ";
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
            <h1 className="text-white text-4xl font-sans">
              Let&apos;s work together
            </h1>
            <p className="text-white md:max-w-[600px] lg:max-w-[400px] font-sans text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <form action="" method="post">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  className={inputStyle}
                  type="firsnamet"
                  placeholder="Firstname"
                />
                <input
                  className={inputStyle}
                  type="lastname"
                  placeholder="Lastname"
                />
                <input
                  className={inputStyle}
                  type="email"
                  placeholder="Email address"
                />
                <input
                  className={inputStyle}
                  type="tel"
                  placeholder="Phone number"
                  pattern="[0-9]"
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9]/g, "");
                  }}
                />
              </div>
              <select
                className="bg-gray-800 bg-opacity-50 text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green focus:ring-opacity-50 font-sans h-10 w-full mt-6"
                id="service"
              >
                <option value="" disabled selected>
                  Select the service
                </option>
                <option value="web-development">Web Developer</option>
                <option value="mobile-development">Mobile Developer</option>
                <option value="backend-development">Backend Developer</option>
                <option value="api-integration">API Integration</option>
                <option value="ecommerce">E-commerce Development</option>
                <option value="responsive-design">Responsive Design</option>
                <option value="database-management">Database Management</option>
                <option value="maintenance-support">
                  Maintenance & Support
                </option>
              </select>
              <textarea
                className="bg-gray-800 bg-opacity-50 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green focus:ring-opacity-50 font-sans h-36 w-full mt-6"
                name=""
                id=""
              ></textarea>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
