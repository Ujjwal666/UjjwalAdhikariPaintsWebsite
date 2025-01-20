import './SuccessStoryTile.css';

function SuccessStoryTile({image, name, university, description}) {
  return (
    <div className="SuccessStoryTile">
        <div className='imageNameUniversity'>
            <img src={image} />
            <div className='nameUniversity'>
                <h2>{name}</h2>
                <p>Student at {university}</p>
            </div>
        </div>
        <div className='description'>
            <p>{description}</p>
        </div>
    </div>
  );
}

export default SuccessStoryTile;
