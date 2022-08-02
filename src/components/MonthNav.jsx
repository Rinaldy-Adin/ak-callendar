import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const MonthNav = ({ handlePrevMonth, handleNextMonth, month, year }) => {
    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    return (
        <div className='w-full flex justify-between items-center'>
            <MonthTitle>
                {monthNames[month]} {year}
            </MonthTitle>
            <Navigator
                handlePrevMonth={handlePrevMonth}
                handleNextMonth={handleNextMonth}
            />
        </div>
    );
};

const MonthTitle = ({ children }) => {
    return (
        <>
            <h2 className='hidden xl:block'>{children}</h2>
            <h3 className='hidden md:block xl:hidden'>{children}</h3>
            <h4 className='md:hidden'>{children}</h4>
        </>
    );
};

const Navigator = ({ handlePrevMonth, handleNextMonth }) => {
    return (
        <div className='flex gap-6'>
            <button onClick={handlePrevMonth}>
                <MdChevronLeft size={35} className='md:hidden' />
                <MdChevronLeft
                    size={45}
                    className='hidden md:block xl:hidden'
                />
                <MdChevronLeft size={60} className='hidden xl:block' />
            </button>
            <button onClick={handleNextMonth}>
                <MdChevronRight size={35} className='md:hidden' />
                <MdChevronRight
                    size={45}
                    className='hidden md:block xl:hidden'
                />
                <MdChevronRight size={60} className='hidden xl:block' />
            </button>
        </div>
    );
};

export default MonthNav;
