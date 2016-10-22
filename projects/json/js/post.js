 'use strict';

(function() {
  function Post(post) {
    this._post = post;
    this._remove = this._remove.bind(this);
  }

  Post.prototype.render = function() {
    // container with posts
    var area = document.querySelector('#posts');

    localStorage.setItem('object' + this._post['id'], JSON.stringify(this._post));

    var template = document.querySelector('#post');
    this.element = template.content.children[0].cloneNode(true);

    this.element.setAttribute('id', this._post.id);
    this.element.querySelector('#title').textContent = this._post.title;
    this.element.querySelector('#text').textContent = this._post.body;

    var tags = this._post.tags;
    var tagContainer = this.element.querySelector('.tags');

    tags.forEach(function(item) {
      var tagButton = document.createElement('button');
      tagButton.className = 'btn btn-xs btn-default';
      tagButton.textContent = item;
      tagContainer.appendChild(tagButton);
    });

    area.appendChild(this.element);

    this.element.querySelector('.delete-btn').addEventListener('click', this._remove);
  };

  Post.prototype._remove = function(event) {
    event.preventDefault();

    var el = event.target;
    var article = el.parentNode.parentNode;
    var id = article.getAttribute('id');
    article.parentNode.removeChild(article);

    localStorage.removeItem('object' + id);
  };

  window.Post = Post;

})();
