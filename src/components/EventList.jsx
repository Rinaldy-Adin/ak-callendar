import styled from 'styled-components';

const EventList = ({ events, handleUpdateEvent }) => {
    return (
        <EventListContainer>
            {events.map(({ name, id }) => {
                return (
                    <EventItem
                        name={name}
                        id={id}
                        handleUpdateEvent={handleUpdateEvent}
                        key={`event-${id}`}
                    />
                );
            })}
        </EventListContainer>
    );
};

const EventItem = ({ name, id, handleUpdateEvent }) => {
    const handleClick = () => {
        handleUpdateEvent(id);
    };

    return (
        <div
            onClick={handleClick}
            className='bg-[#5A9EC5] truncate w-full px-1 mb-1 md:px-2 py-1 md:py-[2px] text-white rounded-sm md:rounded text-[12px] text-base font-medium hover:cursor-pointer'
        >
            {name}
        </div>
    );
};

const EventListContainer = styled.div`
    margin: 8px 4px 0 4px;
    flex: 1;
    overflow-y: scroll;
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
        display: none;
    }
`;

export default EventList;
