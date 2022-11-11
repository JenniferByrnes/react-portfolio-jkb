import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import byrnesResume from "../assets/resume/Byrnesresume.pdf";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  p: 2,
};

export default function Resume() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <h1>This is the Resume/Skillset page</h1>
      <br />
      <h2>Resume</h2>
      <br />
      <Button onClick={handleOpen}>Download or Print PDF resumé with this link</Button>
      <br /><br /><br />
      <br /><br /><br /><br />
      <br /><br /><br /><br />
      <Modal aria-labelledby="modal-title" aria-describedby="modal-description"
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <object width="100%" height="800" data={byrnesResume} type="application/pdf">
          </object>
        </Box>
      </Modal>
    </div>
  );
}
