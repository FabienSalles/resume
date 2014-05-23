#http://wkhtmltopdf.org/downloads.html
download-wkhtmltopdf:
  cmd.run:
    - cwd: /usr/local/share
    - name: wget http://downloads.sourceforge.net/project/wkhtmltopdf/0.12.0/wkhtmltox-linux-amd64_0.12.0-03c001d.tar.xz
    - unless: wkhtmltopdf

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
/usr/local/bin/wkhtmltopdf:
  file.symlink:
    - target: /usr/local/share/wkhtmltox/bin/wkhtmltopdf
    - require:
      - file: wkhtmltopdf-bin

