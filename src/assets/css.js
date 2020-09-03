// --white-snow: #f5f8f7;
// --sansa-rose: #ba717d;
// --tyrion-purple: #641630;
// --lyanna-magenta: #a23e5f;
// --arya-black: #0b0b0b;

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
  .body h2,
  .headline {
    font-size: 20px;
  }
  .body {
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
