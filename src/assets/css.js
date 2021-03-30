// Hover states are generally not supported so leaving links underline is a visual cue that the text is clickable.

exports.inlineCSS = `
  a {
    color: #0073ff;
  }
  h1 a,
  h2 a,
  h3 a {
    color: #292e31;
  }
  img {
    max-width: 100%;
  }
  .section-title {
    font-size: 26px;
  }
  .summary h2,
  .headline {
    font-size: 20px;
  }
  .body,
  .summary {
    font-size: 16px;
    line-height: 24px;
  }
  .footer a {
    color: #fff;
  }
`
exports.headCSS = `
  .footer {
    text-align: center;
  }
  @media(min-width: 480px) {
    .footer {
      text-align: left;
    }
  }
`