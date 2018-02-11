# Configuration

This theme can be adjusted by adding custom styles.
Most things can be done by overwriting CSS variables but all elements
have classNames so you can still go crazy and modify whatever you want.

> If you want to add a lot of custom behavior you should probably fork this theme and start from there.

## Custom CSS

**custom-css.css**

```css
:root {
  /* Use adifferent font */
  --sans-serif: Roboto, sans-serif;
}
```

## Custom mode styles

**custom-css.css**

```css
/* Add a light header for dark mode */
:root.dark {
  --main-header-background: #fff;
  --main-header-color: #000;
  --main-header-border-color: #ddd;
}
```

## Default sizes & fonts

**root.css**

```css
:root {
  --sans-serif:
  /* Safari for OS X and iOS (San Francisco) */
  -apple-system,
  /* Chrome >= 56 for OS X (San Francisco), Windows, Linux and Android */
  system-ui,
  /* Chrome < 56 for OS X (San Francisco) */
  BlinkMacSystemFont,
  /* Windows */
  "Segoe UI",
  /* Android */
  "Roboto",
  /* Basic web fallback */
  "Helvetica Neue", Arial, sans-serif;

  --monospace:
  /* OSX 99.82% */
  "Monaco",
  /* Win 82.97% */
  "Consolas",
  /* Win 99.18% */
  "Lucida Console",
  /* Basic web fallback */
  "Andale Mono", "Courier New", monospace;

  --main-header-height: 4rem;
  --main-footer-height: 4rem;
  --left-sidebar-width: 18rem;
  --search-input-width: 24rem;
  --theme-select-width: 18rem;
  --main-content-width: 60rem;
  --search-result-width: var(--search-input-width);
  --search-result-height: 50vh;
  --global-padding: 1rem;
  --global-margin: 1.5rem;
  --input-icon-size: 1.5rem;
  --main-focus-width: 2px;
  --left-sidebar-padding-left: var(--global-padding);
  --left-sidebar-padding: calc(var(--global-padding) / 2) var(--global-padding) calc(var(--global-padding) / 2) var(--left-sidebar-padding-left);
}
```

## Default light

**light.css**

```css
:root.light {
  --main-background: #fff;
  --main-color: #000;
  --main-border-color: #c9d0d5;
  --main-link-color: #3300d1;
  --main-focus-color: #7588fb;

  --main-header-background: #3300d1;
  --main-header-color: #fff;
  --main-header-border-color: #010049;
  --main-header-link-hover-shade: rgba(255, 255, 255, 0.1);
  --main-header-link-active-shade: rgba(255, 255, 255, 0.2);
  --main-header-shadow: 0 0.175rem 0.25rem rgba(0, 0, 0, 0.35), 0 0.25rem 0.5rem rgba(0, 0, 0, 0.65);

  --left-sidebar-background: #f2f5f9;
  --left-sidebar-background-active: #acb4b7;
  --left-sidebar-color-active: #000;
  --left-sidebar-color: #000;
  --left-sidebar-border-color: #c9d0d5;
  --left-sidebar-indent-background: none;
  --left-sidebar-shadow: none;

  --card-link-hover-shade: rgba(0, 0, 0, 0.1);

  --search-separator-background: #3300d1;
  --search-separator-color: #fff;
  --search-result-background: #f2f5f9;
  --search-result-color: #000;
  --search-result-border-color: #c9d0d5;
  --search-result-selected-background: #c9d0d5;
  --search-result-selected-color: #000;
  --search-result-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.35), 0 0.5rem 0.5rem rgba(0, 0, 0, 0.65);
  --search-result-hover-shade: rgba(0, 0, 0, 0.1);
  --search-result-focus-color: #7588fb;

  --main-code-background: #c9d0d5;
  --main-code-color: #0d6663;
  --main-code-border-color: #c9d0d5;

  --pretty-code-background: initial;
  --pretty-code-color: initial;
  --pretty-code-border-color: currentColor;
  --pretty-code-shadow: none;
  --pretty-code-error-background: #7f012a;
  --pretty-code-error-color: #fff;

  --kind-background: #16181f;
  --kind-color: #696e76;

  --kind-function-background: hsl(0, 80%, 70%);
  --kind-function-color: hsl(0, 90%, 20%);

  --kind-class-background: hsl(30, 80%, 70%);
  --kind-class-color: hsl(30, 90%, 20%);

  --kind-variable-background: hsl(60, 80%, 70%);
  --kind-variable-color: hsl(60, 90%, 20%);

  --table-color: #000;
  --table-background: #f2f5f9;
  --table-border-color: #c9d0d5;
  --td-color: #000;
  --td-background: #f2f5f9;
  --td-border-color: #c9d0d5;
  --thead-color: #000;
  --thead-background: #acb4b7;
  --thead-border-color: #c9d0d5;

  --light-switch-color: #fff;
  --light-switch-background: #212429;
}
```

## Default dark

**dark.css**

```css
:root.dark {
  --main-background: #16181f;
  --main-color: #fff;
  --main-border-color: #212429;
  --main-link-color: #fc0043;
  --main-focus-color: #fd84ad;

  --main-header-background: #fc0043;
  --main-header-color: #fff;
  --main-header-border-color: #7f012a;
  --main-header-link-hover-shade: rgba(0, 0, 0, 0.1);
  --main-header-link-active-shade: rgba(0, 0, 0, 0.2);
  --main-header-shadow: 0 0.175rem 0.25rem rgba(0, 0, 0, 0.35), 0 0.25rem 0.5rem rgba(0, 0, 0, 0.65);

  --left-sidebar-background: #212429;
  --left-sidebar-background-active: #16181f;
  --left-sidebar-color-active: #fff;
  --left-sidebar-color: #fff;
  --left-sidebar-border-color: #2d3038;
  --left-sidebar-indent-background: none;
  --left-sidebar-shadow: none;

  --card-link-hover-shade: rgba(255, 255, 255, 0.1);

  --search-separator-background: #fc0043;
  --search-separator-color: #fff;
  --search-result-background: #212429;
  --search-result-color: #fff;
  --search-result-border-color: #2d3038;
  --search-result-selected-background: #16181f;
  --search-result-selected-color: #fff;
  --search-result-hover-shade: rgba(255, 255, 255, 0.1);
  --search-result-focus-color: #fd84ad;

  --search-result-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.35), 0 0.5rem 0.5rem rgba(0, 0, 0, 0.65);

  --main-code-background: #212429;
  --main-code-color: #8dffdb;
  --main-code-border-color: #2d3038;

  --pretty-code-background: initial;
  --pretty-code-color: initial;
  --pretty-code-border-color: transparent;
  --pretty-code-shadow: none;
  --pretty-code-error-background: #7f012a;
  --pretty-code-error-color: #fff;

  --kind-background: #16181f;
  --kind-color: #696e76;

  --kind-function-background: hsl(0, 80%, 70%);
  --kind-function-color: hsl(0, 90%, 20%);

  --kind-class-background: hsl(30, 80%, 70%);
  --kind-class-color: hsl(30, 90%, 20%);

  --kind-variable-background: hsl(60, 80%, 70%);
  --kind-variable-color: hsl(60, 90%, 20%);

  --table-color: #fff;
  --table-background: #16181f;
  --table-border-color: #212429;
  --td-color: #fff;
  --td-background: #16181f;
  --td-border-color: #212429;
  --thead-color: #fff;
  --thead-background: #2d3038;
  --thead-border-color: #212429;

  --light-switch-color: #000;
  --light-switch-background: #f2f5f9;
}
```
