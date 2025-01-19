import React, {useState} from 'react';
import SubmitButton from './SubmitButton';
import "./Header.css"; // Import the CSS file

const NewPolicy = () => {
  // State to track open status of each card
    const [openCards, setOpenCards] = useState([true, true]);
  
    // Function to toggle a card
    const toggleCard = (index) => {
      setOpenCards((prev) =>
        prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
      );
    };
  
    // submit button action 
    const handleSubmit = () => {
      alert('Form submitted!');
    };
  return (
    <><div className="section">
    <div className="section-title" onClick={() => toggleCard(0)}>
      <div>Policy Holder Details</div>
      <div>{openCards[0] ? (<i className="arrow down"></i>) : (<i className="arrow up"></i>)}</div>
    </div>
    {openCards[0] && (<div>
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
    </div>)}
  </div>

  <div className="section">
    <div className="section-title" onClick={() => toggleCard(1)}>
      <div>Current Insurance</div>
      <div>{openCards[1] ? (<i className="arrow down"></i>) : (<i className="arrow up"></i>)}</div>
    </div>
    {openCards[1] && (<div>
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
    </div>)}
  </div>
</>
  )
}
export default NewPolicy;
