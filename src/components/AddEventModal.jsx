import ModalWrapper from './ModalWrapper';
import { MdClose } from 'react-icons/md';
import { PrimaryButton, SecondaryButton } from './Button';
import { useEffect, useState } from 'react';

const AddEventModal = ({ defaultDate, closeModal, addEvent }) => {
    const [eventName, setEventName] = useState('');
    const [eventDesc, setEventDesc] = useState('');
    const [eventDate, setEventDate] = useState(defaultDate);

    const defaultDateValue = defaultDate.toISOString().substring(0, 10);

    const handleClose = (e) => {
        closeModal();
    };

    const handleChangeDate = (e) => {
        setEventDate(new Date(e.target.value));
    };

    const handleAddEvent = () => {
        if (eventName !== '') {
            addEvent(eventDate, eventName, eventDesc);
            closeModal();
        }
    };

    return (
        <ModalWrapper>
            <div className='w-[320px] md:w-[540px] bg-white rounded-md relative pt-3 pb-7 px-4 md:px-8 flex flex-col items-center'>
                <Close handleClose={handleClose} />
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
                            e.preventDefault();
                            setEventName(e.target.value);
                        }}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                                handleAddEvent();
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
                            e.preventDefault();
                            setEventDesc(e.target.value);
                        }}
                        className='text-[14px] md:text-base h-28 py-2 px-2 w-full rounded border border-black'
                    />
                </div>
                <div className='flex gap-x-6 mt-7'>
                    <PrimaryButton onClick={handleAddEvent}>Add</PrimaryButton>
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

const Close = ({ handleClose }) => {
    return (
        <div className='absolute right-4 top-4 flex gap-x-2 text-[#999999]'>
            <button onClick={handleClose}>
                <MdClose size={20} className='md:hidden outline-none' />
                <MdClose size={32} className='hidden md:block outline-none' />
            </button>
        </div>
    );
};

export default AddEventModal;
