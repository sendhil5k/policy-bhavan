
import React, {useState} from 'react'
import SubmitButton from './SubmitButton';
import { NAME_AND_ADDRESS } from '../constants';
import { Link } from 'react-router-dom';
import "./Header.css"; // Import the CSS file

const MainPage = () => {
  // State to track open status of each card
  const [openCards, setOpenCards] = useState([true, true, true]);

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
    <>
    <div className="section card-link">
      <div className="section-title" onClick={() => toggleCard(0)}>
        <div>Links</div>
        <div>{openCards[0] ? (<i className="arrow down"></i>) : (<i className="arrow up"></i>)}</div>
      </div>
      {openCards[0] && (<div>
        <div className="ins2-col">
           <Link to="/newpolicy" >New Account</Link>
        </div>
        <div className="ins2-col">
          <a href="#">Add Policy</a>
        </div>
        <div className="ins2-col">
          <a href="#">Policy change</a>
        </div>
        <div className="ins2-col">
          <a href="#">Pull saved transactions</a>
        </div>
        <div className="ins2-col">
          <a href="#">View Completed transactions</a>
        </div>
        <div className="ins2-col">
          <a href="#">View Voided transactions</a>
        </div>
      </div>)}
    </div>

    <div className="section">
      <div id="securitySectionTitle" className="section-title" onClick={() => toggleCard(1)}>
        <div>Search</div>
        <div>{openCards[1] ? (<i className="arrow down"></i>) : (<i className="arrow up"></i>)}</div>
      </div>
      {openCards[1] && (<div>
        <div className="ins3-col">
          <label className="label" htmlFor="fname">
            Policy:
          </label>
          <br />
          <input className="field" type="text" id="fname" name="fname" />
          <h4 style={{ textDecoration: "underline", fontWeight: '500' }}>Recent Activities</h4>
          <ul className="dblock">
            <li><a href="#">12345678</a></li>
            <li><a href="#">87634521</a></li>
            <li><a href="#">43512332</a></li>
          </ul>
        </div>
        <div className="ins3-col">
          <label className="label" htmlFor="fname">
            Account:
          </label>
          <br />
          <input className="field" type="text" id="fname" name="fname" /><br />
          <ul className="dblock">
          <li><a href="#">12345678</a></li>
            <li><a href="#">87634521</a></li>
            <li><a href="#">43512332</a></li>
          </ul>
        </div>
        <div className="ins3-col">
          <label className="label" htmlFor="fname">
            Transaction:
          </label>
          <br />
          <input className="field" type="text" id="fname" name="fname" /><br />
          <ul className="dblock">
          <li><a href="#">12345678</a></li>
            <li><a href="#">87634521</a></li>
            <li><a href="#">43512332</a></li>
          </ul>
        </div>

        <form className="btnpanel" onSubmit={(e) => e.preventDefault()}>
          <SubmitButton text="Submit" onClick={handleSubmit} />
        </form>
      </div>)}
    </div>

    <div className="section">
      <div className="section-title" onClick={() => toggleCard(2)}>
        <div>{NAME_AND_ADDRESS}</div>
        <div>{openCards[2] ? (<i className="arrow down"></i>) : (<i className="arrow up"></i>)}</div>
      </div>
      {openCards[2] && (<div>
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
            Phone:
          </label>
          <br />
          <input className="field" type="text" id="fname" name="fname" />
        </div>
        <div className="ins2-col">
          <label className="label" htmlFor="fname">
            Email Address:
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
            State/Province:
          </label>
          <br />
          <input className="field" type="text" id="fname" name="fname" />
        </div>
        <div className="ins2-col">
          <label className="label" htmlFor="fname">
            Zip Code:
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
export default MainPage;
