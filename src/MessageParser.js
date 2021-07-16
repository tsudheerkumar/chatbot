class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
      if (lowerCaseMessage.includes("catw")) {
        this.actionProvider.timesheet();
      }
      if (lowerCaseMessage.includes("it")) {
        this.actionProvider.itconnect();
      }
      if (lowerCaseMessage.includes("hr")) {
        this.actionProvider.hrconnect();
      }
      if (lowerCaseMessage.includes("workday")) {
        this.actionProvider.workday();
      }
      if (lowerCaseMessage.includes("university")) {
        this.actionProvider.dxcuniversity();
      }
      if (lowerCaseMessage.includes("expense")) {
        this.actionProvider.concurexpense();
      }
      if (lowerCaseMessage.includes("health")) {
        this.actionProvider.prudentplus();
      }
      if (lowerCaseMessage.includes("payroll")) {
        this.actionProvider.payroll();
      }
      if (lowerCaseMessage.includes("thank")) {
        this.actionProvider.thanks();
      }
    }
  }
  
  export default MessageParser;