import ModalWrapper from './ModalWrapper';
import { MdClose, MdDeleteOutline } from 'react-icons/md';
import { PrimaryButton, SecondaryButton } from './Button';
import { useState } from 'react';
import { toIsoString } from '../helpers/DateFunctions';

const UpdateEventModal = ({ event, closeModal, updateEvent, deleteEvent }) => {
    const [eventName, setEventName] = useState(event.name);
    const [eventDesc, setEventDesc] = useState(event.description);
    const [eventDate, setEventDate] = useState(event.timestamp);

    const defaultDateValue = toIsoString(event.timestamp).slice(0, 10);

    const handleClose = (e) => {
        e.preventDefault();
        closeModal();
    };

    const handleChangeDate = (e) => {
        setEventDate(new Date(e.target.value));
    };

    const handleUpdateEvent = () => {
        if (eventName !== '') {
            updateEvent(eventDate, eventName, eventDesc);
            closeModal();
        }
    };

    const handleDelete = () => {
        deleteEvent();
        closeModal();
    };

    return (
        <ModalWrapper>
            <div className='w-[320px] md:w-[540px] bg-white rounded-md relative pt-3 pb-7 px-4 md:px-8 flex flex-col items-center'>
                <DeleteAndClose
                    handleDelete={handleDelete}
                    handleClose={handleClose}
                />
                <EventTitle>
                    {eventName === '' ? 'Enter Event Name' : eventName}
                </EventTitle>
                <input
                    type='date'
                    className='w-[140px] mt-7 outline-none md:text-base'
                    name='event-date'
                    defaultValue={defaultDateValue}
                    onChange={handleChangeDate}
                />
                <div className='w-full mt-4'>
                    <label className='text-[14px] md:text-base mb-1'>
                        Name
                    </label>
                    <input
                        type='text'
                        value={eventName}
                        onChange={(e) => {
                            setEventName(e.target.value);
                        }}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                                handleUpdateEvent();
                            }
                        }}
                        className='text-[14px] md:text-base py-1 px-2 w-full rounded border border-black'
                    />
                </div>
                <div className='w-full mt-4'>
                    <label className='text-[14px] md:text-base mb-1'>
                        Description
                    </label>
                    <textarea
                        value={eventDesc}
                        onChange={(e) => {
                            setEventDesc(e.target.value);
                        }}
                        className='text-[14px] md:text-base h-28 py-2 px-2 w-full rounded border border-black'
                    />
                </div>
                <div className='flex gap-x-6 mt-7'>
                    <PrimaryButton onClick={handleUpdateEvent}>
                        Update
                    </PrimaryButton>
                    <SecondaryButton onClick={closeModal}>
                        Cancel
                    </SecondaryButton>
                </div>
            </div>
        </ModalWrapper>
    );
};

const EventTitle = ({ children }) => {
    return (
        <>
            <h4 className='max-w-[170px] text-center md:hidden'>{children}</h4>
            <h2 className='max-w-[320px] text-center hidden md:block'>
                {children}
            </h2>
        </>
    );
};

const DeleteAndClose = ({ handleClose, handleDelete }) => {
    return (
        <div className='absolute right-4 top-4 flex gap-x-2 text-[#999999]'>
            <button onClick={handleDelete}>
                <MdDeleteOutline size={20} className='md:hidden outline-none' />
                <MdDeleteOutline
                    size={32}
                    className='hidden md:block outline-none'
                />
            </button>
            <button onClick={handleClose}>
                <MdClose size={20} className='md:hidden outline-none' />
                <MdClose size={32} className='hidden md:block outline-none' />
            </button>
        </div>
    );
};

export default UpdateEventModal;
