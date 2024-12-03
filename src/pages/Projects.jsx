import Particles from "@tsparticles/react";

export default function Projects() {
  return (
    <>
    <div>
    <div className="hidden md:flex"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1, // Faz com que o fundo fique atrás do conteúdo
      }}
    >
      <Particles />
    </div>
      <p className="text-white text-5xl pt-20">Projects</p>
    </div>
  </>
  );
}
