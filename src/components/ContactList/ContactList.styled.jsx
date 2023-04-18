import styled from '@emotion/styled';

export const List = styled.ul`
  padding: 30px;
  width: 440px;
  background-color: rgba(65, 65, 67, 1);
  background-image: linear-gradient(
    90deg,
    rgba(65, 65, 67, 1) 0%,
    rgba(65, 65, 67, 1) 53%
  );
  box-shadow: 15px 12px 29px -1px rgba(66, 68, 90, 1),
    inset -1px 2px 24px 0px rgba(0, 194, 255, 1);
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const Button = styled.button`
  color: #fff;
  border: none;
  padding: 8px 12px;
  font-size: 16px;
  border-radius: 4px;
  background-color: #292929;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #cf2e2e;
  }
`;
