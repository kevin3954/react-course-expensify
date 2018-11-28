import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByHighAmount, sortByLowAmount, setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilters extends React.Component {
    state = {

        //for the daterange picker
        calendarFocused: null

    };

    onDatesChange = ({ startDate, endDate }) => {

        //set the start dates to the newly picked date
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));

    };

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.props.filters.text}
                    onChange={(e) => {
                        this.props.dispatch(setTextFilter(e.target.value));
                    }}
                />
                <select
                    value={this.props.filters.sortBy}
                    onChange={(e) => {
                        if (e.target.value === 'date') {
                            this.props.dispatch(sortByDate());
                        } else if (e.target.value === 'sortByHighAmount') {
                            this.props.dispatch(sortByHighAmount());
                        } else if (e.target.value === 'sortByLowAmount') {
                            this.props.dispatch(sortByLowAmount());
                        }
                    }}>
                    <option value="date">Date</option>
                    <option value="sortByHighAmount">Amount(Highest First)</option>
                    <option value="sortByLowAmount">Amount(Lowest First)</option>
                </select>

                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />

            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseListFilters);
