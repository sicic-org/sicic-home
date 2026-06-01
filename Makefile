.PHONY: build serve

build:
	NO_MKDOCS_2_WARNING=true mkdocs build -q

serve:
	NO_MKDOCS_2_WARNING=true mkdocs serve
