const NavDropdown = React.createClass({
  handleSelect(selectedKey) {
    alert('selected ' + selectedKey);
  },

  render() {
    return (
      <Nav bsStyle='tabs' activeKey={1} onSelect={this.handleSelect}>
        <NavItem eventKey={1} href='/home'>NavItem 1 content</NavItem>
        <NavItem eventKey={2} title='Item'>NavItem 2 content</NavItem>
        <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
        <DropdownButton eventKey={4} title='Dropdown' navItem>
          <MenuItem eventKey='4.1'>Action</MenuItem>
          <MenuItem eventKey='4.2'>Another action</MenuItem>
          <MenuItem eventKey='4.3'>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey='4.4'>Separated link</MenuItem>
        </DropdownButton>
      </Nav>
    );
  }
});

ReactDOM.render(<NavDropdown />, mountNode);
