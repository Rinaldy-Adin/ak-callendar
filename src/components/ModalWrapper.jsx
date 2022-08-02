const ModalWrapper = ({ children }) => {
    return (
        <div className='w-full z-10 min-h-screen h-full left-0 top-0 fixed bg-black/25 flex justify-center items-center'>
            {children}
        </div>
    );
};

export default ModalWrapper;
