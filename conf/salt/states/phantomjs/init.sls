#https://github.com/tony/salt-states-configs/blob/master/lang/nodejs/phantomjs.sls
download-phantomjs:
  cmd.run:
    - cwd: /usr/local/share
    - name: wget https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-1.9.7-linux-x86_64.tar.bz2
    - unless: test -e /usr/local/share/phantomjs-1.9.7-linux-x86_64.tar.bz2

# Extract it
extract-phantomjs:
  cmd.run:
    - cwd: /usr/local/share
    - name: tar xvf phantomjs-1.9.7-linux-x86_64.tar.bz2
    - onlyif: test -e /usr/local/share/phantomjs-1.9.7-linux-x86_64.tar.bz2
    - require:
      - cmd: download-phantomjs

# change credentials
phantomjs-bin:
  file.managed:
    - name: /usr/local/share/phantomjs-1.9.7-linux-x86_64/bin/phantomjs
    - user: root
    - group: root
    - mode: 755 
    - require:
      - cmd: extract-phantomjs

# Copy binary
phantomjs:
  cmd.run:
    - name: ln -s /usr/local/share/phantomjs-1.9.7-linux-x86_64/bin/phantomjs /usr/local/share/phantomjs && ln -s /usr/local/share/phantomjs-1.9.7-linux-x86_64/bin/phantomjs /usr/local/bin/phantomjs && ln -s /usr/local/share/phantomjs-1.9.7-linux-x86_64/bin/phantomjs /usr/bin/phantomjs
    - unless: test -e /usr/local/share/phantomjs && test -e /usr/local/bin/phantomjs && test -e /usr/bin/phantomjs
    - require:
      - file: phantomjs-bin

