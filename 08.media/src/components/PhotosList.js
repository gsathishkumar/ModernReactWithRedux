import { useFetchPhotosQuery, useCreatePhotoMutation } from '../store';

import Skeleton from './Skeleton';
import PhotosListItem from './PhotosListItem';
import Button from './Button';

function PhotosList({ album }) {
  const { data, err, isFetching } = useFetchPhotosQuery(album);
  const [createPhoto, createPhotoResults] = useCreatePhotoMutation();

  let content;
  if (isFetching) {
    content = <Skeleton times={4} className="h-8 w-8" />;
  } else if (err) {
    content = <div>Error loading photos...</div>;
  } else {
    if (data.length > 0) {
      content = data.map(photo => {
        return <PhotosListItem key={photo.id} photo={photo} />;
      });
    } else {
      content = <div>No Photos for Album {album.title}</div>;
    }
  }

  const handleCreatePhoto = event => {
    event.preventDefault();
    createPhoto(album);
  };

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Photos in {album.title}</h3>
        <Button
          loading={createPhotoResults.isLoading}
          onClick={handleCreatePhoto}
        >
          + Add Photo
        </Button>
      </div>
      <div className="mx-8 flex flex-row flex-wrap justify-center">
        {content}
      </div>
    </div>
  );
}

export default PhotosList;
