import { forwardRef } from 'react';

const Typography = forwardRef(({
  variant = 'body',
  component,
  children,
  className = '',
  ...props
}, ref) => {
  const variantConfig = {
    h1: {
      element: 'h1',
      classes: 'text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary leading-tight'
    },
    h2: {
      element: 'h2',
      classes: 'text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary leading-tight'
    },
    h3: {
      element: 'h3',
      classes: 'text-2xl md:text-3xl lg:text-4xl font-serif font-semibold text-primary leading-snug'
    },
    h4: {
      element: 'h4',
      classes: 'text-xl md:text-2xl lg:text-3xl font-serif font-semibold text-primary leading-snug'
    },
    h5: {
      element: 'h5',
      classes: 'text-lg md:text-xl lg:text-2xl font-serif font-medium text-primary leading-normal'
    },
    h6: {
      element: 'h6',
      classes: 'text-base md:text-lg lg:text-xl font-serif font-medium text-primary leading-normal'
    },
    body: {
      element: 'p',
      classes: 'text-base font-sans text-gray-700 leading-relaxed'
    },
    bodyLarge: {
      element: 'p',
      classes: 'text-lg font-sans text-gray-700 leading-relaxed'
    },
    bodySmall: {
      element: 'p',
      classes: 'text-sm font-sans text-gray-600 leading-relaxed'
    },
    script: {
      element: 'span',
      classes: 'font-script text-primary'
    },
    scriptLarge: {
      element: 'div',
      classes: 'text-2xl md:text-3xl font-script text-primary leading-normal'
    },
    label: {
      element: 'label',
      classes: 'text-sm font-sans font-medium text-gray-700'
    },
    caption: {
      element: 'span',
      classes: 'text-xs font-sans text-gray-500 leading-normal'
    }
  };

  const config = variantConfig[variant] || variantConfig.body;
  const Element = component || config.element;
  const classes = `${config.classes} ${className}`;

  return (
    <Element ref={ref} className={classes} {...props}>
      {children}
    </Element>
  );
});

Typography.displayName = 'Typography';

// Create individual components for better ergonomics
const H1 = forwardRef((props, ref) => 
  <Typography ref={ref} variant="h1" {...props} />
);
H1.displayName = 'Typography.H1';

const H2 = forwardRef((props, ref) => 
  <Typography ref={ref} variant="h2" {...props} />
);
H2.displayName = 'Typography.H2';

const H3 = forwardRef((props, ref) => 
  <Typography ref={ref} variant="h3" {...props} />
);
H3.displayName = 'Typography.H3';

const H4 = forwardRef((props, ref) => 
  <Typography ref={ref} variant="h4" {...props} />
);
H4.displayName = 'Typography.H4';

const H5 = forwardRef((props, ref) => 
  <Typography ref={ref} variant="h5" {...props} />
);
H5.displayName = 'Typography.H5';

const H6 = forwardRef((props, ref) => 
  <Typography ref={ref} variant="h6" {...props} />
);
H6.displayName = 'Typography.H6';

const Body = forwardRef((props, ref) => 
  <Typography ref={ref} variant="body" {...props} />
);
Body.displayName = 'Typography.Body';

const BodyLarge = forwardRef((props, ref) => 
  <Typography ref={ref} variant="bodyLarge" {...props} />
);
BodyLarge.displayName = 'Typography.BodyLarge';

const BodySmall = forwardRef((props, ref) => 
  <Typography ref={ref} variant="bodySmall" {...props} />
);
BodySmall.displayName = 'Typography.BodySmall';

const Script = forwardRef((props, ref) => 
  <Typography ref={ref} variant="script" {...props} />
);
Script.displayName = 'Typography.Script';

const ScriptLarge = forwardRef((props, ref) => 
  <Typography ref={ref} variant="scriptLarge" {...props} />
);
ScriptLarge.displayName = 'Typography.ScriptLarge';

const Label = forwardRef((props, ref) => 
  <Typography ref={ref} variant="label" {...props} />
);
Label.displayName = 'Typography.Label';

const Caption = forwardRef((props, ref) => 
  <Typography ref={ref} variant="caption" {...props} />
);
Caption.displayName = 'Typography.Caption';

// Attach sub-components
Typography.H1 = H1;
Typography.H2 = H2;
Typography.H3 = H3;
Typography.H4 = H4;
Typography.H5 = H5;
Typography.H6 = H6;
Typography.Body = Body;
Typography.BodyLarge = BodyLarge;
Typography.BodySmall = BodySmall;
Typography.Script = Script;
Typography.ScriptLarge = ScriptLarge;
Typography.Label = Label;
Typography.Caption = Caption;

export default Typography;
