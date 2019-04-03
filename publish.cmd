aws s3 rm "s3://isandrewtathamavailable.com/" --recursive --exclude "*.docx"
aws s3 cp "new" "s3://isandrewtathamavailable.com/" --recursive --include "*" --acl public-read