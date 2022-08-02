const AddEventBtn = ({ className, handleClick }) => {
    return (
        <button
            className={
                'opacity-0 group-hover:opacity-100 transition-opacity absolute left-2 top-2 ' +
                className
            }
            onClick={handleClick}
        >
            <h4 className='bg-[#E2E2E2] text-[#939393] px-2 rounded hidden md:block'>
                +
            </h4>
        </button>
    );
};

export default AddEventBtn;
