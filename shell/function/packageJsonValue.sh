#!/bin/bash
# get a value from package.json

# example name="$(sh 'function/packageJsonValue' name)"

packageJsonValue(){
   KEY=$1
   num=$2
   awk -F"[,:}]" '{for(i=1;i<=NF;i++){if($i~/'$KEY'\042/){print $(i+1)}}}' package.json | tr -d '"' | sed -n ${num}p
}
