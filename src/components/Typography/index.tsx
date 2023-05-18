import styled from 'styled-components';

interface TypographyProps {
  children?: any;
  onClick?: any;
  variant?: 'title' | 'span' | 'p';
  fontWeight?: string;
  texttransform?: 'uppercase' | 'lowercase' | 'capitalize';
  fontSize?: string;
  color?: string;
  padding?: string;
  margin?: string;
  textalign?: 'center' | 'left' | 'right';
  letterspacing?: string;
  fontfamily?: 'var(--font-primary)' | 'var(--font-secondary)';
  cursor?: 'pointer';
}

export default function Typography(props: TypographyProps) {
  const { variant = 'p' } = props;

  switch (variant) {
    case 'title':
      return <StyledTitle {...props}>{props.children}</StyledTitle>;
    case 'span':
      return <StyledSpan {...props}>{props.children}</StyledSpan>;
    default:
      return <StyledTypography {...props}>{props.children}</StyledTypography>;
  }
}

const StyledTypography = styled.p<TypographyProps>`
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '300')};
  text-transform: ${({ texttransform }) => (texttransform ? texttransform : 'none')};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '1.8rem')};
  color: ${({ color }) => (color ? color : 'inherit')};
  padding: ${({ padding }) => (padding ? padding : '0')};
  margin: ${({ margin }) => (margin ? margin : '0')};
  text-align: ${({ textalign }) => (textalign ? textalign : 'left')};
  letter-spacing: ${({ letterspacing }) => (letterspacing ? letterspacing : '0px')};
  font-family: ${({ fontfamily }) => (fontfamily ? fontfamily : 'inherit')};
  cursor: ${({ cursor }) => (cursor ? cursor : 'auto')};
`;

const StyledTitle = styled('p')<TypographyProps>`
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '500')};
  text-transform: ${({ texttransform }) => (texttransform ? texttransform : 'none')};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '2.4rem')};
  color: ${({ color }) => (color ? color : 'inherit')};
  padding: ${({ padding }) => (padding ? padding : '0')};
  margin: ${({ margin }) => (margin ? margin : '0')};
  text-align: ${({ textalign }) => (textalign ? textalign : 'left')};
  letter-spacing: ${({ letterspacing }) => (letterspacing ? letterspacing : '0px')};
  font-family: ${({ fontfamily }) => (fontfamily ? fontfamily : 'inherit')};
  cursor: ${({ cursor }) => (cursor ? cursor : 'auto')};
`;

const StyledSpan = styled('span')<TypographyProps>`
  display: inline-block;
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '400')};
  text-transform: ${({ texttransform }) => (texttransform ? texttransform : 'none')};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : 'inherit')};
  color: ${({ color }) => (color ? color : 'inherit')};
  padding: ${({ padding }) => (padding ? padding : '0')};
  margin: ${({ margin }) => (margin ? margin : '0')};
  text-align: ${({ textalign }) => (textalign ? textalign : 'left')};
  letter-spacing: ${({ letterspacing }) => (letterspacing ? letterspacing : '0px')};
  font-family: ${({ fontfamily }) => (fontfamily ? fontfamily : 'inherit')};
  cursor: ${({ cursor }) => (cursor ? cursor : 'auto')};
`;
