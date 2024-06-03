// components/Features.js
import styles from '../Features.module.css';

const Features = ({ features }) => {
  return (
    <section id="features">
      <h2>Main Features</h2> 
      <div className={styles.featureList}>
        {features.map((feature, index) => (
          <div key={index} className={styles.featureItem}>
            <img src={feature.icon} alt={`${feature.title} icon`} />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
