#!/bin/bash

cd math && yarn && yarn link
cd ..
cd app && yarn link math && webpack && OPTIMIZED=0 webpack
