#http://wkhtmltopdf.org/downloads.html
download-wkhtmltopdf:
  cmd.run:
    - cwd: /usr/local/share
    - name: wget http://downloads.sourceforge.net/project/wkhtmltopdf/0.12.0/wkhtmltox-linux-amd64_0.12.0-03c001d.tar.xz
    - unless: test -e /usr/local/share/wkhtmltox-linux-amd64_0.12.0-03c001d.tar.xz

# Extract it
extract-wkhtmltopdf:
  cmd.run:
    - cwd: /usr/local/share
    - name: tar xvf wkhtmltox-linux-amd64_0.12.0-03c001d.tar.xz
    - onlyif: test -e /usr/local/share/wkhtmltox-linux-amd64_0.12.0-03c001d.tar.xz
    - require:
      - cmd: download-wkhtmltopdf

# change credentials
wkhtmltopdf-bin:
  file.managed:
    - name: /usr/local/share/wkhtmltox/bin/wkhtmltopdf
    - user: root
    - group: root
    - mode: 755 
    - require:
      - cmd: extract-wkhtmltopdf

# Copy binary
wkhtmltopdf:
  cmd.run:
    - name: ln -s /usr/local/share/wkhtmltox/bin/wkhtmltopdf /usr/local/bin/wkhtmltopdf
    - unless: test -e /usr/local/share/wkhtmltopdf && test -e /usr/local/bin/wkhtmltopdf
    - require:
      - file: wkhtmltopdf-bin

