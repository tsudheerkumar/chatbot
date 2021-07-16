class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleTimeSheet = () => {
    const message = this.createChatBotMessage(
      
      "Fantastic, I've got the following resources for you on TimeSheet:",
      {
        widget: "timesheetLinks",
      }
    );
    this.updateChatbotState(message);
  };
  handleItConnect = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on IT Connect:",
      {
        widget: "itconnectLinks",
      }
    );
    this.updateChatbotState(message);
  };
  handleHrConnect = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on HR Connect:",
      {
        widget: "hrconnectLinks",
      }
    );
    this.updateChatbotState(message);
  };
  handleWorkday = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on WorkDay:",
      {
        widget: "workdayLinks",
      }
    );
    this.updateChatbotState(message);
  };
  handleDxcUniversity = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on DXC University:",
      {
        widget: "universityLinks",
      }
    );
    this.updateChatbotState(message);
  };
  handleExpenseReport = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on Expense Report:",
      {
        widget: "expenseLinks",
      }
    );
    this.updateChatbotState(message);
  };
  handleHealthAndSafety = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on Health & Safety:",
      {
        widget: "healthLinks",
      }
    );
    this.updateChatbotState(message);
  };
  handlePayroll = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you on Pay Roll:",
      {
        widget: "payrollLinks",
      }
    );
    this.updateChatbotState(message);
  };
  

  //chat functions

  payroll = () => {
    const message = this.createChatBotMessage(
      "Click the below item and Login to payroll portal",
      {
        widget: "payrollLinks",
      }
    );

    this.updateChatbotState(message);
  };
  prudentplus = () => {
    const message = this.createChatBotMessage(
      "Click the below item and Login to prudent portal",
      {
        widget: "healthLinks",
      }
    );

    this.updateChatbotState(message);
  };
  concurexpense = () => {
    const message = this.createChatBotMessage(
      "Click the below item and Login to Concur portal",
      {
        widget: "expenseLinks",
      }
    );

    this.updateChatbotState(message);
  };
  dxcuniversity = () => {
    const message = this.createChatBotMessage(
      "Click the below item and Login to DXC University",
      {
        widget: "universityLinks",
      }
    );

    this.updateChatbotState(message);
  };
  workday = () => {
    const message = this.createChatBotMessage(
      "Click the below item and Login to Workday",
      {
        widget: "workdayLinks",
      }
    );

    this.updateChatbotState(message);
  };
  hrconnect = () => {
    const message = this.createChatBotMessage(
      "Click the below item and Login to HR Connect",
      {
        widget: "hrconnectLinks",
      }
    );

    this.updateChatbotState(message);
  };
  itconnect = () => {
    const message = this.createChatBotMessage(
      "Click the below item and Login to IT Connect",
      {
        widget: "itconnectLinks",
      }
    );

    this.updateChatbotState(message);
  };

  timesheet = () => {
    const message = this.createChatBotMessage(
      "Click the below item and Login to CATW",
      {
        widget: "timesheetLinks",
      }
    );

    this.updateChatbotState(message);
  };
  thanks = () => {
    const message = this.createChatBotMessage(
      "Have a Good Day ahead!",
      {
        widget: "",
      }
    );

    this.updateChatbotState(message);
  };

  updateChatbotState(message) {
    // NOTICE: This function is set in the constructor, and is passed in from the top level Chatbot component. The setState function here actually manipulates the top level state of the Chatbot, so it's important that we make sure that we preserve the previous state.

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;