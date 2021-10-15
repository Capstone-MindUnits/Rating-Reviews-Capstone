import React from 'react'
import moment from 'moment'

function ReviewAllList({ reviewData }) {
    return (
        <div className='grid gap-4 overflow-y-scroll' style={{ height: '600px' }}>
            {reviewData && reviewData.map((review, key) => {
                return (
                    <div key={key} className='grid gap-3' style={{ height: '290px' }}>
                        <div className='' >
                            <div className='flex justify-between'>
                                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />
                                <ul className="flex">
                                    <li>
                                        <i className="fas fa-star fa-sm text-black-500 mr-1"></i>
                                    </li>
                                    <li>
                                        <i className="fas fa-star fa-sm text-black-500 mr-1"></i>
                                    </li>
                                    <li>
                                        <i className="fas fa-star fa-sm text-black-500 mr-1"></i>
                                    </li>
                                    <li>
                                        <i className="fas fa-star fa-sm text-black-500 mr-1"></i>
                                    </li>
                                    <li>
                                        <i className="far fa-star fa-sm text-black-500 mr-1"></i>
                                    </li>
                                </ul>
                                <div className='flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <p className='mr-2'>{review.reviewer_name}
                                    </p>
                                    <p>
                                        {moment(review.date).format('MMMM Do YYYY')}

                                    </p>
                                </div>
                            </div>

                        </div>
                        <div>
                            <p className='review-summary  font-bold'>
                                {review.summary}
                            </p>
                        </div>
                        <div>
                            <p>{review.body}</p>
                        </div>
                        {review.recommend &&
                            <p className='flex '>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" color='black' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <p>I recommend this product</p>
                            </p>
                        }
                        {review.response &&
                            <div className=''>
                                <p className=' font-bold'>
                                    Response:
                                </p>
                                <p className=''>{review.response}
                                </p>
                            </div>
                        }
                        <div className="details  flex ">
                            <p className=" mr-4 text-gray-600 flex">
                                Helpful?
                                <a href="#" className="underline ml-2 mr-1 ">
                                    Yes
                                </a>
                                (0)
                            </p>
                            <p className=" mr-4 text-gray-600 flex">|</p>
                            <p style={{ height: '15px' }}>
                                <a href="#" className="underline text-gray-600 ">
                                    Report
                                </a>
                            </p>
                        </div>
                        <p className='line mt-2' style={{ height: '10px' }}>
                        </p>
                    </div>




                )
            })}
        </div>
    )
}

export default ReviewAllList