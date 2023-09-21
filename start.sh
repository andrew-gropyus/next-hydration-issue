#!/usr/bin/env bash

set -e -u -o pipefail

rm -rf packaged

npx next build

mkdir -p packaged/.next
cp -r .next/standalone/* packaged
cp -r .next/static packaged/.next
cp -r .next/server packaged/.next/server
cp .next/BUILD_ID packaged/.next
cp .next/*.json packaged/.next

cd packaged
node server.js
