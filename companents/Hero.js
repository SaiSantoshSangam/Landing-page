
const Hero = ({ data }) => {
    return (
      <section id="hero">
        <h1>{data.headline}</h1>
        <p>{data.subheadline}</p>
        <div>
          {data.ctaButtons.map((button, index) => (
            <a key={index} href={button.link}>
              <button>{button.text}</button>
            </a>
          ))}
        </div>
      </section>
    );
  };
  
  export default Hero;
  