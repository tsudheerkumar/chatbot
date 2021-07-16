import React from "react";

import { createChatBotMessage } from 'react-chatbot-kit';
import LearningOptions from "./LearningOptions";
import LinkList from "./LinkList";

const config = { 
  botName: "DXC Bot",
  initialMessages: [
    createChatBotMessage(`Hello ! Welcome to DXC.

    What brings you here today?
    `, {
        widget: "learningOptions",
      }),],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
        widgetName: "payrollLinks",
        widgetFunc: (props) => <LinkList {...props} />,
        props: {
          options: [
            {
              text: "Excelity",
              url:"https://ess.excelityglobal.com/index.jsp",
              id: 1,
            }
          ],
        },
      },
      {
        widgetName: "healthLinks",
        widgetFunc: (props) => <LinkList {...props} />,
        props: {
          options: [
            {
              text: "Prudent Plus",
              url:"https://prudentplus.co.in",
              id: 1,
            }
          ],
        },
      },
      {
        widgetName: "expenseLinks",
        widgetFunc: (props) => <LinkList {...props} />,
        props: {
          options: [
            {
              text: "Concur",
              url:"https://expenses.dxc.com ",
              id: 1,
            }
          ],
        },
      },
      {
        widgetName: "universityLinks",
        widgetFunc: (props) => <LinkList {...props} />,
        props: {
          options: [
            {
              text: "DXC Saba University",
              url:"https://dxc.sabacloud.com/",
              id: 1,
            }
          ],
        },
      },
      {
        widgetName: "workdayLinks",
        widgetFunc: (props) => <LinkList {...props} />,
        props: {
          options: [
            {
              text: "My Workday",
              url:"https://www.myworkday.com/dxctechnology/d/home.htmld",
              id: 1,
            }
          ],
        },
      },
      {
        widgetName: "hrconnectLinks",
        widgetFunc: (props) => <LinkList {...props} />,
        props: {
          options: [
            {
              text: "HR Connect",
              url:"https://dxchr.service-now.com/hrportal",
              id: 1,
            }
          ],
        },
      },
      {
        widgetName: "itconnectLinks",
        widgetFunc: (props) => <LinkList {...props} />,
        props: {
          options: [
            {
              text: "IT Connect",
              url:"https://help.dxc.com/",
              id: 1,
            }
          ],
        },
      },
      {
        widgetName: "timesheetLinks",
        widgetFunc: (props) => <LinkList {...props} />,
        props: {
          options: [
            {
              text: "CATW",
              url:"https://z4u0094.houston.dxccorp.net:4106/hps-ic-red",
              id: 1,
            }
          ],
        },
      },
      {
        widgetName: "thanksLinks",
        widgetFunc: (props) => <LinkList {...props} />,
        props: {
          options: [
            {
              text: "Have a nice Day!",
              url:"",
              id: 1,
            }
          ],
        },
      },
],
}

export default config