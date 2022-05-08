# test-eleventy-load

Minimal reproducable case for an issue with eleventy-load / eleventy-load-css.

We have two top-level pages and one page in a sub-directory

```
index.md
contact.md
about/index.md
```
They all share a single layout that contains a stylesheet. When built, if we just have the top-level files then the a single css asset file is output as expected. However, with the nested source page:

**Steps:**

- Checkout the repo and `npm install`
- Run the dev build `npm start`

**Expected:**

- All pages contain a stylesheet link to a single css asset

**Actual:**

- The css asset file is output to _site/contact/assets
- The nested about/index page fails to transform the stylesheet link to the output css asset.
- The other pages have a 404 stylesheet link that assumes the file is output to _site/assets