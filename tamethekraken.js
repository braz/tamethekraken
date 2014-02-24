#!/usr/bin/env node

const Workshopper = require('workshopper')
    , path        = require('path')

Workshopper({
    name     : 'tamethekraken'
  , title    : 'TAME THE KRAKEN!'
  , subtitle : 'Taming the Kraken with MongoDB'
  , appDir   : __dirname
  , helpFile : path.join(__dirname, 'help.txt')
  , prerequisitesFile : path.join(__dirname, 'prerequisites.txt')
  , creditsFile : path.join(__dirname, 'credits.txt')
  , menu: {
    	bg: 'green',
    	fg: 'white'
	}
}).init()