export const GET: APIRoute = ({ request }) => {
	console.log(request);
	
	return new Response(JSON.stringify({
		message: "This was a POST!"
	  })
	)
  }