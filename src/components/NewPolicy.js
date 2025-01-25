import React from 'react';
import SubmitButton from './SubmitButton';
import Accordion from "./accordion";
import TabContent from './TabContent';
import "./Header.css"; // Import the CSS file

const NewPolicy = () => {

    // submit button action 
    const handleSubmit = () => {
      alert('Form submitted!');
    };
  return (
    <>
    <Accordion title="Policy Holder Details">
    <div>
      <div className="ins2-col">
        <label className="label" htmlFor="fname">
          First Name:
        </label>
        <br />
        <input className="field" type="text" id="fname" name="fname" />
      </div>
      <div className="ins2-col">
        <label className="label" htmlFor="fname">
          Last Name:
        </label>
        <br />
        <input className="field" type="text" id="fname" name="fname" />
      </div>
      <div className="ins2-col">
        <label className="label" htmlFor="fname">
        LicenseNumber:
        </label>
        <br />
        <input className="field" type="text" id="fname" name="fname" />
      </div>
      <div className="ins2-col">
        <label className="label" htmlFor="fname">
        LicenseState:
        </label>
        <br />
        <input className="field" type="text" id="fname" name="fname" />
      </div>
      <div className="ins2-col">
        <label className="label" htmlFor="fname">
          Address Line 1:
        </label>
        <br />
        <input className="field" type="text" id="fname" name="fname" />
      </div>
      <div className="ins2-col">
        <label className="label" htmlFor="fname">
          Address Line 2:
        </label>
        <br />
        <input className="field" type="text" id="fname" name="fname" />
      </div>
      <div className="ins2-col">
        <label className="label" htmlFor="fname">
          City:
        </label>
        <br />
        <input className="field" type="text" id="fname" name="fname" />
      </div>
      <div className="ins2-col">
        <label className="label" htmlFor="fname">
          State:
        </label>
        <br />
        <input className="field" type="text" id="fname" name="fname" />
      </div>
      <div className="ins2-col">
        <label className="label" htmlFor="fname">
          ZipCode:
        </label>
        <br />
        <input className="field" type="text" id="fname" name="fname" />
      </div>
      <form className="btnpanel" onSubmit={(e) => e.preventDefault()}>
        <SubmitButton text="Submit" onClick={handleSubmit} />
      </form>
    </div>
    </Accordion>
    
    <Accordion title="Current Insurance">
    <div>
      <div className="ins1-col">
        <label className="label" htmlFor="fname">
        CurrentCarrier:
        </label>
        <br />
        <input className="field" type="text" id="fname" name="fname" />
      </div>
      <div className="ins1-col">
        <label className="label" htmlFor="fname">
        CoverageStartDate:
        </label>
        <br />
        <input className="field" type="text" id="fname" name="fname" />
      </div>
      <div className="ins1-col">
        <label className="label" htmlFor="fname">
        CoverageEndDate:
        </label>
        <br />
        <input className="field" type="text" id="fname" name="fname" />
      </div>
      
      <form className="btnpanel" onSubmit={(e) => e.preventDefault()}>
        <SubmitButton text="Submit" onClick={handleSubmit} />
      </form>
    </div>
    </Accordion>

    <Accordion title="Drivers">
        <div><TabContent></TabContent></div>
    </Accordion>
</>
  )
}
export default NewPolicy;
