import styled from 'styled-components';
import { textScale } from '../../utils';

const HeadingOne = styled.h1`
  font-size: ${textScale.h1};
`;

const HeadingTwo = styled.h2`
  font-size: ${textScale.h2};
`;

const HeadingThree = styled.h3`
  font-size: ${textScale.h3};
`;

const HeadingFour = styled.h4`
  font-size: ${textScale.h4};
`;

const HeadingFive = styled.h5`
  font-size: ${textScale.h5};
`;

const BodyCopy = styled.div`
  font-size: ${textScale.copy};
`;

export {
  HeadingOne,
  HeadingTwo,
  HeadingThree,
  HeadingFour,
  HeadingFive,
  BodyCopy,
};
