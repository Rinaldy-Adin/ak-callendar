import MonthNav from './MonthNav';
import CalBoard from './CalBoard';
import { useEffect, useState } from 'react';
import AddEventModal from './AddEventModal';
import UpdateEventModal from './UpdateEventModal';
import { v4 as uuid } from 'uuid';

const Calendar = () => {
    const currDate = new Date();

    const [month, setMonth] = useState(currDate.getMonth());
    const [year, setYear] = useState(currDate.getFullYear());
    const [newEventDate, setNewEventDate] = useState(undefined);
    const [updateEventEvt, setUpdateEventEvt] = useState(undefined);

    const [eventData, setEventData] = useState([]);

    useEffect(() => {
        let events;

        if (localStorage.getItem('events') === null) {
            events = [
                {
                    timestamp: new Date(2022, 7, 4),
                    name: 'Badminton',
                    description: 'Badminton at GOR PDAM 8-11am',
                    id: '952aa514-dc20-4f63-be40-4305e78c16ba',
                },
            ];
        } else {
            events = JSON.parse(localStorage.getItem('events'));

            for (let i = 0; i < events.length; i++) {
                events[i].timestamp = new Date(events[i].timestamp);
            }
        }

        setEventData(events);
    }, []);

    const updateLocal = (data) => {
        localStorage.setItem('events', JSON.stringify(data));
    };

    const handlePrevMonth = () => {
        if (month === 0) {
            setYear(year - 1);
            setMonth(11);
            return;
        }

        setMonth(month - 1);
    };

    const handleNextMonth = () => {
        if (month === 11) setYear(year + 1);
        setMonth((month + 1) % 12);
    };

    const handleNewEvent = (defaultDate) => {
        setNewEventDate(defaultDate);
    };

    const handleUpdateEvent = (id) => {
        const event = eventData.find((event) => event.id === id);
        setUpdateEventEvt(event);
    };

    const handleCloseModal = () => {
        setNewEventDate(undefined);
        setUpdateEventEvt(undefined);
    };

    const addEvent = (date, name, description) => {
        const newEventData = [
            ...eventData,
            {
                timestamp: date,
                name: name,
                description: description,
                id: uuid(),
            },
        ];

        setEventData(newEventData);
        updateLocal(newEventData);
    };

    const updateEvent = (date, name, description) => {
        const id = updateEventEvt.id;
        const currIdx = eventData.findIndex((evt) => evt.id === id);

        const newEventData = [...eventData];
        newEventData[currIdx] = {
            timestamp: date,
            name: name,
            description: description,
            id: id,
        };

        setEventData(newEventData);
        updateLocal(newEventData);
    };

    const deleteEvent = () => {
        const id = updateEventEvt.id;
        const currIdx = eventData.findIndex((evt) => evt.id === id);

        const newEventData = [...eventData];
        newEventData.splice(currIdx, 1);

        setEventData(newEventData);
        updateLocal(newEventData);
    };

    return (
        <div className='w-screen lg:w-[950px] xl:w-[1200px] 2xl:w-[1500px] mx-auto px-8 py-4 lg:px-12 lg:py-6'>
            {!!newEventDate ? (
                <AddEventModal
                    defaultDate={newEventDate}
                    closeModal={handleCloseModal}
                    addEvent={addEvent}
                />
            ) : (
                <></>
            )}
            {!!updateEventEvt ? (
                <UpdateEventModal
                    event={updateEventEvt}
                    closeModal={handleCloseModal}
                    updateEvent={updateEvent}
                    deleteEvent={deleteEvent}
                />
            ) : (
                <></>
            )}
            <MonthNav
                handlePrevMonth={handlePrevMonth}
                handleNextMonth={handleNextMonth}
                month={month}
                year={year}
            />
            <CalBoard
                month={month}
                year={year}
                currDate={currDate}
                eventData={eventData}
                handleUpdateEvent={handleUpdateEvent}
                handleNewEvent={handleNewEvent}
            />
        </div>
    );
};

export default Calendar;
