function tmp(parametr) {
	document.getElementsByClassName('right_panel')[0].style.background = '#1E242A';
}

var app = {
	name: 'Hello world',
  prev: 'Hello world',
  save: () => {app.prev = app.name; app.v=0},
  cancel: () => {app.name = app.prev; app.v=0}
};

alight('body', app);