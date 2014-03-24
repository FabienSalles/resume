ruby-2.1.0:
  rbenv.installed:
    - default: True

compass:
  gem.installed:
    - require:
      - rbenv : ruby-2.1.0

travis-lint:
  gem.installed:
    - require:
      - rbenv : ruby-2.1.0