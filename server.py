from aiohttp import web

async def handle(request):
    name = request.match_info.get('name', "Anonymous")
    text = "Hello, " + name
    return web.Response(text=text)

async def NatureItems(request):
    data = {'some': 'data'}
    return web.json_response(data)

app = web.Application()
app.add_routes([web.get('/', handle),
                web.get('/web/nature-items', NatureItems),
                web.get('/{name}', handle)])

if __name__ == '__main__':
    web.run_app(app)

