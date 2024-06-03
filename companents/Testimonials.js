const Testimonials = ({ testimonials }) => {
    return (
      <section id="testimonials">
        <h2>User Feedback</h2>
        <div className="testimonials-list">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-item">
              <img src={testimonial.avatar} alt={`${testimonial.name} avatar`} />
              <p>{testimonial.feedback}</p>
              <h4>{testimonial.name}</h4>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  