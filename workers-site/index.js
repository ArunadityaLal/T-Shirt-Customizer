// Import the assets from the dist folder
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // Fetch the file from the dist directory
  const url = new URL(request.url)
  const path = url.pathname === "/" ? "/index.html" : url.pathname

  try {
    const response = await fetch(`./dist${path}`)
    if (response.ok) {
      return response
    } else {
      return new Response('File not found', { status: 404 })
    }
  } catch (err) {
    return new Response('Error fetching file', { status: 500 })
  }
}
