import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './mainPage';
import Notfound from './notFound';
import About from "./aboutus";
import Contact from "./contactus";
import NewPolicy from './NewPolicy';
import TransactionTable from './TransactionTable';
import React from 'react';

interface WithRouterProps {
  history: ReturnType<typeof useNavigate>;
  [key: string]: any;
}

type ComponentType<P = {}> = React.ComponentType<P>;

export const withRouter = <P extends object>(Component: ComponentType<P & WithRouterProps>) => {
  const Wrapper: React.FC<Omit<P, keyof WithRouterProps>> = (props) => {
    const history = useNavigate();
    return <Component history={history} {...(props as P)} />;
  };
  return Wrapper;
};
function MainLayout() {
  return (
    <Routes>
      <Route path="/" caseSensitive={false} element={<Home />} />
      <Route path="/about" caseSensitive={false} element={<About />} />
      <Route path="/contact" caseSensitive={false} element={<Contact />} />
      <Route path="/newpolicy" caseSensitive={false} element={<NewPolicy />} />
      <Route path="/transactiontable" caseSensitive={false} element={<TransactionTable />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  )
}
export default withRouter(MainLayout);
