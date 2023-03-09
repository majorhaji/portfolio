const Intro = () => {
  return (
    <section className="intro">
      <div className="sky">
        <span className="clouds" style={{ "--i": 9 }}></span>

        <span className="clouds" style={{ "--i": 12 }}></span>

        <span className="clouds" style={{ "--i": 7 }}></span>

        <span className="clouds" style={{ "--i": 8 }}></span>
        <div className="intro-heading">
          <h1>Hi, I'm Yusuf.</h1>
          <h3>A software developer by day, superhero by night*</h3>
          <p></p>
        </div>

        <span className="clouds" style={{ "--i": 13 }}></span>

        <span className="clouds" style={{ "--i": 5 }}></span>

        <span className="clouds" style={{ "--i": 14 }}></span>
      </div>
    </section>
  );
};

export default Intro;
