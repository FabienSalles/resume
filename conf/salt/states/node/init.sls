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
      - bower
      - grunt-cli
    - require:
      - pkgrepo: npm-repo
      - pkg: nodejs

yeoman:
  npm.installed:
  - name:
    - yo
  - require:
    - npm: npm-packages
