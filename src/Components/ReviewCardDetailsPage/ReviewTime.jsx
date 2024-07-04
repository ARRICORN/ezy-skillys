'use client'
import moment from 'moment';

const ReviewTime = ({time}) => {
    return (
        <div>
            <span className='float-right'>
                <p className='text-sm font-medium font-poppins'>{moment(time).format('MMMM Do YYYY')}</p>
            </span>
        </div>
    );
};

export default ReviewTime;