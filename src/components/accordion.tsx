import { FC, useState } from "react";
import './accordion.css';
type accordionProps = {
  title: string;
  children: React.ReactNode;
  isOpenDefault?: boolean;
}
const Accordion:FC<accordionProps> = ({ title, children, isOpenDefault = false } ) => {
  const [isOpen, setIsOpen] = useState<boolean>(isOpenDefault);

  const toggleAccordion = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <div>{title}</div>
        <div>{isOpen ? <i className="arrow down"></i> : <i className="arrow up"></i>}</div>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

export default Accordion;