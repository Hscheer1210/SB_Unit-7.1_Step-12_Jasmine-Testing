describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add a new server to allServers on submitServerInfo() with blank/empty input', function () {
    serverNameInput.value = '';
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);

  })

  it('should update <tbody> of #serverTable on updateServerTable()', function () {
    submitServerInfo();
    updateServerTable();

    let newTd = document.querySelectorAll('#serverTable td');

    expect(newTd.length).toEqual(3);
    expect(newTd[0].innerText).toEqual('Alice');
    expect(newTd[1].innerText).toEqual('$0.00');
    expect(newTd[2].innerText).toEqual('X');
  });

  afterEach(function() {
    // teardown logic

    serverId = 0;
    serverTbody.innerHTML = '';
    allServers = {};
  });
});
