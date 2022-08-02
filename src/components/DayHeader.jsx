const DayHeader = () => {
    return (
        <div className='w-full grid grid-cols-7 justify-items-center py-2'>
            <DayResponsive>Mon</DayResponsive>
            <DayResponsive>Tue</DayResponsive>
            <DayResponsive>Wed</DayResponsive>
            <DayResponsive>Thu</DayResponsive>
            <DayResponsive>Fri</DayResponsive>
            <DayResponsive>Sat</DayResponsive>
            <DayResponsive>Sun</DayResponsive>
        </div>
    );
};

const DayResponsive = ({ children }) => {
    return (
        <div className='inline-block'>
            <h3 className='hidden xl:block'>{children}</h3>
            <h4 className='hidden md:block xl:hidden'>{children}</h4>
            <p className='md:hidden'>{children}</p>
        </div>
    );
};

export default DayHeader;
