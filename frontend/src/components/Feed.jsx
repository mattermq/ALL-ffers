import React from 'react';
import CardFull from './CardFull';
import CardShort from './CardShort';
import { useSelector } from 'react-redux';

function Feed() {
  const jobs = useSelector((state) => state.counter.jobs)
  console.log(jobs)
  if (jobs)
    return (
      <>
        {jobs.length > 0 && jobs.map(job => <CardFull key={job._id} job={job} />)}
      </>
    )
  else return null
}

export default Feed;
