import { Fragment } from 'react';
import { GoTrashcan } from 'react-icons/go';
import { removeUser } from '../store';
import { useThunk } from '../hooks/use-thunk';

import Button from './Button';
import ExpandablePanel from './ExpandablePanel';
import AlbumsList from './AlbumsList';

function UsersListItem({ user }) {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  const handleClick = () => {
    doRemoveUser(user);
  };
  const header = (
    <Fragment>
      <Button className="mr-3" loading={isLoading} onClick={handleClick}>
        <GoTrashcan />
      </Button>
      {error && <div>Error deleting user.</div>}
      {user.name}
    </Fragment>
  );

  return (
    <ExpandablePanel header={header}>
      <AlbumsList user={user}></AlbumsList>
    </ExpandablePanel>
  );
}

export default UsersListItem;
