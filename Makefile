.PHONY: build serve deploy

build:
	NO_MKDOCS_2_WARNING=true mkdocs build -q

serve:
	NO_MKDOCS_2_WARNING=true mkdocs serve

deploy:
	NO_MKDOCS_2_WARNING=true mkdocs gh-deploy --force
