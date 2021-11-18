docker-compose -f docker-compose.yaml -f docker-compose.test.yaml up -d
docker exec -it quiz-your-mind_api_test bash -c "npm install && npm test"