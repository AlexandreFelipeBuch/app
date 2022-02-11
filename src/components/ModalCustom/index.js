import React from 'react';
import {Modal, ModalArea, ModalBody, CloseButton} from './styles';
import ExpandIcon from '../../assets/expand.svg';

export default ({show, setShow}) => {
  const handleCloseButton = () => {
    setShow(false);
  };

  return (
    <Modal transparent={true} visible={show} animationType="slide">
      <ModalArea>
        <ModalBody>
          <CloseButton onPress={handleCloseButton}>
            <ExpandIcon width="40" height="40" fill="#fff" />
          </CloseButton>
        </ModalBody>
      </ModalArea>
    </Modal>
  );
};
