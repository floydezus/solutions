install: install-deps

serve:
	npx json-server --watch server/db.json --port 8080

start:
	npx json-server --watch server/db.json --port 8080 & npm run start

install-deps:
	npm ci