import { Fragment } from 'react';
import Button from './Button';
import ExpandablePanel from './ExpandablePanel';
import { GoTrashcan } from 'react-icons/go';

import { useDeleteAlbumMutation } from '../store';
import PhotosList from './PhotosList';

function AlbumsListItem({ album }) {
  const [deleteAlbum, deleteAlbumResults] = useDeleteAlbumMutation();

  const handleDeleteAlbum = () => {
    deleteAlbum(album);
  };

  const header = (
    <Fragment>
      <Button
        className="mr-3"
        loading={deleteAlbumResults.isLoading}
        onClick={handleDeleteAlbum}
      >
        <GoTrashcan />
      </Button>
      {album.title}
    </Fragment>
  );
  return (
    <ExpandablePanel header={header}>
      <PhotosList album={album}></PhotosList>
    </ExpandablePanel>
  );
}
export default AlbumsListItem;
