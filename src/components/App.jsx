import React from "react";
import { Button, Calendar, Input, Modal } from "./common"
import { Card } from "./Card"
import { Header } from "./Header"
import { Dashboard } from "./Dashboard"


export class App extends React.Component {
  render() {
    return(
      <div>
        {/* 
        <Button />
        <Card />
        <Input />
        <Header />
        <Modal />
        <Dashboard />
        <Calendar /> 
        */}
        <Button />
        <Input />
        <Calendar />


        <Card>
          /
        </ Card>


        <Modal>
          Something
        </ Modal>
      </div>
    )
  }
}

