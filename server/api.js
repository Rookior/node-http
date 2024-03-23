
const http = require('http')

const hostname = '127.0.0.1'
const port = 9999



const server = http.createServer((req, res) => {
	
}).listen(port, hostname, () => {
  console.log(`服务器运行在 http://${hostname}:${port}/`)
})

// 监听来自客户端的请求
server.on('request', (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*')  //可设置允许跨域地址
	res.setHeader('Content-Type', 'application/json;charset=utf-8') // 设置utf-8字符   
   // 可以使用node提供的url模块对req.url进行解析来进行路由判断
  if(req.url === '/api/v1/auth/login') {
    
	
	res.statusCode = 200;
   
    var jsonObj={
       code :'200',
	   data:{
			 accessToken:"99999999999"
	   },
	   message:"登录成功"
    }
    res.end(JSON.stringify(jsonObj));
	
	
	
  } else {
  	// end 当所有正文和头信息发送完成以后调用，每次完成信息发送以后都必须调用，并且最后调用
    res.end('other...')
  }
})

