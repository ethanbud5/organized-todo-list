import React, { Component } from 'react';

class AccordionSection extends Component {

  onClick = () => {
    this.props.onClick(this.props.label);
  };
  
  render() {
    const {
      onClick,
      props: { isOpen, label },
    } = this;


    return (
      <div
        style={{
          background: isOpen ? 'gray' : 'gray',
          borderRadius:"4px"
        //   border: '1px solid #008f68',
        //   padding: '5px 10px',
        //   width:"80vw"
        }}
      >
        <div onClick={onClick} style={{ cursor: 'pointer' }} className="project_card">
          {label}
          <div style={{ float: 'right' }}>
            {!isOpen && <span>&#9650;</span>}
            {isOpen && <span>&#9660;</span>}
          </div>
        </div>
        {isOpen && (
          <div
            style={{
            //   background: 'gray',
              marginTop: 10,
              padding: '10px 20px',
            }}
            className="inside_card"
          >
            {this.props.children}
          </div>
        )}
      </div>
    );
  }
}

export default AccordionSection;