#!/bin/bash

# Target URL
CALENDLY="https:\/\/calendly.com\/mythonggg\/10-min-sync-with-startups"
MAILTO_1="mailto:mythonggg@gmail.com?subject=Company%20Name%20%7C%20Thong%20intro%20-%20Fullstack%20AI%20Engineer"
MAILTO_2="mailto:mythonggg@gmail.com"

# Update index.html
sed -i "s/$MAILTO_1/$CALENDLY\" target=\"_blank/g" index.html
sed -i "s/>mythonggg@gmail.com</>Book a 10-min Sync</g" index.html
sed -i "s/>Send a Brief</>Book a 10-min Sync</g" index.html

# Update b2b-terms.html
sed -i "s/$MAILTO_1/$CALENDLY\" target=\"_blank/g" b2b-terms.html
sed -i "s/>mythonggg@gmail.com</>Book a 10-min Sync</g" b2b-terms.html

# Update case study files
for file in cases/*.html; do
  sed -i "s/$MAILTO_2/$CALENDLY\" target=\"_blank/g" "$file"
done

echo "Done"
