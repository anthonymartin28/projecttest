fetch("index.json")
  .then(response => response.json())
  .then(data => 
	{
		console.log(data.nbquestion)
		

	}
  );
