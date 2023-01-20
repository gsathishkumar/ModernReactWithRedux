import Button from '../components/Button.js';
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';

function ButtonPage() {
  return (
    <div>
      <div>
        <Button primary rounded>
          <GoBell /> Primary
        </Button>
      </div>
      <div>
        <Button secondary>
          <GoCloudDownload /> Secondary
        </Button>
      </div>
      <div>
        <Button success>
          <GoDatabase />
          Success
        </Button>
      </div>
      <div>
        <Button warning outlined>
          Warning
        </Button>
      </div>
      <div>
        <Button danger>Danger</Button>
      </div>
      <div>
        <Button>Plain</Button>
      </div>
    </div>
  );
}

export default ButtonPage;
