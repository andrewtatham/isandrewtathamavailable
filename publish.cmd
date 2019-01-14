aws s3 rm "s3://isandrewtathamavailable.com/" --recursive --exclude "*.docx"
aws s3 cp "dist\is-andrew-tatham-available" "s3://isandrewtathamavailable.com/" --recursive --include "*" --acl public-read