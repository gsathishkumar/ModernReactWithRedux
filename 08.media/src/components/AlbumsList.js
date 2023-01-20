import { useFetchAlbumsQuery, useCreateAlbumMutation } from '../store';
import Skeleton from './Skeleton';
import AlbumsListItem from './AlbumsListItem';
import Button from './Button';

function AlbumsList({ user }) {
  const { data, err, isFetching } = useFetchAlbumsQuery(user);
  const [createAlbum, createAlbumResults] = useCreateAlbumMutation();

  let content;
  if (isFetching) {
    content = <Skeleton times={3} className="h-10 w-full" />;
  } else if (err) {
    content = <div>Error loading albums...</div>;
  } else {
    if (data.length > 0) {
      content = data.map(album => {
        return <AlbumsListItem key={album.id} album={album} />;
      });
    } else {
      content = <div>No Albums for User {user.name}</div>;
    }
  }

  const handleCreateAlbum = event => {
    event.preventDefault();
    createAlbum(user);
  };

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Albums for {user.name}</h3>
        <Button
          loading={createAlbumResults.isLoading}
          onClick={handleCreateAlbum}
        >
          + Add Album
        </Button>
      </div>
      <div>{content}</div>
    </div>
  );
}
export default AlbumsList;
