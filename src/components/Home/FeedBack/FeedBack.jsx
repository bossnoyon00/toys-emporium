import React from 'react';

const FeedBack = () => {
    return (
        <div className='border p-5 rounded border-red-200 '>
            <div className='text-center text-success text-3xl'>
                <p>We are here added Top Best seller feedback</p>
                <h2>Some  Seller Conversation</h2>
            </div>
            <div className=''>
                <div className="chat chat-start">
                    <div className="chat-bubble chat-bubble-primary">This Toy car emporium shop is best</div>
                </div>
                <div className="chat chat-end">
                    <div className="chat-bubble chat-bubble-info">Hey, Thanks for your best feedback.</div>
                </div>
                <div className="chat chat-start">
                    <div className="chat-bubble chat-bubble-secondary">Here my Toys all time sell and im many profitable </div>
                </div>
                <div className="chat chat-end">
                    <div className="chat-bubble chat-bubble-success">You have been given a great honor.</div>
                </div>
                <div className="chat chat-start">
                    <div className="chat-bubble chat-bubble-accent">Im very happy to this shop</div>
                </div>
                <div className="chat chat-start">
                    <div className="chat-bubble chat-bubble-accent">and Here al toy are beautiful</div>
                </div>


                <div className="chat chat-end">
                    <div className="chat-bubble chat-bubble-warning">To be on the Council at your age.</div>
                </div>
                <div className="chat chat-end">
                    <div className="chat-bubble chat-bubble-error">Again Thank you..always stay us</div>
                </div>

            </div>
            <div className='mt-9'>
                <h2 className='text-center mb-4 text-orange-300 text-3xl'>Here you can add your best feedback</h2>
                <div>
                    <input className='w-full mb-4 rounded p-5 border border-zinc-300' type="text" placeholder='Text Here' name="" id="" />
                </div>
                <input className='btn btn-outline w-full btn-accent' type="submit" value="Add feedback" />
            </div>
        </div>
    );
};

export default FeedBack;