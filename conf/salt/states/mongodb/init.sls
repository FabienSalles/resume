mongodb-repo: 
  pkgrepo.managed:
    - humanname: MongoDB
    - name: deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen
    - dist: dist
    - file: /etc/apt/sources.list.d/mongodb.list
    - keyid: 7F0CEB10
    - keyserver: hkp://keyserver.ubuntu.com:80
    - gpgcheck: 1
    - gpgkey: file:/etc/mongodb/10gen-gpg-key.asc
    - require_in:
      - pkg: mongodb-10gen

mongodb-10gen:
  pkg.installed:
    - require:
      - pkgrepo.managed: mongodb-repo
