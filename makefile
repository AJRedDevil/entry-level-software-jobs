# worker
dockerize-worker:
	docker build -t ajreddevil/worker-job-board worker/

start-worker:
	docker run --name worker \
		--restart unless-stopped \
		--link redis:redis \
		-e NODE_ENV=docker \
		-d ajreddevil/worker-job-board

stop-worker:
	docker stop worker
	docker rm worker

view-worker-logs:
	docker logs -f worker

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