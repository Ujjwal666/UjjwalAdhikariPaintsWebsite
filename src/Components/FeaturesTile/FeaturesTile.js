import './FeaturesTile.css';

function FeaturesTile({image, title, subtitle, buttonTitle, buttonLink}) {
  return (
    <div className="FeaturesTile">
        <img src={image} />
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <button>{buttonTitle}</button>
    </div>
  );
}

export default FeaturesTile;
