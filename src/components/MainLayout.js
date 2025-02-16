import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './mainPage';
import Notfound from './notFound';
import About from "./aboutus";
import Contact from "./contactus";
import NewPolicy from './NewPolicy';
import TransactionTable from './TransactionTable';

export const withRouter = (Component) => {
  const Wrapper = (props) => {
      const history = useNavigate();
      return <Component history={history} {...props} />
  }
  return Wrapper;
}
function MainLayout() {
  return (
    <Routes>
      <Route exact path="/" caseSensitive={false} element={<Home />} />
      <Route path="/about" caseSensitive={false} element={<About />} />
      <Route path="/contact" caseSensitive={false} element={<Contact />} />
      <Route path="/newpolicy" caseSensitive={false} element={<NewPolicy />} />
      <Route path="/transactiontable" caseSensitive={false} element={<TransactionTable />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  )
}
export default withRouter(MainLayout);
