
function showBackground(cb) {
    setTimeout(() => {
      console.log("1. showBackground works!");
      cb && cb();
    }, 3000);
  }
  
  function showSidebar(cb) {
    throw new Error('Catched error inside!')
    setTimeout(() => {
      throw new Error('Catched error outside!')
      console.log("2. showSidebar works!");
      cb && cb();
    }, 2000);
  }
  
  function showMenu(cb) {
    setTimeout(() => {
      console.log("3. showMenu works!");
      cb && cb();
    }, 1000);
  }
  
  function showCloseBtn(cb) {
    setTimeout(() => {
      console.log("4. showCloseBtn works!");
      cb && cb();
    }, 500);
  }
  
  const promisify = (func) => () => {
    return new Promise((res, rej) => {
      return func(res); // "res" = "cb" in functions. will call when function comletes (cb && cb())
    });
  };
  
  const asyncShowBackground = promisify(showBackground);
  const asyncShowSidebar = promisify(showSidebar);
  const asyncShowMenu = promisify(showMenu);
  const asyncShowCloseBtn = promisify(showCloseBtn);
  
  async function start() {
    try {
      await asyncShowBackground();
      await asyncShowSidebar();
      await asyncShowMenu();
      await asyncShowCloseBtn();
      console.log("All DONE!");
    } catch (err) {
      console.log("error :", err);
    } finally {
      console.log('finally works at any results')
    }
  }
  
  start();