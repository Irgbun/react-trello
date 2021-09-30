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
        <Card>
          <div>
            todo
            <Input value={ this.state.value } onChange={ this.parent.changeValue } isVisible />
          </div>
          <div>
            <div>
              <Button onClick={ this.props.onClickAdd }>
                Добавить
              </Button>
              <Button onClick={ this.props.onClickCancel }>
                Отменить
              </Button>
            </div>
          </div>
        </ Card>


        <Modal>
          <Calendar />
        </ Modal>
      </div>
    )
  }
}

