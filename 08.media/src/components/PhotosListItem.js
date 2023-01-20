import Button from './Button';
import { GoTrashcan } from 'react-icons/go';

import { useDeletePhotoMutation } from '../store';

function PhotosListItem({ photo }) {
  const [deletePhoto, deletePhotoResults] = useDeletePhotoMutation();

  const handleDeletePhoto = () => {
    deletePhoto(photo);
  };

  return (
    <div className="relative cursor-pointer m-2" onClick={handleDeletePhoto}>
      <img className="h-20 w-20" src={photo.url} alt="Random Pic"></img>
      <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80">
        <Button loading={deletePhotoResults.isLoading}>
          <GoTrashcan className="text-3xl" />
        </Button>
      </div>
    </div>
  );
}
export default PhotosListItem;
