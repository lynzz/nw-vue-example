const win = nw.Window.get()

const tray = this.tray = new nw.Tray({title: 'NW'})
tray.on('click', function () {
  win.show()
})
