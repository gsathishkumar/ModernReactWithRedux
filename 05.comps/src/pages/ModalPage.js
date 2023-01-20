import { useState } from 'react';

import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button primary onClick={handleClose}>
        I Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is your important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div>
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus
        malesuada gravida. Nulla ut interdum ante. Morbi elit felis, venenatis
        fringilla velit et, ultricies commodo purus. Curabitur sagittis nibh at
        lacus ornare mattis. Mauris consectetur elit vitae dolor ultrices, sed
        molestie magna vestibulum. Integer leo metus, accumsan vel sem vitae,
        volutpat fringilla enim. Vivamus fermentum nisl lacus, eu tincidunt
        massa elementum a.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus
        malesuada gravida. Nulla ut interdum ante. Morbi elit felis, venenatis
        fringilla velit et, ultricies commodo purus. Curabitur sagittis nibh at
        lacus ornare mattis. Mauris consectetur elit vitae dolor ultrices, sed
        molestie magna vestibulum. Integer leo metus, accumsan vel sem vitae,
        volutpat fringilla enim. Vivamus fermentum nisl lacus, eu tincidunt
        massa elementum a.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus
        malesuada gravida. Nulla ut interdum ante. Morbi elit felis, venenatis
        fringilla velit et, ultricies commodo purus. Curabitur sagittis nibh at
        lacus ornare mattis. Mauris consectetur elit vitae dolor ultrices, sed
        molestie magna vestibulum. Integer leo metus, accumsan vel sem vitae,
        volutpat fringilla enim. Vivamus fermentum nisl lacus, eu tincidunt
        massa elementum a.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus
        malesuada gravida. Nulla ut interdum ante. Morbi elit felis, venenatis
        fringilla velit et, ultricies commodo purus. Curabitur sagittis nibh at
        lacus ornare mattis. Mauris consectetur elit vitae dolor ultrices, sed
        molestie magna vestibulum. Integer leo metus, accumsan vel sem vitae,
        volutpat fringilla enim. Vivamus fermentum nisl lacus, eu tincidunt
        massa elementum a.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus
        malesuada gravida. Nulla ut interdum ante. Morbi elit felis, venenatis
        fringilla velit et, ultricies commodo purus. Curabitur sagittis nibh at
        lacus ornare mattis. Mauris consectetur elit vitae dolor ultrices, sed
        molestie magna vestibulum. Integer leo metus, accumsan vel sem vitae,
        volutpat fringilla enim. Vivamus fermentum nisl lacus, eu tincidunt
        massa elementum a.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus
        malesuada gravida. Nulla ut interdum ante. Morbi elit felis, venenatis
        fringilla velit et, ultricies commodo purus. Curabitur sagittis nibh at
        lacus ornare mattis. Mauris consectetur elit vitae dolor ultrices, sed
        molestie magna vestibulum. Integer leo metus, accumsan vel sem vitae,
        volutpat fringilla enim. Vivamus fermentum nisl lacus, eu tincidunt
        massa elementum a.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus
        malesuada gravida. Nulla ut interdum ante. Morbi elit felis, venenatis
        fringilla velit et, ultricies commodo purus. Curabitur sagittis nibh at
        lacus ornare mattis. Mauris consectetur elit vitae dolor ultrices, sed
        molestie magna vestibulum. Integer leo metus, accumsan vel sem vitae,
        volutpat fringilla enim. Vivamus fermentum nisl lacus, eu tincidunt
        massa elementum a.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus
        malesuada gravida. Nulla ut interdum ante. Morbi elit felis, venenatis
        fringilla velit et, ultricies commodo purus. Curabitur sagittis nibh at
        lacus ornare mattis. Mauris consectetur elit vitae dolor ultrices, sed
        molestie magna vestibulum. Integer leo metus, accumsan vel sem vitae,
        volutpat fringilla enim. Vivamus fermentum nisl lacus, eu tincidunt
        massa elementum a.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus
        malesuada gravida. Nulla ut interdum ante. Morbi elit felis, venenatis
        fringilla velit et, ultricies commodo purus. Curabitur sagittis nibh at
        lacus ornare mattis. Mauris consectetur elit vitae dolor ultrices, sed
        molestie magna vestibulum. Integer leo metus, accumsan vel sem vitae,
        volutpat fringilla enim. Vivamus fermentum nisl lacus, eu tincidunt
        massa elementum a.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus
        malesuada gravida. Nulla ut interdum ante. Morbi elit felis, venenatis
        fringilla velit et, ultricies commodo purus. Curabitur sagittis nibh at
        lacus ornare mattis. Mauris consectetur elit vitae dolor ultrices, sed
        molestie magna vestibulum. Integer leo metus, accumsan vel sem vitae,
        volutpat fringilla enim. Vivamus fermentum nisl lacus, eu tincidunt
        massa elementum a.
      </p>
    </div>
  );
}

export default ModalPage;
