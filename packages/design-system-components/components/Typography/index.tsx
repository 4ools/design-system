import styled from 'styled-components';

const HeadingOne = styled.h1`
  font-size: ${(props) => props.theme.textScale.h1};
`;

const HeadingTwo = styled.h2`
  font-size: ${(props) => props.theme.textScale.h2};
`;

const HeadingThree = styled.h3`
  font-size: ${(props) => props.theme.textScale.h3};
`;

const HeadingFour = styled.h4`
  font-size: ${(props) => props.theme.textScale.h4};
`;

const HeadingFive = styled.h5`
  font-size: ${(props) => props.theme.textScale.h5};
`;

const BodyCopy = styled.div`
  font-size: ${(props) => props.theme.textScale.copy};
`;

const Typography = {
  HeadingOne,
  HeadingTwo,
  HeadingThree,
  HeadingFour,
  HeadingFive,
  BodyCopy,
};

export default Typography;
