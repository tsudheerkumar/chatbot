import React from "react";

import "./LearningOptions.css";

const LearningOptions = (props) => {
  const options = [
    {
      text: "Timesheet",
      handler: props.actionProvider.handleTimeSheet,
      id: 1,
    },
    { 
      text: "IT Connect Help Center",
     handler: props.actionProvider.handleItConnect,
      id: 2
     },
    {
       text: "HR Connect",
     handler:props.actionProvider.handleHrConnect,
     id: 3
     },
    {
       text: "Workday", 
    handler: props.actionProvider.handleWorkday,
    id: 4 
  },
    { text: "DXC University",
     handler: props.actionProvider.handleDxcUniversity,
     id: 5 },
    { text: "Expense Reporting", 
    handler: props.actionProvider.handleExpenseReport,
    id: 6 },
    { text: "Health & Safety (H&S)",
     handler: props.actionProvider.handleHealthAndSafety,
     id: 7 },
    { text: "Payroll", 
    handler: props.actionProvider.handlePayroll,
    id: 8 }
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return (
    <>
    <p className="time-stamp">{new Date().toLocaleString()}</p>
  <div className="learning-options-container">{optionsMarkup}</div>
  </>
  );
};

export default LearningOptions;