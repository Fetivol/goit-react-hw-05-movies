import { Button, Input, Form } from './SearchBar.styled';

export const SearchBar = ({ onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Input type="text" name="query" placecholder="search your movie"></Input>
      <Button type="submit">Search</Button>
    </Form>
  );
};
