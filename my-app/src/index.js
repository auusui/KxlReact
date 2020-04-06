import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Menu, Container, Header, Icon, Image, Input, Segment, List, Grid, GridColumn } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item fitted>Kapahulu Express Laundromat</Menu.Item>
            <Menu.Item fitted position="right">
              <Input iconPosition="left"
                icon={<Icon name='search' inverted circular link />}
                placeholder='Search...'
              />
            </Menu.Item>
            {/*<Dropdown item text="MY CART 0" icon="shop">*/}
            {/*  <Dropdown.Menu>*/}
            {/*    <Dropdown.Item>My cart is currently empty.</Dropdown.Item>*/}
            {/*  </Dropdown.Menu>*/}
            {/*</Dropdown>*/}
          </Container>
        </Menu>
    )
  }
}

class LaundromatLogo extends React.Component {
  render() {
    return (
        <Image src='https://i.ya-webdesign.com/images/dryer-clipart-5.jpg' size='small' centered />
    )
  }
}

class MiddleMenu extends React.Component {
  state = { activeItem: 'read' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
        <div>
          <Menu borderless className="middlemenu" pointing secondary>
            <Menu.Item name='MUST READ' active={activeItem === 'read'} onClick={this.handleItemClick}/>
            <Menu.Item name='Create Appointment' active={activeItem === 'create '} onClick={this.handleItemClick}/>
            <Menu.Item name='Contact Us' active={activeItem === 'contact'} onClick={this.handleItemClick}/>
          </Menu>
          <Segment>

          </Segment>
        </div>
    )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="footermenu" >
          <Grid textAlign='center' columns={1}>
            <GridColumn textAlign='center'>
          <List.Item inverted>
            <List.Icon name='users' />
            <List.Content>Kapahulu Express Laundromat</List.Content>
          </List.Item>
          <List.Item inverted>
            <List.Icon name='marker' />
            <List.Content>611 Kapahulu Avenue, Honolulu, HI 96815</List.Content>
          </List.Item>
          <List.Item inverted>
            <List.Icon name='mail' />
            <List.Content>
              <a href='kapahululaundromat@gmail.com'>kapahululaundromat@gmail.com</a>
            </List.Content>
          </List.Item>
          <List.Item inverted>
            <List.Icon name='linkify' />
            <List.Content>
              <a href='https://www.yelp.com/biz/kapahulu-xpress-laundromat-honolulu'>yelp-kxl.com</a>
            </List.Content>
          </List.Item>
            </GridColumn>
          </Grid>
        </Menu>
    )
  }
}

class Laundromat extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <LaundromatLogo/>
          <MiddleMenu/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(<Laundromat/>, document.getElementById('root'));