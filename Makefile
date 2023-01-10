install: install-deps

start:
	npx ts-node server & npm run start

install-deps:
	npm ci