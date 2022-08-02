import DateLabel from './DateLabel';
import AddEventBtn from './AddEventBtn';
import EventList from './EventList';

const CalCard = ({
    date,
    sameMonth,
    today,
    events,
    handleNewEvent,
    handleUpdateEvent,
}) => {
    const addCalEvent = () => {
        handleNewEvent(date);
    };

    return (
        <div className='w-full h-full border-[0.5px] group relative flex flex-col'>
            <AddEventBtn handleClick={addCalEvent} />
            <DateLabel
                today={today}
                sameMonth={sameMonth}
                handleClick={(e) => {
                    if (window.innerWidth < 768) {
                        addCalEvent();
                    }
                }}
            >
                {date.getDate()}
            </DateLabel>
            <EventList events={events} handleUpdateEvent={handleUpdateEvent} />
        </div>
    );
};

export default CalCard;
