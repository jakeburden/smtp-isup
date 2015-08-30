var net = reqiure('net')

module.exports = function (smtp, cb) {
  var startTime = new Date()
  var socket = net.createConnection(smtp.port, smtp.host)

  socket.on('data', function () {
    socket.end('server is up')
  })
  socket.on('error', function (err) {
    cb(err, null)
  })
  socket.on('end', function () {
    var timeDiff = (new Date - startTime)
    cb(null, timeDiff)
  })
}
