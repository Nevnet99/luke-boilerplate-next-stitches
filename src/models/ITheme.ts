type RadiusOptions = 'sm' | 'complete';
type TypographyOptions = 'example';
type Breakpoints = 'mobile' | 'tablet' | 'desktop' | 'laptop';

export interface ITheme {
  colors: {
    background: string;
  };
  radius: (type: RadiusOptions) => string | null;
  spacing: (value: number) => string | null;
  fontSize: (value: number) => string | null;
  minBp: (breakpoint: Breakpoints) => string | null;
  typography: (type: TypographyOptions) => string | null;
  font: {
    family: string;
  };
}
