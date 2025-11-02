#!/bin/bash
# Fix all colored text classes in components while preserving quotes

find components -name "*.tsx" -type f ! -path "components/hex-to-rgb.tsx" ! -path "components/color-picker.tsx" ! -path "components/fabric/*" ! -path "components/text-case-converter.tsx" | while read file; do
  # Fix purple, blue, cyan, red, yellow, pink colors (not green - that's used for h3)
  sed -i -E \
    -e "s/'text-purple-[0-9]+( dark:text-purple-[0-9]+)?'/'text-foreground'/g" \
    -e "s/'text-blue-[0-9]+( dark:text-blue-[0-9]+)?'/'text-foreground'/g" \
    -e "s/'text-cyan-[0-9]+( dark:text-cyan-[0-9]+)?'/'text-foreground'/g" \
    -e "s/'text-red-[0-9]+( dark:text-red-[0-9]+)?'/'text-foreground'/g" \
    -e "s/'text-yellow-[0-9]+( dark:text-yellow-[0-9]+)?'/'text-foreground'/g" \
    -e "s/'text-pink-[0-9]+( dark:text-pink-[0-9]+)?'/'text-foreground'/g" \
    -e "s/'text-orange-[3-4][0-9]+( dark:text-orange-[3-4][0-9]+)?'/'text-foreground'/g" \
    "$file"
done

echo "Colors fixed in all component files"



