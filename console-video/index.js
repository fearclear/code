; (function (w) {
  var map = getCharsMap()
  function toChars(context, width, height, rowChars) {
    var output = "",
      imageData = context.getImageData(0, 0, width, height),
      rowChars = width < rowChars ? width : rowChars,
      char_h = width / rowChars,
      char_w = char_h,
      rows = height / char_h,
      cols = rowChars
    // 获取灰度值
    function getBlockGray(x, y, w, h) {
      var sumGray = 0, pixels
      for (var row = 0; row < w; row++) {
        for (var col = 0; col < h; col++) {
          var cx = x + col, // 现在的X坐标点
            cy = y + row, // Y坐标点
            index = ((cy-1)* imageData.width + cx) * 4, // 目标在chars中的位置
            data = imageData.data,
            R = data[index],
            G = data[index + 1],
            B = data[index + 2],
            gray = ~~(R * 0.3 + G * 0.59 + B * 0.11)
          sumGray += gray
        }
      }
      pixels = w * h
      return ~~(sumGray / pixels)
    }
    var pos_x, pos_y, avg, ch
    for (var r = 0; r < rows; r++) {
      for (var c = 0; c < cols; c++) {
        pos_x = ~~(c * char_w)
        pos_y = ~~(r * char_h)
        avg = getBlockGray(pos_x, pos_y, ~~char_w, ~~char_h)
        ch = map[avg]
        output += ch
      }
      output += '\r\n'
    }
    return output
  }
  function getCharsMap() {
    var chars = '@$B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\|()1{}[]?-_+~<>i!lI:,\"^`\'. "'
    var charsList = chars.split('')
    var map = {}
    for (var i = 0; i < 256; i++) {
      var index = ~~(i / 3.7)
      map[i] = charsList[index]
    }
    return map
  }
  var interval
  var canvas = document.createElement("canvas")
  var video = document.querySelector('#video')

  function drawImage() {
    var ctx
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight
    if (canvas.width) {
      ctx = canvas.getContext('2d')
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
      var text = toChars(ctx, canvas.width, canvas.height, 100)
      if (window.outerWidth - window.innerWidth < canvas.width * 1.5) {
        console.log('控制台宽度过窄，无法输出')
      } else {
        console.log(text)
      }
    }
  }
  function beginDraw() {
    endDraw()
    interval = setInterval(function () {
      drawImage(1)
    }, 100)
  }
  function endDraw() {
    if (interval) {
      clearInterval(interval)
    }
  }
  function play() {
    video.src = './video.mp4'
    video.play()
    video.muted = false
    setInterval(() => {
      console.clear()
    }, 30000)
  }
  video.addEventListener("play", beginDraw)
  video.addEventListener("pause", endDraw)
  video.addEventListener("ended", endDraw)
  video.addEventListener("playing", beginDraw)
  play()
})(window || global)