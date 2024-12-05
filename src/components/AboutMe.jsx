export default function AboutMe() {
  const textStyle = "text-white font-sans";
  return (
    <>
      <div>
        <h1 className="text-white">About Me</h1>
        <p className="text-white font-sans max-w-[500px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi fugit
          accusantium earum? Assumenda rem laborum atque.
        </p>
        <div className="border border-green rounded-lg">
          <div>
            <p className={textStyle}>
              <span>Name </span>Ruan
            </p>
            <p className={textStyle}>
              <span>Experience</span> 1 year
            </p>
            <p className={textStyle}>
              <span>Nationality</span> Brazilian
            </p>
            <p className={textStyle}>
              <span>Freelance</span> Available
            </p>
          </div>

          <div>
            <p className={textStyle}>
              <span>Phone </span> (+55) 85991963095
            </p>
            <p className={textStyle}>
              <span>Experience</span> 1 year
            </p>
            <p className={textStyle}>
              <span>Email</span> rugdev039@gmail.com
            </p>
            <p className={textStyle}>
              <span>Languages</span> Portuguese, English
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
