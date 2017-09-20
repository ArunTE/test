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
		"user_id": "123456789",
		"email": "fazil@gmail.com",
		"user_name": "fazil",
		"avatar": "http://dev.timeless.co/image-path/nock/fazil.png",
		"designation": "",
		"time_zone": "asia-pacific",
		"default_worksapce": "Timeless",
		"status": "on",
		"work_space": [
			{
				"work_space_id": "123",
				"name": "default",
				"role":  "owner",
				"settings": {
					"avatar": "http://dev.timeless.co/image-path/nock/fazil.png",
					"time_zone": "asia-pacific",
					"currency": "rupee",
					"website": "",
				},
				"status_flag": "active",
				"members": [
					{
						"user_id":"123456789",
						"user_name": "fazil",
						"avatar": "http://dev.timeless.co/image-path/nock/fazil.png",
					}
				],
				"discussions":[],
				"projects":[
					{
						"project_id": "",
						"name": "",
						"description": "",
						"role": "",
						"settings":{
							"avatar": "",
							"time_zone": "",
							"currency": "",
						},
						"client_info":{
							"name": "",
							"email": "",
						},
						"privacy": "",
						"task_email": "",
						"status_flag": "",
						"start_time": "",
						"end_time": "",
						"attachments": [
							{
								"file": "",
								"annotations": "",
							}
						],
						"members": [
							{
								"user_id": "",
								"user_name": "",
								"avatar": "",
							}
						],
						"discussions": "",
						"activity": "",
						"view": "",
						"section": [
							{
								"section_id": "",
								"name": "",
								"task":[	
									{
										"task_id": "",
										"name": "",
										"description": "",
										"assignee":{
											"user_id": "",
											"user_name": "",
											"avatar": "",
										},
										"due_date": "",
										"tags": "",  
										"priority": "",
										"status_flag": "",
										"privacy": "",
										"time_log": "",
										"members": [
											{
												"user_id": "",
												"user_name": "",
												"avatar": "",
											}
										],
										"subcribers": [],
										"discussions": "",
										"attachments": [
											{
												"file": "",
												"annotations": "",
											}
										],
										"activity": "",
										"sub_tasks":[
											{
												"sub_task_id": "",
												"name": "",
												"assignee":{
													"user_id": "",
													"user_name": "",
													"avatar": "",
												},
												"due_date": "",
												"status_flag": "",
											}
										]
									}

								]
							}
						]

					}
				]
			},
			{
				"work_space_id": "9876",
				"name": "Timeless",
				"role":  "developer",
				"settings": {
					"avatar": "http://dev.timeless.co/image-path/nock/svg/timeless-logo.svg",
					"time_zone": "asia-pacific",
					"currency": "dollar",
					"website": "http://bluematter.com",
				},
				"status_flag": "active",
				"members": [
					{
						"user_id":"123456789",
						"user_name": "fazil",
						"avatar": "http://dev.timeless.co/image-path/nock/fazil.png",
					},
					{
						"user_id":"1098853",
						"user_name": "sandeep",
						"avatar": "http://dev.timeless.co/image-path/nock/sandeep.png",
					},
					{
						"user_id":"53721812",
						"user_name": "anand",
						"avatar": "http://dev.timeless.co/image-path/nock/anand.png",
					}
				],
				"discussions":["1230", "5442", "7860"],
				"projects":[
					{
						"project_id": "8664328",
						"name": "Blue Matter",
						"description": "",
						"role": "developer",
						"settings":{
							"avatar": "http://dev.timeless.co/image-path/nock/svg/bluematter-logo.svg",
							"time_zone": "asia-pacific",
							"currency": "dollar",
						},
						"client_info":{
							"name": "john",
							"email": "john@bluematter.com",
						},
						"privacy": "private",
						"task_email": "",
						"status_flag": "active",
						"start_time": "12-6-2017",
						"end_time": "12-12-2017",
						"attachments": [
							{
								"file": "http://google.com",
								"annotations": "",
							}
						],
						"members": [
							{
								"user_id":"123456789",
								"user_name": "fazil",
								"avatar": "http://dev.timeless.co/image-path/nock/fazil.png",
							},
							{
								"user_id":"1098853",
								"user_name": "sandeep",
								"avatar": "http://dev.timeless.co/image-path/nock/sandeep.png",
							},
							{
								"user_id":"53721812",
								"user_name": "anand",
								"avatar": "http://dev.timeless.co/image-path/nock/anand.png",
							}
						],
						"discussions": "1287",
						"activity": "968647",
						"view": "list",
						"section": [
							{
								"section_id": "1324",
								"name": "website",
								"task":[	
									{
										"task_id": "64",
										"name": "homepage",
										"description": "",
										"assignee":{
											"user_id":"123456789",
											"user_name": "fazil",
											"avatar": "http://dev.timeless.co/image-path/nock/fazil.png",
										},
										"due_date": "25-9-2017",
										"tags": "",  
										"priority": "medium",
										"status_flag": "active",
										"privacy": "private",
										"time_log": "2:00:00",
										"members": [
											{
												"user_id":"123456789",
												"user_name": "fazil",
												"avatar": "http://dev.timeless.co/image-path/nock/fazil.png",
											},
											{
												"user_id":"53721812",
												"user_name": "anand",
												"avatar": "http://dev.timeless.co/image-path/nock/anand.png",
											}	
										],
										"subcribers": [],
										"discussions": "32453",
										"attachments": [
											{
												"file": "https://www.google.co.in/search?safe=off&q=vue+import+bootstrap+css&sa=X&ved=0ahUKEwisyJKUkLPWAhVEM48KHWPPBJYQ1QIIdCgA&biw=1440&bih=803",
												"annotations": "",
											},
											{
												"file": "https://vuejs.org/v2/guide/index.html",
												"annotations": "",
											},
										],
										"activity": "242",
										"sub_tasks":[
											{
												"sub_task_id": "3232",
												"name": "install wordpress",
												"assignee":{
													"user_id":"53721812",
													"user_name": "anand",
													"avatar": "http://dev.timeless.co/image-path/nock/anand.png",
												},
												"due_date": "24-9-2017",
												"status_flag": "active",
											},
											{
												"sub_task_id": "6479",
												"name": "install theme files",
												"assignee":{
													"user_id":"53721812",
													"user_name": "anand",
													"avatar": "http://dev.timeless.co/image-path/nock/anand.png",
												},
												"due_date": "24-9-2017",
												"status_flag": "active",
											}
										]
									},
									{
										"task_id": "87",
										"name": "retailpage",
										"description": "",
										"assignee":{
											"user_id":"53721812",
											"user_name": "anand",
											"avatar": "http://dev.timeless.co/image-path/nock/anand.png",
										},
										"due_date": "29-9-2017",
										"tags": "",  
										"priority": "medium",
										"status_flag": "active",
										"privacy": "private",
										"time_log": "2:00:00",
										"members": [
											{
												"user_id":"123456789",
												"user_name": "fazil",
												"avatar": "http://dev.timeless.co/image-path/nock/fazil.png",
											},
											{
												"user_id":"53721812",
												"user_name": "anand",
												"avatar": "http://dev.timeless.co/image-path/nock/anand.png",
											}	
										],
										"subcribers": [],
										"discussions": "67997",
										"attachments": [
											{
												"file": "https://www.google.co.in/search?safe=off&q=vue+import+bootstrap+css&sa=X&ved=0ahUKEwisyJKUkLPWAhVEM48KHWPPBJYQ1QIIdCgA&biw=1440&bih=803",
												"annotations": "",
											},
											{
												"file": "https://vuejs.org/v2/guide/index.html",
												"annotations": "",
											},
										],
										"activity": "870",
										"sub_tasks":[
											{
												"sub_task_id": "5786",
												"name": "install plugin",
												"assignee":{
													"user_id":"123456789",
													"user_name": "fazil",
													"avatar": "http://dev.timeless.co/image-path/nock/fazil.png",
												},
												"due_date": "27-9-2017",
												"status_flag": "active",
											},
											{
												"sub_task_id": "6479",
												"name": "install other files",
												"assignee":{
													"user_id":"123456789",
													"user_name": "fazil",
													"avatar": "http://dev.timeless.co/image-path/nock/fazil.png",
												},
												"due_date": "27-9-2017",
												"status_flag": "active",
											}
										]
									}

								]
							},
							{
								"section_id": "5688",
								"name": "socialmedia",
								"task":[	
									{
										"task_id": "87",
										"name": "homepage",
										"description": "",
										"assignee":{
											"user_id":"123456789",
											"user_name": "fazil",
											"avatar": "http://dev.timeless.co/image-path/nock/fazil.png",
										},
										"due_date": "25-9-2017",
										"tags": "",  
										"priority": "medium",
										"status_flag": "active",
										"privacy": "private",
										"time_log": "2:00:00",
										"members": [
											{
												"user_id":"123456789",
												"user_name": "fazil",
												"avatar": "http://dev.timeless.co/image-path/nock/fazil.png",
											},
											{
												"user_id":"53721812",
												"user_name": "anand",
												"avatar": "http://dev.timeless.co/image-path/nock/anand.png",
											}	
										],
										"subcribers": [],
										"discussions": "32453",
										"attachments": [
											{
												"file": "https://www.google.co.in/search?safe=off&q=vue+import+bootstrap+css&sa=X&ved=0ahUKEwisyJKUkLPWAhVEM48KHWPPBJYQ1QIIdCgA&biw=1440&bih=803",
												"annotations": "",
											},
											{
												"file": "https://vuejs.org/v2/guide/index.html",
												"annotations": "",
											},
										],
										"activity": "242",
										"sub_tasks":[
											{
												"sub_task_id": "3232",
												"name": "install wordpress",
												"assignee":{
													"user_id":"53721812",
													"user_name": "anand",
													"avatar": "http://dev.timeless.co/image-path/nock/anand.png",
												},
												"due_date": "24-9-2017",
												"status_flag": "active",
											},
											{
												"sub_task_id": "6479",
												"name": "install theme files",
												"assignee":{
													"user_id":"53721812",
													"user_name": "anand",
													"avatar": "http://dev.timeless.co/image-path/nock/anand.png",
												},
												"due_date": "24-9-2017",
												"status_flag": "active",
											}
										]
									},
									{
										"task_id": "87",
										"name": "retailpage",
										"description": "",
										"assignee":{
											"user_id":"53721812",
											"user_name": "anand",
											"avatar": "http://dev.timeless.co/image-path/nock/anand.png",
										},
										"due_date": "29-9-2017",
										"tags": "",  
										"priority": "medium",
										"status_flag": "active",
										"privacy": "private",
										"time_log": "2:00:00",
										"members": [
											{
												"user_id":"123456789",
												"user_name": "fazil",
												"avatar": "http://dev.timeless.co/image-path/nock/fazil.png",
											},
											{
												"user_id":"53721812",
												"user_name": "anand",
												"avatar": "http://dev.timeless.co/image-path/nock/anand.png",
											}	
										],
										"subcribers": [],
										"discussions": "67997",
										"attachments": [
											{
												"file": "https://www.google.co.in/search?safe=off&q=vue+import+bootstrap+css&sa=X&ved=0ahUKEwisyJKUkLPWAhVEM48KHWPPBJYQ1QIIdCgA&biw=1440&bih=803",
												"annotations": "",
											},
											{
												"file": "https://vuejs.org/v2/guide/index.html",
												"annotations": "",
											},
										],
										"activity": "870",
										"sub_tasks":[
											{
												"sub_task_id": "5786",
												"name": "install plugin",
												"assignee":{
													"user_id":"123456789",
													"user_name": "fazil",
													"avatar": "http://dev.timeless.co/image-path/nock/fazil.png",
												},
												"due_date": "27-9-2017",
												"status_flag": "active",
											},
											{
												"sub_task_id": "6479",
												"name": "install other files",
												"assignee":{
													"user_id":"123456789",
													"user_name": "fazil",
													"avatar": "http://dev.timeless.co/image-path/nock/fazil.png",
												},
												"due_date": "27-9-2017",
												"status_flag": "active",
											}
										]
									}

								]
							}
						]

					}
				]
			}
		]
	};

	res.send(val);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})