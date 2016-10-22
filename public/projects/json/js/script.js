'use strict';

(function() {

  getData();

  // Getting data from JSON
  function getData() {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://4knort.xyz/projects/json/json/posts.json');
    xhr.onload = function(event) {
      var responseData = event.target.response;
      var dataFromJson = JSON.parse(responseData);
      renderData(dataFromJson);
    };
    xhr.send();
  }

  function renderData(dataFromJson) {
    dataFromJson.forEach(function(data) {
      var postElement = new Post(data);
      postElement.render();
    });
  }

  // form container
  var postAdd = document.querySelector('#post-add');

  postAdd.addEventListener('submit', function(event) {
    event.preventDefault();

    var postItem = new Form();
    postItem.addPost();
  });

})();
