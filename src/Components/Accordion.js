import React, { Component } from 'react';

import AccordionSection from './AccordionSection';

class Accordion extends Component {

  constructor(props) {
    super(props);

    const openSections = {};

    this.state = { openSections };
  }

  onClick = label => {
    const {
      state: { openSections },
    } = this;

    const isOpen = !!openSections[label];

    this.setState({
      openSections: {
        [label]: !isOpen
      }
    });
  };

  render() {
    const {
      onClick,
      props: { children },
      state: { openSections },
    } = this;

    return (
      <div className="projects_container">
        <div className="rounded_edges">
            
            {children.map((child,i) => (
                <AccordionSection
                isOpen={!!openSections[child.props.label]}
                label={child.props.label}
                onClick={onClick}
                key={i}
                >
                {child.props.children}
            </AccordionSection>
            ))}
        </div>
      </div>
    );
  }
}

export default Accordion;