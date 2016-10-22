'use strict';

(function() {
  function Form() {
  }

  Form.prototype.addPost = function() {

    // initialId is needed to set id to article
    var initialId = document.querySelector('#posts').children.length + 1;

    // form inputs
    var input = document.querySelectorAll('.form-control');

    var postObj = {
      id: initialId,
      title: input[0].value,
      body: input[1].value,
      tags: input[2].value.split(' ')
    };

    localStorage.setItem('object' + initialId, JSON.stringify(postObj));

    var postElement = new Post(postObj);
    postElement.render();
  };

  window.Form = Form;

})();
