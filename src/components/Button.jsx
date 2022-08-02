const PrimaryButton = ({ children, onClick }) => {
    return (
        <button
            onClick={onClick}
            className='text-[14px] md:text-lg text-white bg-[#6DAEDB] rounded font-medium px-[6px] py-[2px] md:px-2 md:py-1 leading-6'
        >
            {children}
        </button>
    );
};

const SecondaryButton = ({ children, onClick }) => {
    return (
        <button
            onClick={onClick}
            className='text-[14px] md:text-lg text-[#626262] bg-[#D9D9D9] rounded font-medium px-[6px] py-[2px] md:px-2 md:py-1 leading-6'
        >
            {children}
        </button>
    );
};

export { PrimaryButton, SecondaryButton };
