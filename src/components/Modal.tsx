import type {ReactNode} from 'react';

type ModalProps = {
    isOpen: boolean;
    onClose: ()=> void;
    children: ReactNode;
}

export default function Modal({ isOpen , onClose, children}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      <div className="bg-white p-5 rounded shadow-lg w-100 h-80 flex flex-col items-center justify-between">
        {children}
        <button onClick={onClose} className="mt-4 text-violet-800">Close</button>
      </div>
    </div>
  );
}