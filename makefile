# Redis
download-redis:
	docker pull redis

setup-volume:
	mkdir data

start-redis:
	docker run --name redis \
		--restart unless-stopped \
		-v ${PWD}/data:/data\
		-p 6379:6379 \
		-d redis redis-server --appendonly yes
	
stop-redis:
	docker stop redis
	docker rm redis