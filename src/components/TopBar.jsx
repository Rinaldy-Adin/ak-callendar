const TopBar = () => {
    return (
        <div className='px-6 py-2 md:px-8 md:py-3 xl:px-12 xl:py-4 w-screen shadow'>
            <h2 className='hidden xl:block'>📅 My Calendar</h2>
            <h3 className='hidden md:block xl:hidden'>📅 My Calendar</h3>
            <h4 className='md:hidden'>📅 My Calendar</h4>
        </div>
    );
};

export default TopBar;
