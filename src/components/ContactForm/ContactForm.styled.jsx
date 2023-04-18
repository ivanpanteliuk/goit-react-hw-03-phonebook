import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 400px;
  padding: 50px;
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

export const Input = styled.input`
  background-color: #292929;
  color: #fff;
  border: none;
  padding: 8px 12px;
  font-size: 16px;
  border-radius: 4px;
  margin-bottom: 15px;
`;

export const Button = styled.button`
  background-color: #292929;
  color: #fff;
  border: none;
  padding: 8px 12px;
  font-size: 16px;
  border-radius: 4px;
  argin-bottom: 15px;
  margin-top: 15px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #2be7f5;
  }
`;

export const Label = styled.label`
  margin-bottom: 10px;
`;
