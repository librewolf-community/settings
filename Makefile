rebuild_parser:
	@echo '(Re-)building parser'
	@shards build --production --release --no-debug

generate:
	@echo 'Generating librewolf.cfg and docs.'
	@./bin/librewolf_parser

clean:
	@echo 'Cleaning up dist and bin.'
	@shards prune
	@rm -rf dist
	@rm -rf bin
