rm linyaps/link-check.md
for filename in $(ls .vitepress/sidebar/); do
  echo "generating links for $filename"
  cat .vitepress/sidebar/$filename | grep 'link' | awk '{print $2'} | xargs -i echo -e "[$filename: {}]({})\n\n" >> linyaps/link-check.md
done