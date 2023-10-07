
const SideBar = ({ isOpen }) => {
    return (
      <div className={`SideBar ${isOpen ? 'open' : ''}`}>
        {<h1>TEST</h1>}
      </div>
    );
  };

export default SideBar
