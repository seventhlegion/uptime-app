import { FC } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface DateTimePickerProps {
	selectedDate: Date | null;
	onChange: (date: Date | null) => void;
}

const DateTimePicker: FC<DateTimePickerProps> = ({
	selectedDate,
	onChange,
}) => {
	return (
		<DatePicker
			selected={selectedDate}
			onChange={onChange}
			showTimeSelect
			timeFormat="HH:mm"
			timeIntervals={15}
			timeCaption="time"
			dateFormat="MMMM d, yyyy h:mm aa"
		/>
	);
};

export default DateTimePicker;
