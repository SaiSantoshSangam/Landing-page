const Pricing = ({ pricing }) => {
    return (
      <section id="pricing">
        <h2>Pricing Plans</h2>
        <div className="pricing-list">
          {pricing.map((plan, index) => (
            <div key={index} className="pricing-item">
              <h3>{plan.plan}</h3>
              <p>{plan.price}</p>
              <ul>
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Pricing;
  