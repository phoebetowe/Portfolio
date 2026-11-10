(function () {
  var ICON = { done: '✓', 'in-progress': '…', todo: '' };
  var LABEL = { done: 'Done', 'in-progress': 'In progress', todo: 'To do' };
  fetch('PROGRESS.json').then(function (r) { return r.json(); }).then(function (d) {
    var tasks = d.tasks, done = tasks.filter(function (t) { return t.status === 'done'; }).length;
    var pct = Math.round(done / tasks.length * 100);
    document.getElementById('ring-num').textContent = pct + '%';
    document.querySelector('.ring-fill').style.strokeDashoffset = 326.7 * (1 - pct / 100);
    document.getElementById('badge').textContent = pct === 100 ? '✓ Complete' : done + ' of ' + tasks.length + ' done';
    document.getElementById('updated').textContent = 'Last updated ' + d.updated;
    document.getElementById('tasks').innerHTML = tasks.map(function (t) {
      var cls = t.status === 'in-progress' ? 'doing' : t.status;
      return '<li class="' + cls + '"><span class="mark" aria-hidden="true">' + ICON[t.status] + '</span><span>' + t.title +
        (t.notes ? '<br><small style="text-transform:none;letter-spacing:0;font-weight:400">' + t.notes + '</small>' : '') +
        '</span><small>' + LABEL[t.status] + '</small></li>';
    }).join('');
    var phases = {};
    tasks.forEach(function (t) { (phases[t.phase] = phases[t.phase] || []).push(t); });
    document.getElementById('phases').innerHTML = Object.keys(phases).map(function (p) {
      var a = phases[p], n = a.filter(function (t) { return t.status === 'done'; }).length, w = Math.round(n / a.length * 100);
      return '<div><div class="bar-label"><span>' + p + '</span><span>' + n + '/' + a.length + '</span></div><div class="bar"><i style="width:' + w + '%"></i></div></div>';
    }).join('');
  }).catch(function () { document.getElementById('tasks').innerHTML = '<li>Could not load PROGRESS.json</li>'; });
})();
