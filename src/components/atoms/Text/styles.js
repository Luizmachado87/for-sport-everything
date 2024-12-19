import styled from 'styled-components/native';

export const CustomText = styled.Text`
    font-size: 24px;
    color: ${({ color }) => color || 'white'};
    font-weigth: bold;
    margin-top: 24px;

`;