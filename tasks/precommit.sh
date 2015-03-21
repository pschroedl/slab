#!/bin/sh

if git diff --cached --name-only --diff-filter=ACM | grep '.js$' >/dev/null 2>&1
then
  ./node_modules/.bin/gulp hook_tasks
fi

exit $?
