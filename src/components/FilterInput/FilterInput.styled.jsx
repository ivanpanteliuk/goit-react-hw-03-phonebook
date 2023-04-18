import styled from '@emotion/styled';

export const Input = styled.input`
  background-color: #292929;
  color: #fff;
  border: none;
  padding: 8px 12px;
  font-size: 16px;
  border-radius: 4px;
`;

export const Label = styled.label`
  width: 480px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  margin-bottom: 20px;

  background-color: rgba(65, 65, 67, 1);
  background-image: linear-gradient(
    90deg,
    rgba(65, 65, 67, 1) 0%,
    rgba(65, 65, 67, 1) 53%
  );
  box-shadow: 15px 12px 29px -1px rgba(66, 68, 90, 1),
    inset -1px 2px 24px 0px rgba(0, 194, 255, 1);
`;
