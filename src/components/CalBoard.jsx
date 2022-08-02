import DayHeader from './DayHeader';
import CalCard from './CalCard';
import { generateArrayOfDates, exactSameDate } from '../helpers/DateFunctions';
import { useState } from 'react';

const CalBoard = ({
    month,
    year,
    currDate,
    eventData,
    handleUpdateEvent,
    handleNewEvent,
}) => {
    const arrOfDates = generateArrayOfDates(month, year);

    const arrOfEvents = arrOfDates.map((date) => {
        const events = eventData.filter((event) => {
            return exactSameDate(event.timestamp, date);
        });

        return { timestamp: date, events: events };
    });

    return (
        <div className='w-full'>
            <DayHeader />
            <div className='grid grid-cols-7 grid-rows-6 w-full h-[800px]'>
                {arrOfEvents.map(({ timestamp, events }, idx) => {
                    return (
                        <CalCard
                            date={timestamp}
                            today={exactSameDate(timestamp, currDate)}
                            sameMonth={timestamp.getMonth() === month}
                            handleNewEvent={handleNewEvent}
                            events={events}
                            key={`calcard-${idx}`}
                            handleUpdateEvent={handleUpdateEvent}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default CalBoard;
