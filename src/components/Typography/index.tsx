import styled from 'styled-components';

interface TypographyProps {
  children?: any;
  onClick?: any;
  variant?: 'h1' | 'h2' | 'h3' | 'p' | 'span'; // Changed variant options
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
  const { variant = 'p', children, ...rest } = props;

  switch (variant) {
    case 'h1':
      return <StyledH1 {...rest}>{children}</StyledH1>;
    case 'h2':
      return <StyledH2 {...rest}>{children}</StyledH2>;
    case 'h3':
      return <StyledH3 {...rest}>{children}</StyledH3>;
    case 'span':
      return <StyledSpan {...rest}>{children}</StyledSpan>;
    case 'p':
    default:
      return <StyledP {...rest}>{children}</StyledP>;
  }
}

const commonStyles = (props: TypographyProps) => `
  font-weight: ${props.fontWeight || 'inherit'};
  text-transform: ${props.texttransform || 'none'};
  font-size: ${props.fontSize || 'inherit'};
  color: ${props.color || 'inherit'};
  padding: ${props.padding || '0'};
  margin: ${props.margin || '0'};
  text-align: ${props.textalign || 'left'};
  letter-spacing: ${props.letterspacing || '0px'};
  font-family: ${props.fontfamily || 'inherit'};
  cursor: ${props.cursor || 'auto'};
`;

const StyledP = styled.p<TypographyProps>`
  ${props => commonStyles(props)}
  font-weight: ${({ fontWeight }) => fontWeight || '300'};
  font-size: ${({ fontSize }) => fontSize || '1.8rem'};
`;

const StyledH1 = styled.h1<TypographyProps>`
  ${props => commonStyles(props)}
  font-weight: ${({ fontWeight }) => fontWeight || '600' }; // Common default for h1
  font-size: ${({ fontSize }) => fontSize || '3rem'}; // Common default for h1
`;

const StyledH2 = styled.h2<TypographyProps>`
  ${props => commonStyles(props)}
  font-weight: ${({ fontWeight }) => fontWeight || '500' }; // Common default for h2
  font-size: ${({ fontSize }) => fontSize || '2.4rem' }; // Common default for h2
`;

const StyledH3 = styled.h3<TypographyProps>`
  ${props => commonStyles(props)}
  font-weight: ${({ fontWeight }) => fontWeight || '500' }; // Common default for h3
  font-size: ${({ fontSize }) => fontSize || '2rem' }; // Common default for h3
`;

const StyledSpan = styled.span<TypographyProps>`
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
