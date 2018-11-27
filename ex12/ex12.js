/* get the website URL (loading page)
*/

window.onload = function() {
  document.getElementById('info').innerHTML = 'The url of this website is '
              + window.location.href;
}
