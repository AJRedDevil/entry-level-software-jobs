# API
dockerize-api:
	docker build -t ajreddevil/api-job-board api/

start-api:
	docker run --name api \
		-p 5000:5000 \
		--restart unless-stopped \
		--link redis:redis \
		-e NODE_ENV=docker \
		-d ajreddevil/api-job-board

stop-api:
	docker stop api
	docker rm api

view-api-logs:
	docker logs -f api

# Client
dockerize-client:
	docker build -t ajreddevil/client-job-board client/

start-client:
	docker run --name client \
		-p 3000:3000 \
		--restart unless-stopped \
		-d ajreddevil/client-job-board

stop-client:
	docker stop client
	docker rm client

view-client-logs:
	docker logs -f client

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