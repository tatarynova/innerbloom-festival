#!/bin/bash
echo "=========================================================="\
echo "                SYSTEM INFORMATION REPORT                 "\
echo "=========================================================="\

echo "Current user: $USER"\
echo "Current date: $(date +"%a %b %d %Y")"\
echo "Current time: $(date +"%H:%M:%S")"\
echo "Home directory: $HOME"\
echo "Current working directory: $(pwd)"\
echo "Number of files in current directory: $(ls -1 | wc -l)"\