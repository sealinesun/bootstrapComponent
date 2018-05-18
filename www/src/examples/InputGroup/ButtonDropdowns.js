<>
  <InputGroup className="mb-3">
    <DropdownButton
      as={InputGroup.Prepend}
      variant="outline-secondary"
      title="Dropdown"
    >
      <Dropdown.Item href="#">Action</Dropdown.Item>
      <Dropdown.Item href="#">Another action</Dropdown.Item>
      <Dropdown.Item href="#">Something else here</Dropdown.Item>
      <Dropdown.Item divider />
      <Dropdown.Item href="#">Separated link</Dropdown.Item>
    </DropdownButton>
    <FormControl aria-describedby="basic-addon1" />
  </InputGroup>

  <InputGroup>
    <FormControl
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />

    <DropdownButton
      as={InputGroup.Append}
      variant="outline-secondary"
      title="Dropdown"
    >
      <Dropdown.Item href="#">Action</Dropdown.Item>
      <Dropdown.Item href="#">Another action</Dropdown.Item>
      <Dropdown.Item href="#">Something else here</Dropdown.Item>
      <Dropdown.Item divider />
      <Dropdown.Item href="#">Separated link</Dropdown.Item>
    </DropdownButton>
  </InputGroup>
</>;
