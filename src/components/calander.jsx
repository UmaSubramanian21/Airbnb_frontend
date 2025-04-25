
// CalendarComponent.jsx
import React from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

const CalendarComponent = ({ selectionRange, onSelect }) => {
    return (
        <div className="absolute top-20 z-50 shadow-lg rounded-lg bg-white">
            <DateRange
                ranges={[selectionRange]}
                onChange={onSelect}
                minDate={new Date()}
                rangeColors={['#FD5B61']}
            />
        </div>
    );
};

export default CalendarComponent;
