const DateLabel = ({ children, sameMonth, today, handleClick }) => {
    const divStyle = !sameMonth ? { color: '#C3C3C3' } : { color: 'black' };
    const labelStyleSm = !!today
        ? {
              backgroundColor: '#E34949',
              width: '21px',
              height: '21px',
              borderRadius: '11px',
              color: 'white',
              textAlign: 'center',
              fontSize: '12px',
              paddingTop: '4px',
          }
        : { textAlign: 'center', fontSize: '12px', paddingTop: '4px' };

    const labelStyleMd = !!today
        ? {
              backgroundColor: '#E34949',
              width: '39px',
              height: '39px',
              borderRadius: '20px',
              color: 'white',
              textAlign: 'center',
              fontSize: '18px',
              fontWeight: 'bold',
              paddingTop: '6px',
              margin: '2px 4px 0 0',
          }
        : {
              width: '39px',
              height: '39px',
              fontWeight: 'bold',
              margin: '2px 4px 0 0',
              padding: '8px 16px 0 4px',
          };

    return (
        <div
            style={divStyle}
            className='flex flex-col items-center md:items-end'
            onClick={handleClick}
        >
            <p
                style={labelStyleSm}
                className='md:hidden mx-auto hover:cursor-pointer md:hover:cursor-default'
            >
                {children}
            </p>
            <h4
                style={labelStyleMd}
                className='font-bold hidden md:block text-right'
            >
                {children}
            </h4>
        </div>
    );
};

export default DateLabel;
