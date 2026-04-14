#!/bin/bash

# index.html
sed -i '/<div class="contact-actions">/!b;n;a\            <a href="mailto:mythonggg@gmail.com?subject=Company%20Name%20%7C%20Thong%20intro%20-%20Fullstack%20AI%20Engineer" class="btn btn-ghost">mythonggg@gmail.com</a>' index.html

# b2b-terms.html
sed -i '/<div class="contact-actions" style="justify-content: center;">/!b;n;a\          <a href="mailto:mythonggg@gmail.com?subject=Company%20Name%20%7C%20Thong%20intro%20-%20Fullstack%20AI%20Engineer" class="btn btn-ghost">mythonggg@gmail.com</a>' b2b-terms.html

# cases
for file in cases/*.html; do
  # Find the primary button and append the email link next to it
  sed -i -e 's|class="btn btn-primary">\([^<]*\)</a>|class="btn btn-primary">\1</a>\n        <a href="mailto:mythonggg@gmail.com?subject=Company%20Name%20%7C%20Thong%20intro%20-%20Fullstack%20AI%20Engineer" class="btn btn-ghost" style="margin-left: 1rem;">mythonggg@gmail.com</a>|g' "$file"
done

echo "Fixed CTAs"
