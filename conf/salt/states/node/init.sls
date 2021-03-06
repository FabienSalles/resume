npm-repo:
  pkgrepo.managed:
    - ppa: chris-lea/node.js
    - require_in:
      - pkg: nodejs
    - require:
      - pkg: python

nodejs:
  pkg.installed

npm-packages:
  npm.installed:
    - names:
      - yo
      - generator-webapp
      - generator-angular-fullstack
      - generator-projectfiles
      - istanbul
      - jasmine-node
      - jshint
      - multer
      - mocha
    - require:
      - pkgrepo: npm-repo
      - pkg: nodejs
      - pkg: python
