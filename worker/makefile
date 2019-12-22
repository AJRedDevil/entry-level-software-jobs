download-redis:
	docker pull redis

setup-volume:
	mkdir data
	sudo chown -R 1000:1000 data/

start-redis:
	docker run --name redis-job-board \
		-p 6379:6379 \
		--restart unless-stopped \
		-v ${PWD}/data:/data\
		-d redis redis-server --appendonly yes
	
stop-redis:
	docker stop redis-job-board
	docker rm redis-job-board