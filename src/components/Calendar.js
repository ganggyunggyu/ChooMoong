/** @format */

import { useEffect, useState } from 'react';
// import DatePicker from 'react-date-picker';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
// import styled from './datePicker'
import 'react-datepicker/dist/react-datepicker.css';

function Calendar() {
  const [startDate, setStartDate] = useState(new Date('2023/01/01'));
  const [endDate, setEndDate] = useState(new Date('2023/10/23'));
  const ExampleCustomInput = ({ value, onClick }) => (
    <button className="example-custom-input" onClick={onClick}>
      {value}
    </button>
  );
  useEffect(() => {
    console.log(startDate);
    console.log(endDate);
  });

  return (
    <div
      style={{
        padding: '30px',
        display: 'flex',
        gap: ' 10px',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        locale={ko}
        dateFormat="yyyy년 MM월 dd일"
      />
      <DatePicker
        selected={endDate}
        onChange={date => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        locale={ko}
        dateFormat="yyyy년 MM월 dd일"
      />
    </div>
  );
}

export default Calendar;
