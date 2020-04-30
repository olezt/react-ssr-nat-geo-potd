import React, { useState}  from 'react';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';
import 'react-dates/initialize';
// import 'react-dates/lib/css/_datepicker.css';

const DateSelectorComponent = ({date, setDate}) => {
    const [hasFocus, setHasFocus] = useState(false);

    return (
        <div className="dateSelector"  >
            <SingleDatePicker
                block
                noBorder
                isOutsideRange={(day) => day.isAfter(moment(new Date())) || day.isBefore(moment('01-01-2009'))} // 01-01-2009 starts the NatGeo archive
                date={date}
                onDateChange={date => date ? setDate(date) : null}
                displayFormat="DD-MM-YYYY"
                id="dateSelector"
                openDirection="down"
                numberOfMonths={1}
                focused={hasFocus}
                keepOpenOnDateSelect={true}
                onFocusChange={({ focused }) => setHasFocus(focused)}
            />
        </div>
    );
};

export default DateSelectorComponent;