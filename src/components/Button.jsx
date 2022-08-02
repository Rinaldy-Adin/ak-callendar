const PrimaryButton = ({ children, onClick }) => {
    return (
        <button
            onClick={onClick}
            className='text-[14px] md:text-lg text-white bg-[#6DAEDB] hover:bg-[#5494B8] active:bg-[#518EB0] rounded font-medium px-[6px] py-[2px] md:px-2 md:py-1 leading-6'
        >
            {children}
        </button>
    );
};

const SecondaryButton = ({ children, onClick }) => {
    return (
        <button
            onClick={onClick}
            className='text-[14px] md:text-lg text-[#626262] bg-[#E2E2E2] hover:bg-[#D4D4D4] active:bg-[#CFCFCF] rounded font-medium px-[6px] py-[2px] md:px-2 md:py-1 leading-6'
        >
            {children}
        </button>
    );
};

export { PrimaryButton, SecondaryButton };
