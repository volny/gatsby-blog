---
title: Some more code
date: "2017-09-29"
excerpt: |
  I have seen an example online that use language-jsx nicely. I have also found this PR #479. However, I don't have any coloration for my jsx. Is jsx supposed to work out of the box? On the list on the site there is also json, but json work only with js.

---

I have seen an example online that use <code>language-jsx</code> nicely. I have also found this PR <a href="https://github.com/PrismJS/prism/pull/479" class="issue-link js-issue-link" data-error-text="Failed to load issue title" data-id="54694395" data-permission-text="Issue title is private" data-url="https://github.com/PrismJS/prism/issues/479">#479</a>. However, I don't have any coloration for my jsx. Is jsx supposed to work out of the box? On the list on the site there is also <code>json</code>, but json work only with <code>js</code>.

> But wait... there's more!

- *The best test setup:* Automatically guarantee code quality and non-breaking
  changes. (Seen a react app with 99% test coverage before?)
- *Native web app:* Your app's new home? The home screen of your users' phones.
- *The fastest fonts:* Say goodbye to vacant text.
- *Stay fast*: Profile your app's performance from the comfort of your command
  line!
- *Catch problems:* AppVeyor and TravisCI setups included by default, so your
  tests get run automatically on Windows and Unix.

```jsx
// can use language-jsx out of the box 👍

const ListLink = ({ to, children }) =>
  <li style={{
    display: `inline-block`,
    marginRight: `1rem`,
  }}>
    <HeaderLink
      to={to}>
      {children}
    </HeaderLink>
  </li>

  export default ({ children, data }) =>
  <div style={{
    margin: `0 auto`,
    maxWidth: 750,
    padding: `2rem 1rem`
  }}>
    <header style={{
      marginBottom: `1.5rem`
    }}>
      <Link to="/" style={{
        textShadow: `none`,
        backgroundImage: `none`,
      }}>
        <h3 style={{ display: `inline` }}>{data.site.siteMetadata.title}</h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/files/">Files</ListLink>
        <ListLink to="/counter/">Counter</ListLink>
      </ul>
    </header>
    {children()}
  </div>
```
