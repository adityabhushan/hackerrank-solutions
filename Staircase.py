#!/bin/python

import sys


n = int(raw_input().strip())
pivot = n;
a = "";
for i in range (0, n):
    a = "";
    for j in range (1, n+1):
        if(j < pivot):
            a+=' ';
        else:
            a+='#'
    print a
    pivot -= 1