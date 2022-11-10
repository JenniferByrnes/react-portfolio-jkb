import { useState } from 'react';
import ModalResume from '../components/ModalResume';

export default function Resume() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <>
      <h1>This is the Resume/Skillset page</h1>
      <div>
        <h2>Resume</h2>
        <div>
        <a onClick={ModalResume}
        >Download PDF resumé with this link</a>
        </div>
      </div>
      <div>
        Skills
      </div>
    </>
  )
}