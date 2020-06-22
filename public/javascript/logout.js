async function logout() {
    const response = await fetch('/api/users/logout', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
//to logout after inactivity might not be the best wat since it will log you out regardless maybe an if
// statemnt wuld be helpfull to add with it
setTimeout(logout,300000);
  
  document.querySelector('#logout').addEventListener('click', logout);