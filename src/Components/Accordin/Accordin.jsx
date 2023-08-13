import React from "react";

const Accordin = () => {
  return (
    <div className="mx-auto w-1/2 mb-36">
      <p className="font-bold text-2xl mb-4 ml-2">FAQ</p>
      <div className="join join-vertical w-full">
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" checked="checked" />
          <div className="collapse-title text-xl font-medium">
            What is The time duration for the Course ?
          </div>
          <div className="collapse-content">
            <p>Our summer courses are 2-3 months.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            What type Class are there ?
          </div>
          <div className="collapse-content">
            <p>Check out our course section to check available classes.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            When our Sunshine Summer camp was founded ?
          </div>
          <div className="collapse-content">
            <p>It is founded between 1991-1992</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Who is the founder of the Sunshine Summer Camp ?
          </div>
          <div className="collapse-content">
            <p>The Founder of the Sunshine Camp Is James Howlet Logan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordin;
