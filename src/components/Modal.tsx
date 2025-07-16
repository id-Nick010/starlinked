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
      <div className="bg-white/20 p-5 backdrop-blur-3xl backdrop-saturate-180% rounded-3xl shadow-lg w-100 h-80 flex flex-col items-center justify-between">
        {children}
        <button onClick={onClose} className="mt-4 py-1 px-3 rounded-2xl hover:bg-btn-violet hover:scale-110 text-white">Close</button>
      </div>
    </div>
  );
}