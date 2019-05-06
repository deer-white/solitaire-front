import React, { Component } from "react";

export default class Accordion extends Component<
  AccordionProps,
  AccordionState
> {
  state = {
    open: false
  };
  render() {
    if (this.state.open) {
      return (
        <>
          {this.props.children}
          <br />
          <br />
          <div onClick={() => this.setState({ open: false })}>Close</div>
        </>
      );
    }
    return (
      <>
        {this.props.preview}
        <br />
        <div
          onClick={() => {
            this.setState({ open: true });
          }}
        >
          Open
        </div>
      </>
    );
  }
}
interface AccordionProps {
  children: React.ReactNode;
  preview: React.ReactNode;
}
interface AccordionState {
  open: boolean;
}
