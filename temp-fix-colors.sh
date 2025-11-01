#!/bin/bash
# Fix all colored text classes in time-duration-calculator.tsx

sed -i \
  -e 's/text-blue-[0-9]*/text-heading-accent/g' \
  -e 's/text-purple-[0-9]*/text-heading-accent/g' \
  -e 's/text-cyan-[0-9]*/text-heading-accent/g' \
  -e 's/text-red-[0-9]*/text-heading-accent/g' \
  -e 's/text-orange-[3-4][0-9]*/text-heading-accent/g' \
  components/time-duration-calculator.tsx

echo "Colors fixed in time-duration-calculator.tsx"


