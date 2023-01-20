import ImageShow from './ImageShow';
import './image-list.css';

function ImageList({ images }) {
  const renderedImages = images.map(image => (
    <div key={image.id}>
      <ImageShow image={image} />
    </div>
  ));
  return <div className="image-list">{renderedImages}</div>;
}

export default ImageList;
