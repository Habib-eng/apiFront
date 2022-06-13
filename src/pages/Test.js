import React from 'react'
import StatusCard from "components/StatusCard";
export default function Test() {
  return (
    <div className='mt-5'>
      <div className='px-3 md:px-8'>
        <div className='container mx-auto max-w-full'>
          <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4'>
            <StatusCard
              color='pink'
              icon='trending_up'
              title='Traffic'
              amount='350,897'
              percentage='3.48'
              percentageIcon='arrow_upward'
              percentageColor='green'
              date='Since last month'
            />
            <StatusCard
              color='orange'
              icon='groups'
              title='New Users'
              amount='2,356'
              percentage='3.48'
              percentageIcon='arrow_downward'
              percentageColor='red'
              date='Since last week'
            />
            <StatusCard
              color='purple'
              icon='paid'
              title='Sales'
              amount='924'
              percentage='1.10'
              percentageIcon='arrow_downward'
              percentageColor='orange'
              date='Since yesterday'
            />
            <StatusCard
              color='blue'
              icon='poll'
              title='Performance'
              amount='49,65%'
              percentage='12'
              percentageIcon='arrow_upward'
              percentageColor='green'
              date='Since last month'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
