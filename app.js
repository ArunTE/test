const express = require('express')
const app = express()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res) {
  res.send('Timeless first node js app')
})

app.get('/test', function(req, res){

	var val = {
		name: "Fazil",
		email: "fazil@timeless",
		projects: [
			{
				project_name: "BlueMatter",
				project_description: "this is blue matter project",
				project_id : 1,
				task: [
					{
						task_name: "Login screen",
						task_description: "build login screen",
						task_id: 123
					},
					{
						task_name: "Home screen",
						task_description: "build home screen",
						task_id: 1234	
					},
					{
						task_name: "Next screen",
						task_description: "build next screen",
						task_id: 12345	
					},

				]
			},
			{
				project_name: "Casino",
				project_description: "this is casino project",
				project_id : 2,
				task: [
					{
						task_name: "Login screen",
						task_description: "build login screen",
						task_id: 123
					},
					{
						task_name: "Home screen",
						task_description: "build home screen",
						task_id: 1234	
					},
					{
						task_name: "Next screen",
						task_description: "build next screen",
						task_id: 12345	
					},

				]
			},
			{
				project_name: "PacificHR",
				project_description: "this is PacificHR project",
				project_id : 3,
				task: [
					{
						task_name: "Login screen",
						task_description: "build login screen",
						task_id: 123
					},
					{
						task_name: "Home screen",
						task_description: "build home screen",
						task_id: 1234	
					},
					{
						task_name: "Next screen",
						task_description: "build next screen",
						task_id: 12345	
					},

				]
			}
		]
	};

	res.send(val);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})